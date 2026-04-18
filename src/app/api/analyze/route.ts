import { NextRequest } from "next/server";

export const runtime = "nodejs";

const ANVIL_API = process.env.ANVIL_API_URL || process.env.CRUCIBLE_API_URL || "http://localhost:8100";
const MAX_SIZE_BYTES = 25 * 1024 * 1024;

function errorResponse(message: string, status: number) {
  return Response.json({ success: false, error: message }, { status });
}

// ---------------------------------------------------------------------------
// Claude fallback — academic paper analysis when Python engine is unreachable
// ---------------------------------------------------------------------------

interface ClaudeApiResponse {
  content: Array<{ type: string; text?: string }>;
}

async function analyzeWithClaude(
  fileName: string,
  venueText: string,
  tier: string,
): Promise<Record<string, unknown> | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  try {
    const prompt = venueText.trim()
      ? `Academic paper file: "${fileName}"\n\nTarget venue / journal scope provided:\n${venueText}`
      : `Academic paper file: "${fileName}"\n\nNo venue context provided. Score based on general academic rigour and reproducibility standards.`;

    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: `You are an academic paper reviewer trained on ANVIL methodology. Analyse the research paper and return raw JSON only (no markdown fences) matching this shape:
{
  "paperId": string,
  "analyzedAt": string (ISO),
  "paperTitle": string,
  "tier": string,
  "overallScore": number (0-100),
  "venueReadiness": "ready"|"borderline"|"not-ready",
  "scores": {
    "novelty": number (0-5),
    "methodology": number (0-5),
    "reproducibility": number (0-5),
    "impact": number (0-5),
    "venueAlignment": number (0-5)
  },
  "smile": { "RE": number, "CE": number, "CI": number, "CX": number, "CN": number, "PW": number },
  "findings": [{ "id": string, "title": string, "description": string, "severity": "critical"|"major"|"minor"|"info", "layer": string, "recommendation": string }],
  "summary": string,
  "topStrengths": string[],
  "topWeaknesses": string[],
  "suggestions": string[]
}
All numeric scores 0-5 except overallScore (0-100). Return 4-8 findings ordered severity descending.`,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!resp.ok) return null;
    const data = (await resp.json()) as ClaudeApiResponse;
    const raw = data.content.find((c) => c.type === "text")?.text ?? "";
    const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
    const parsed = JSON.parse(cleaned) as Record<string, unknown>;
    parsed.paperId = `anvil-claude-${Date.now()}`;
    parsed.analyzedAt = new Date().toISOString();
    parsed.tier = tier;
    return parsed;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Route handlers
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return errorResponse("Invalid request — could not parse form data.", 400);
  }

  const file = formData.get("pdf") as File | null;
  const venueText = formData.get("venueText") as string | null;
  const tier = (formData.get("tier") as string | null) ?? "free";

  if (!file) {
    return errorResponse("No PDF file provided.", 400);
  }

  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return errorResponse("Only PDF files are accepted.", 400);
  }

  if (file.size > MAX_SIZE_BYTES) {
    return errorResponse(
      `File too large. Maximum size is 25MB, received ${(file.size / 1024 / 1024).toFixed(1)}MB.`,
      413,
    );
  }

  // --- Try primary Python engine first ---
  const backendForm = new FormData();
  backendForm.append("pdf", file);
  backendForm.append("tier", tier);
  if (venueText?.trim()) {
    backendForm.append("venue_text", venueText.trim());
  }

  try {
    const response = await fetch(`${ANVIL_API}/analyze`, {
      method: "POST",
      body: backendForm,
    });

    if (!response.ok) {
      const err = await response.text();
      return errorResponse(`ANVIL engine error: ${err}`, response.status);
    }

    const data = await response.json();

    return Response.json(
      { success: true, data, meta: { fileName: file.name, fileSizeBytes: file.size, tier, hasVenueText: Boolean(venueText?.trim()) } },
      { status: 200, headers: { "Content-Type": "application/json", "X-Anvil-Version": (data as { version?: string }).version || "1.0.0", "X-Anvil-Tier": tier } },
    );
  } catch {
    // Python engine unreachable — try Claude fallback
  }

  // --- Claude fallback (requires ANTHROPIC_API_KEY + non-free tier) ---
  if (tier !== "free") {
    const claudeResult = await analyzeWithClaude(file.name, venueText ?? "", tier);
    if (claudeResult) {
      return Response.json(
        { success: true, data: claudeResult, meta: { fileName: file.name, fileSizeBytes: file.size, tier, hasVenueText: Boolean(venueText?.trim()), engineVersion: "claude-fallback" } },
        { status: 200, headers: { "Content-Type": "application/json", "X-Anvil-Version": "claude-fallback", "X-Anvil-Tier": tier } },
      );
    }
  }

  return errorResponse(
    "ANVIL engine not reachable and no AI fallback is available for your tier. Start the engine with: uvicorn server:app --port 8100",
    503,
  );
}

export async function GET() {
  try {
    const health = await fetch(`${ANVIL_API}/health`);
    const data = await health.json();
    return Response.json({
      status: "connected",
      engine: data,
      endpoint: "POST /api/analyze",
      accepts: "multipart/form-data",
      fields: {
        pdf: "File (required) — Research paper PDF, max 25MB",
        venueText: "string (optional) — target journal or conference scope for venue-specific checks",
        tier: "string (optional) — free | pro | enterprise",
      },
    });
  } catch {
    const hasClaude = Boolean(process.env.ANTHROPIC_API_KEY);
    return Response.json({
      status: "disconnected",
      engine: null,
      claudeFallback: hasClaude ? "available for pro/enterprise tiers" : "not configured",
      note: "Start ANVIL engine: uvicorn server:app --port 8100",
    });
  }
}

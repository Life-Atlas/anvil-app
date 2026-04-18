import { NextRequest } from "next/server";

export const runtime = "nodejs";

const CRUCIBLE_API = process.env.CRUCIBLE_API_URL || "http://localhost:8100";
const MAX_SIZE_BYTES = 25 * 1024 * 1024;

function errorResponse(message: string, status: number) {
  return Response.json({ success: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return errorResponse("Invalid request — could not parse form data.", 400);
  }

  const file = formData.get("pdf") as File | null;
  const callText = formData.get("callText") as string | null;
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
      413
    );
  }

  const backendForm = new FormData();
  backendForm.append("pdf", file);
  backendForm.append("tier", tier);
  if (callText?.trim()) {
    backendForm.append("call_text", callText.trim());
  }

  try {
    const response = await fetch(`${CRUCIBLE_API}/analyze`, {
      method: "POST",
      body: backendForm,
    });

    if (!response.ok) {
      const err = await response.text();
      return errorResponse(`CRUCIBLE engine error: ${err}`, response.status);
    }

    const data = await response.json();

    return Response.json(
      {
        success: true,
        data,
        meta: {
          fileName: file.name,
          fileSizeBytes: file.size,
          tier,
          hasCallText: Boolean(callText?.trim()),
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Crucible-Version": data.version || "5.1.0",
          "X-Crucible-Tier": tier,
        },
      }
    );
  } catch (err) {
    return errorResponse(
      "CRUCIBLE engine not reachable. Start it with: uvicorn server:app --port 8000",
      503
    );
  }
}

export async function GET() {
  try {
    const health = await fetch(`${CRUCIBLE_API}/health`);
    const data = await health.json();
    return Response.json({
      status: "connected",
      engine: data,
      endpoint: "POST /api/analyze",
      accepts: "multipart/form-data",
      fields: {
        pdf: "File (required) — PDF proposal, max 25MB",
        callText: "string (optional) — call topic text for alignment scoring",
        tier: "string (optional) — free | single | pro | enterprise",
      },
    });
  } catch {
    return Response.json({
      status: "disconnected",
      engine: null,
      note: "Start CRUCIBLE engine: cd horizon-proposal-analyzer && uvicorn server:app --port 8000",
    });
  }
}

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import UploadZone from "@/components/UploadZone";
import ScoreCard from "@/components/ScoreCard";
import SmileRadar from "@/components/SmileRadar";
import PerspectivesRadar from "@/components/PerspectivesRadar";
import AestBar from "@/components/AestBar";
import FindingsList from "@/components/FindingsList";
import type { CrucibleAnalysisResult } from "@/lib/mockAnalysis";

type AnalysisStep = "idle" | "uploading" | "analyzing" | "done" | "error";

const ANALYSIS_STEPS = [
  { id: "upload", label: "Uploading PDF", icon: "↑" },
  { id: "structure", label: "Layer 1: Structural Integrity", icon: "◻" },
  { id: "alignment", label: "Layer 2: Call Alignment", icon: "⟷" },
  { id: "smile", label: "Layer 3: S.M.I.L.E. Field Analysis", icon: "◉" },
  { id: "patterns", label: "Layer 4: Anti-Pattern Detection", icon: "⚠" },
  { id: "perspectives", label: "Layer 5: Three Perspectives Analysis", icon: "△" },
  { id: "aest", label: "Layer 6: AEST Temporal Analysis", icon: "⧗" },
  { id: "ant", label: "Layer 7: Reality-as-Actor Analysis", icon: "⬡" },
  { id: "report", label: "Generating report", icon: "⟳" },
];

function AnalysisProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="glass rounded-2xl p-8 border border-blue-500/20 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" aria-hidden="true" />
        <h2 className="text-white font-bold text-xl">Analyzing your proposal...</h2>
      </div>

      <div className="space-y-4" role="list" aria-label="Analysis progress">
        {ANALYSIS_STEPS.map((step, i) => {
          const isDone = i < currentStep;
          const isActive = i === currentStep;
          const isPending = i > currentStep;

          return (
            <div
              key={step.id}
              className={`flex items-center gap-3 transition-all duration-500 ${isPending ? "opacity-40" : ""}`}
              role="listitem"
              aria-label={`${step.label}: ${isDone ? "complete" : isActive ? "in progress" : "pending"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 transition-all duration-300 ${
                  isDone
                    ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                    : isActive
                    ? "bg-blue-500/20 border border-blue-500/40 text-blue-400"
                    : "bg-slate-800 border border-slate-700 text-slate-600"
                }`}
                aria-hidden="true"
              >
                {isDone ? "✓" : isActive ? (
                  <span className="animate-pulse">{step.icon}</span>
                ) : step.icon}
              </div>
              <span
                className={`text-sm font-medium ${
                  isDone ? "text-emerald-400" : isActive ? "text-white" : "text-slate-500"
                }`}
              >
                {step.label}
              </span>
              {isActive && (
                <span className="ml-auto flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1 h-1 rounded-full bg-blue-400 animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700"
          style={{ width: `${Math.round((currentStep / (ANALYSIS_STEPS.length - 1)) * 100)}%` }}
          role="progressbar"
          aria-valuenow={Math.round((currentStep / (ANALYSIS_STEPS.length - 1)) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const color =
    score >= 70 ? "text-emerald-400" : score >= 50 ? "text-amber-400" : "text-red-400";
  const label =
    score >= 70 ? "Fundable with revisions" : score >= 50 ? "Below threshold — work needed" : "High risk of rejection";
  const badgeBg =
    score >= 70 ? "bg-emerald-500/10 border-emerald-500/20" : score >= 50 ? "bg-amber-500/10 border-amber-500/20" : "bg-red-500/10 border-red-500/20";

  return (
    <div className="glass rounded-2xl p-8 border border-blue-500/20 text-center">
      <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">Overall Funding Readiness</p>
      <div className={`text-7xl font-black mb-2 ${color}`}>{score}</div>
      <div className="text-slate-500 text-sm mb-4">out of 100</div>
      <span className={`inline-block px-4 py-1.5 rounded-full border text-sm font-semibold ${badgeBg} ${color}`}>
        {label}
      </span>
    </div>
  );
}

const LAYER_COLOR_CLASSES: Record<string, { border: string; text: string }> = {
  blue:    { border: "border-blue-500/20",    text: "text-blue-400" },
  purple:  { border: "border-purple-500/20",  text: "text-purple-400" },
  amber:   { border: "border-amber-500/20",   text: "text-amber-400" },
  red:     { border: "border-red-500/20",     text: "text-red-400" },
  emerald: { border: "border-emerald-500/20", text: "text-emerald-400" },
  cyan:    { border: "border-cyan-500/20",    text: "text-cyan-400" },
  violet:  { border: "border-violet-500/20",  text: "text-violet-400" },
};

function LayerSummary({ layers }: { layers: CrucibleAnalysisResult["layers"] }) {
  const items: Array<{
    name: string;
    score: number | null;
    label: string;
    sub?: string;
    color: string;
  }> = [
    {
      name: "Structural Integrity",
      score: layers.structural.score,
      label: layers.structural.label,
      color: "blue",
    },
    {
      name: "Call Alignment",
      score: layers.callAlignment.score,
      label: layers.callAlignment.label,
      color: "purple",
    },
    {
      name: "S.M.I.L.E. Field",
      score: layers.smile.score,
      label: layers.smile.label,
      color: "amber",
    },
    {
      name: "Anti-Patterns",
      score: null,
      label: `${layers.antiPatterns.count} found`,
      sub: `${layers.antiPatterns.critical} critical · ${layers.antiPatterns.major} major`,
      color: "red",
    },
    {
      name: "Perspectives",
      score: layers.perspectives.score,
      label: layers.perspectives.label,
      color: "emerald",
    },
    {
      name: "AEST Temporal",
      score: layers.aest.score,
      label: layers.aest.label,
      color: "cyan",
    },
    {
      name: "Reality-as-Actor",
      score: layers.antReality.score,
      label: layers.antReality.label,
      color: "violet",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const colors = LAYER_COLOR_CLASSES[item.color] ?? LAYER_COLOR_CLASSES["blue"];
        return (
          <div
            key={item.name}
            className={`glass rounded-xl p-4 border ${colors.border}`}
          >
            <p className="text-slate-500 text-xs mb-2">{item.name}</p>
            {item.score !== null ? (
              <p className={`text-2xl font-black mb-1 ${colors.text}`}>
                {item.score}
              </p>
            ) : (
              <p className="text-2xl font-black text-red-400 mb-1">{item.label}</p>
            )}
            <p className="text-slate-400 text-xs">{item.score !== null ? item.label : item.sub}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [callText, setCallText] = useState("");
  const [tier] = useState<"free" | "pro" | "enterprise">("free");
  const [step, setStep] = useState<AnalysisStep>("idle");
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<CrucibleAnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "findings" | "smile" | "report">("overview");

  const handleFileSelect = useCallback((f: File) => {
    setFile(f);
    setResult(null);
    setErrorMsg(null);
  }, []);

  const runAnalysis = async () => {
    if (!file) return;
    setStep("uploading");
    setAnalysisStep(0);
    setErrorMsg(null);

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("callText", callText);
    formData.append("tier", tier);

    // Simulate progressive step animation
    let currentStep = 0;
    const ticker = setInterval(() => {
      currentStep += 1;
      setAnalysisStep(currentStep);
      if (currentStep >= ANALYSIS_STEPS.length - 1) {
        clearInterval(ticker);
      }
    }, 400);

    setStep("analyzing");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        clearInterval(ticker);
        setStep("error");
        setErrorMsg(json.error ?? "Analysis failed. Please try again.");
        return;
      }

      // Wait for animation to finish
      await new Promise((r) => setTimeout(r, 600));
      clearInterval(ticker);
      setAnalysisStep(ANALYSIS_STEPS.length - 1);
      await new Promise((r) => setTimeout(r, 300));

      setResult(json.data);
      setStep("done");
      setActiveTab("overview");
    } catch (err) {
      clearInterval(ticker);
      setStep("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const reset = () => {
    setFile(null);
    setCallText("");
    setResult(null);
    setStep("idle");
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0a0f1e]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">C</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">CRUCIBLE</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium">
                Free tier
              </span>
              <Link
                href="/pricing"
                className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">

        {/* IDLE / UPLOAD STATE */}
        {(step === "idle" || step === "error") && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
                Analyze your proposal
              </h1>
              <p className="text-slate-400 text-lg">
                Upload your Horizon Europe PDF and get a scored report in under 60 seconds.
              </p>
            </div>

            {/* Free tier info */}
            <div className="glass rounded-xl p-4 border border-amber-500/20 flex items-start gap-3 mb-8">
              <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-amber-300 font-semibold text-sm">Free tier</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  You get Layer 4 anti-pattern scan and top 5 findings. Full 4-layer analysis, SMILE radar, and call alignment scoring require{" "}
                  <Link href="/pricing" className="text-amber-400 underline underline-offset-2">Pro (EUR 49/month)</Link>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Upload zone */}
              <div>
                <label className="text-white font-semibold text-sm block mb-3">
                  Proposal PDF <span className="text-red-400" aria-label="required">*</span>
                </label>
                <UploadZone onFileSelect={handleFileSelect} />
              </div>

              {/* Call text */}
              <div>
                <label htmlFor="call-text" className="text-white font-semibold text-sm block mb-1">
                  Call topic text{" "}
                  <span className="text-slate-500 font-normal">(optional, enables call alignment scoring)</span>
                </label>
                <p className="text-slate-500 text-xs mb-3">
                  Paste the call identifier, title, and expected outcomes from the EU Funding and Tenders portal.
                </p>
                <textarea
                  id="call-text"
                  value={callText}
                  onChange={(e) => setCallText(e.target.value)}
                  placeholder="e.g. HORIZON-CL4-2025-RESILIENCE-01-07 — Digital Twins for Climate-Resilient Infrastructure. Expected outcomes: ..."
                  rows={5}
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 text-sm resize-none outline-none transition-colors focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {errorMsg && (
                <div className="glass rounded-xl p-4 border border-red-500/30 flex items-start gap-3" role="alert">
                  <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-300 text-sm">{errorMsg}</p>
                </div>
              )}

              <button
                onClick={runAnalysis}
                disabled={!file}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50"
                aria-disabled={!file}
              >
                {file ? `Analyze "${file.name}"` : "Upload a PDF first"}
              </button>

              <p className="text-center text-slate-600 text-xs">
                Your PDF is processed securely and never stored permanently.
              </p>
            </div>
          </div>
        )}

        {/* ANALYZING STATE */}
        {(step === "uploading" || step === "analyzing") && (
          <div className="flex items-center justify-center py-12">
            <AnalysisProgress currentStep={analysisStep} />
          </div>
        )}

        {/* RESULTS STATE */}
        {step === "done" && result && (
          <div>
            {/* Results header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">{result.proposalTitle}</h1>
                <p className="text-slate-400 text-sm mt-1">
                  Analyzed {new Date(result.analyzedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  {" · "}
                  <span className="capitalize">{result.tier} tier</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={reset}
                  className="glass border border-slate-700 hover:border-blue-500/40 text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                >
                  New analysis
                </button>
                <Link
                  href="/pricing"
                  className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Upgrade for full report
                </Link>
              </div>
            </div>

            {/* Overall score + layer summary */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="sm:col-span-1">
                <ScoreGauge score={result.overallScore} />
              </div>
              <div className="sm:col-span-2 flex flex-col justify-center">
                <LayerSummary layers={result.layers} />
                <div className="mt-4 glass rounded-xl p-4 border border-slate-700/50">
                  <p className="text-slate-300 text-sm leading-relaxed">{result.summary}</p>
                </div>
              </div>
            </div>

            {/* Tab nav */}
            <div className="flex items-center gap-1 border-b border-slate-800 mb-8 overflow-x-auto">
              {[
                { id: "overview" as const, label: "Overview" },
                { id: "findings" as const, label: `Findings (${result.findings.length})` },
                { id: "smile" as const, label: "S.M.I.L.E. Radar", locked: result.tier === "free" },
                { id: "report" as const, label: "Export", locked: result.tier === "free" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => !tab.locked && setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-400"
                      : tab.locked
                      ? "border-transparent text-slate-600 cursor-default"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  aria-disabled={tab.locked}
                >
                  {tab.label}
                  {tab.locked && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-bold">Pro</span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "overview" && (
              <div className="space-y-8" role="tabpanel" aria-label="Overview">
                {/* Score cards */}
                <section>
                  <h2 className="text-white font-bold text-lg mb-4">Horizon Europe Scores</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {result.tier !== "free" ? (
                      <>
                        <ScoreCard label="Excellence" score={result.scores.excellence} description="Scientific quality, methodology, and state of the art" color="blue" delay={0} />
                        <ScoreCard label="Impact" score={result.scores.impact} description="Contribution to EU policy, societal challenges, and market" color="green" delay={100} />
                        <ScoreCard label="Implementation" score={result.scores.implementation} description="Work plan, consortium, resources, and risk management" color="amber" delay={200} />
                        <ScoreCard label="Call Alignment" score={result.scores.callAlignment} description="Semantic match to specific call topic and expected outcomes" color="blue" delay={300} />
                      </>
                    ) : (
                      <div className="sm:col-span-2 glass rounded-2xl p-8 border border-amber-500/20 text-center">
                        <p className="text-amber-400 font-bold text-lg mb-2">Full score breakdown requires Pro</p>
                        <p className="text-slate-400 text-sm mb-4">
                          Excellence, Impact, Implementation, and Call Alignment scores are available on Pro and Enterprise plans.
                        </p>
                        <Link
                          href="/pricing"
                          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2.5 rounded-xl transition-all duration-200"
                        >
                          Upgrade to Pro — EUR 49/month
                        </Link>
                      </div>
                    )}
                  </div>
                </section>

                {/* Strengths and weaknesses */}
                <section className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-2xl p-6 border border-emerald-500/20">
                    <h2 className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">Top Strengths</h2>
                    <ul className="space-y-3" role="list">
                      {result.topStrengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-emerald-400 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                          <span className="text-slate-300 text-sm">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6 border border-red-500/20">
                    <h2 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">Top Weaknesses</h2>
                    <ul className="space-y-3" role="list">
                      {result.topWeaknesses.map((w, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-red-400 shrink-0 mt-0.5" aria-hidden="true">!</span>
                          <span className="text-slate-300 text-sm">{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "findings" && (
              <div role="tabpanel" aria-label="Findings">
                <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                  <h2 className="text-white font-bold text-lg">
                    {result.findings.length} findings
                    {result.tier === "free" && (
                      <span className="ml-2 text-amber-400 text-sm font-normal">(showing top 5 on free tier)</span>
                    )}
                  </h2>
                </div>
                <FindingsList findings={result.findings} groupBy="severity" />
              </div>
            )}

            {activeTab === "smile" && result.tier !== "free" && (
              <div role="tabpanel" aria-label="SMILE Radar" className="space-y-8">
                <SmileRadar data={result.smile} size={320} />
                <div className="grid md:grid-cols-2 gap-8">
                  <PerspectivesRadar data={result.perspectives} size={280} />
                  <AestBar data={result.aest} />
                </div>
              </div>
            )}

            {activeTab === "report" && result.tier !== "free" && (
              <div role="tabpanel" aria-label="Export">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "PDF Report",
                      desc: "Formatted report with all scores, findings, and recommendations. Ready to share with your consortium.",
                      icon: "⬇",
                      label: "Download PDF",
                      color: "blue",
                    },
                    {
                      title: "JSON Export",
                      desc: "Machine-readable analysis data. Connect to your own tooling or the CRUCIBLE API.",
                      icon: "{ }",
                      label: "Download JSON",
                      color: "purple",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-8 border border-slate-700/50 text-center">
                      <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                      <button
                        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                          item.color === "blue"
                            ? "bg-blue-600 hover:bg-blue-500 text-white"
                            : "bg-purple-600 hover:bg-purple-500 text-white"
                        }`}
                        onClick={() => {
                          if (item.title === "JSON Export") {
                            const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `crucible-${result.proposalId}.json`;
                            a.click();
                            URL.revokeObjectURL(url);
                          }
                        }}
                      >
                        {item.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

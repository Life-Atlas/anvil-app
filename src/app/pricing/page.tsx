import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing — ANVIL Academic Paper Quality Scorer",
  description:
    "ANVIL pricing: Free tier with 1 paper/month and basic citation check. Pro EUR 29/month for unlimited papers and full 37-metric analysis. Enterprise with API and custom rubrics.",
};

const FREE_FEATURES = [
  { text: "1 paper per month", included: true, highlight: true },
  { text: "Basic citation check (density, self-citation ratio)", included: true, highlight: true },
  { text: "Top 5 findings by severity", included: true },
  { text: "Overall publication readiness score", included: true },
  { text: "No signup required", included: true },
  { text: "Full 37-metric ANVIL analysis", included: false },
  { text: "S.M.I.L.E. radar (6 dimensions)", included: false },
  { text: "Four Perspectives analysis", included: false },
  { text: "AEST temporal depth", included: false },
  { text: "PDF & JSON export", included: false },
];

const PRO_FEATURES = [
  { text: "Everything in Free, plus:", included: true },
  { text: "Unlimited papers per month", included: true, highlight: true },
  { text: "Full 37-metric ANVIL analysis", included: true, highlight: true },
  { text: "S.M.I.L.E. radar (6 dimensions)", included: true, highlight: true },
  { text: "Four Perspectives analysis", included: true, highlight: true },
  { text: "AEST temporal depth analysis", included: true, highlight: true },
  { text: "PDF report export — co-author ready", included: true },
  { text: "JSON export for your workflow", included: true },
  { text: "Batch mode — score multiple drafts", included: true },
  { text: "Venue-specific citation style checks", included: true },
  { text: "Anonymisation compliance check", included: true },
  { text: "Priority email support", included: true },
];

const ENTERPRISE_FEATURES = [
  { text: "Everything in Pro, plus:", included: true },
  { text: "REST API access (500 calls/month)", included: true, highlight: true },
  { text: "Team accounts (up to 25 researchers)", included: true, highlight: true },
  { text: "Custom rubrics per journal or funder", included: true, highlight: true },
  { text: "Institutional dashboards", included: true },
  { text: "Batch processing — 50+ papers", included: true },
  { text: "White-label report branding", included: true },
  { text: "Priority support (4h SLA)", included: true },
  { text: "Dedicated onboarding session", included: true },
  { text: "SSO / SAML integration", included: true },
];

const FAQ = [
  {
    q: "Is the free tier actually useful or just a teaser?",
    a: "It is genuinely useful. You get an overall publication readiness score, citation density analysis, self-citation ratio check, and the top 5 severity findings. For a quick sanity check before submission, that covers the most critical rejection triggers. The full 37-metric depth requires Pro.",
  },
  {
    q: "What is included in the 37-metric analysis?",
    a: "ANVIL covers eight dimensions: Structural Integrity (5 metrics — abstract, IMRAD, sections, flow, word count), Citation Quality (5 — density, self-citation ratio, recency, orphaned refs, missing refs), Theoretical Depth (5 — framework application, counter-arguments, grounding, positioning, conceptual clarity), Methodology and Rigour (5 — falsifiability, effect sizes, limitations, future work, reproducibility), S.M.I.L.E. Alignment (6 — RE/CE/CI/CX/CN/PW), Four Perspectives (4 — People/Systems/Planet/AI), AEST Temporal (4 — Absorb/Emulate/Simulate/Transcend), and Writing Quality (3 — clarity, APA 7th, anonymisation).",
  },
  {
    q: "What is a decorative citation and why does it matter?",
    a: "A decorative citation occurs when a theoretical framework (ANT, Structuration, Institutional Theory, etc.) is name-dropped to signal scholarly awareness but never operationalised analytically in the paper. Reviewers in information systems, STS, and management research flag this consistently as grounds for rejection. ANVIL scores framework application depth, not just citation presence.",
  },
  {
    q: "I submit 1-2 papers per year. Do I need Pro?",
    a: "For one or two papers a year, you could use the free tier for a quick check and upgrade to Pro for a month when you are close to submission. At EUR 29 for a month, that is far cheaper than a rejection and revision cycle. Most researchers find Pro worth it for at least the submission month.",
  },
  {
    q: "Is my paper kept confidential?",
    a: "Yes. PDFs are processed in-memory and never stored permanently. ANVIL does not train on your data. Enterprise can run on-premises for maximum data sovereignty.",
  },
  {
    q: "What citation styles does ANVIL check?",
    a: "APA 7th edition is the default and most thoroughly tested. Venue-specific checks on Pro allow you to specify journal guidelines. MLA, Chicago, and IEEE support is in the roadmap.",
  },
  {
    q: "Can I use ANVIL for non-journal papers?",
    a: "ANVIL works for conference papers, preprints, book chapters, and thesis chapters. The falsifiability and theoretical depth metrics are format-agnostic. Structural checks adapt to whether IMRAD is the expected format or not.",
  },
  {
    q: "Is ANVIL open source?",
    a: "Yes. The ANVIL analysis engine is MIT-licensed. The commercial web app provides a hosted experience with tier-gated features, PDF reports, and API access.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Papers per month",                  free: "1",         pro: "Unlimited",      enterprise: "Unlimited" },
  { feature: "Structural integrity (5 metrics)",  free: "Basic",     pro: "Full",           enterprise: "Full + custom" },
  { feature: "Citation quality (5 metrics)",      free: "Basic",     pro: "Full",           enterprise: "Full" },
  { feature: "Theoretical depth (5 metrics)",     free: "—",         pro: "Full",           enterprise: "Full" },
  { feature: "Methodology rigour (5 metrics)",    free: "—",         pro: "Full",           enterprise: "Full" },
  { feature: "S.M.I.L.E. radar (6 dimensions)",   free: "—",         pro: "Included",       enterprise: "Included + custom" },
  { feature: "Four Perspectives analysis",        free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "AEST temporal depth",               free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "Top findings shown",                free: "Top 5",     pro: "All findings",   enterprise: "All findings" },
  { feature: "Fix recommendations",               free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "Anonymisation compliance",          free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "Venue-specific checks",             free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "PDF report export",                 free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "JSON export",                       free: "—",         pro: "Included",       enterprise: "Included" },
  { feature: "Batch mode",                        free: "—",         pro: "Included",       enterprise: "50+ papers" },
  { feature: "API access",                        free: "—",         pro: "—",              enterprise: "500 calls/mo" },
  { feature: "Team accounts",                     free: "—",         pro: "—",              enterprise: "Up to 25" },
  { feature: "Custom rubrics",                    free: "—",         pro: "—",              enterprise: "Included" },
  { feature: "Support",                           free: "Community", pro: "Priority email", enterprise: "4h SLA" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0a0f1e]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">ANVIL</span>
            </Link>
            <Link
              href="/analyze"
              className="bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              Score your paper free
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Header */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              Transparent pricing — no reviewer surprises either
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Free to start.
              <br />
              <span className="gradient-text">Go deep with Pro.</span>
            </h1>
            <p className="text-slate-400 text-xl">
              Basic citation check — free, no signup required.
              <br />
              Full 37-metric ANVIL analysis when you are ready.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <PricingCard
                tier="free"
                name="Free"
                price="Free"
                description="Score one paper per month. Catch the highest-severity citation and structural issues before submission."
                features={FREE_FEATURES}
                ctaLabel="Start free — no signup"
                ctaHref="/analyze"
              />

              <PricingCard
                tier="pro"
                name="Pro"
                price="EUR 29"
                annualPrice="EUR 23"
                description="Unlimited papers. Full 37-metric depth. SMILE radar, Perspectives, AEST, PDF export — everything."
                features={PRO_FEATURES}
                ctaLabel="Start Pro"
                ctaHref="/checkout/pro"
                badge="Most popular"
                highlighted
              />

              <PricingCard
                tier="enterprise"
                name="Enterprise"
                price="EUR 149"
                description="API access, team accounts, custom rubrics, and institutional dashboards for research offices."
                features={ENTERPRISE_FEATURES}
                ctaLabel="Contact us"
                ctaHref="mailto:hello@winniio.io?subject=ANVIL Enterprise"
                badge="Teams"
              />
            </div>

            {/* Value callout */}
            <div className="mt-8 glass rounded-2xl p-6 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg shrink-0"
                  aria-hidden="true"
                >
                  A
                </div>
                <div>
                  <p className="text-white font-semibold">A peer-review rejection costs weeks of revision</p>
                  <p className="text-slate-400 text-sm">
                    ANVIL finds the same patterns in 60 seconds. Run it before submission, not after rejection.
                  </p>
                </div>
              </div>
              <Link
                href="/analyze"
                className="shrink-0 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
              >
                Try free first
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white text-center mb-12">Full feature comparison</h2>

            <div className="glass rounded-2xl border border-slate-700/50 overflow-x-auto">
              <div className="grid grid-cols-4 min-w-[600px] border-b border-slate-700/50">
                <div className="p-4 text-slate-500 text-sm font-medium">Feature</div>
                <div className="p-4 text-center text-white font-semibold text-sm border-l border-slate-700/50">Free</div>
                <div className="p-4 text-center text-amber-400 font-semibold text-sm border-l border-slate-700/50 bg-amber-500/5">
                  Pro
                </div>
                <div className="p-4 text-center text-amber-300 font-semibold text-sm border-l border-slate-700/50">Enterprise</div>
              </div>

              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 min-w-[600px] border-b border-slate-800/60 last:border-0 ${
                    i % 2 === 0 ? "" : "bg-slate-900/30"
                  }`}
                >
                  <div className="p-4 text-slate-300 text-sm">{row.feature}</div>
                  <div className="p-4 text-center text-slate-400 text-sm border-l border-slate-800/60">
                    {row.free === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      row.free
                    )}
                  </div>
                  <div className="p-4 text-center text-slate-300 text-sm border-l border-slate-800/60 bg-amber-500/5">
                    {row.pro === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      <span className="text-amber-300 font-medium">{row.pro}</span>
                    )}
                  </div>
                  <div className="p-4 text-center text-slate-300 text-sm border-l border-slate-800/60">
                    {row.enterprise === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      <span className="text-amber-200 font-medium">{row.enterprise}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white text-center mb-12">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <details
                  key={i}
                  className="glass rounded-xl border border-slate-700/50 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-white/5 rounded-xl transition-colors">
                    <span className="text-white font-semibold text-sm pr-4">{item.q}</span>
                    <svg
                      className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center glass rounded-2xl p-8 border border-amber-500/20">
              <p className="text-white font-bold text-lg mb-2">Still have questions?</p>
              <p className="text-slate-400 text-sm mb-6">
                We respond within 24 hours. For institutional demos, book a call.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@winniio.io"
                  className="w-full sm:w-auto glass border border-slate-700 hover:border-amber-500/40 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
                >
                  Email us
                </a>
                <a
                  href="https://calendly.com/futurecreation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 border-t border-slate-800/60 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-black text-white mb-4">
              Your paper deserves a fair shot
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Free. No signup. Upload your PDF and see what reviewers will flag — in under 60 seconds.
            </p>
            <Link
              href="/analyze"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
            >
              Run it through the ANVIL
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-slate-600 text-sm mt-3">No signup required · PDF stays private · 1 free paper/month</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
              <span className="text-white font-black text-xs">A</span>
            </div>
            <span className="text-white font-bold tracking-tight">ANVIL</span>
          </Link>
          <p className="text-slate-600 text-sm">2026 WINNIIO AB · Gothenburg, Sweden</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs">Privacy</a>
            <a href="/terms" className="text-slate-600 hover:text-slate-400 text-xs">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

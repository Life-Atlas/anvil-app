import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing — CRUCIBLE EU Grant Proposal Analyzer",
  description:
    "CRUCIBLE pricing: Free full analysis with all 45+ detectors. Pay EUR 9.90 per report for export. Pro EUR 49/month for unlimited. No signup required.",
};

const FREE_FEATURES = [
  { text: "All 45+ anti-pattern detectors", included: true, highlight: true },
  { text: "Full 4-layer analysis on screen", included: true, highlight: true },
  { text: "Score estimate (Excellence/Impact/Implementation)", included: true },
  { text: "3 analyses per month", included: true },
  { text: "No signup required", included: true },
  { text: "PDF & JSON report export", included: false },
  { text: "SMILE radar (6 dimensions)", included: false },
  { text: "Call alignment scoring", included: false },
  { text: "Actionable fix recommendations", included: false },
];

const SINGLE_FEATURES = [
  { text: "Everything in Free, plus:", included: true },
  { text: "Full PDF report with all findings", included: true, highlight: true },
  { text: "JSON export for your workflow", included: true, highlight: true },
  { text: "SMILE radar (6 dimensions)", included: true, highlight: true },
  { text: "Call alignment scoring", included: true, highlight: true },
  { text: "Actionable fix recommendations", included: true },
  { text: "Pre-submission checklist", included: true },
  { text: "No subscription — pay only when you need it", included: true },
];

const PRO_FEATURES = [
  { text: "Everything in Single Analysis, plus:", included: true },
  { text: "Unlimited analyses per month", included: true, highlight: true },
  { text: "EIC Pathfinder scoring mode", included: true, highlight: true },
  { text: "Strategic dimension scoring", included: true },
  { text: "Future tech radar (3yr/5yr/10yr)", included: true },
  { text: "Budget analysis mode", included: true },
  { text: "Priority email support", included: true },
  { text: "Analysis history & comparisons", included: true },
];

const ENTERPRISE_FEATURES = [
  { text: "Everything in Pro, plus:", included: true },
  { text: "REST API access (500 calls/mo)", included: true, highlight: true },
  { text: "Team accounts (up to 25 users)", included: true, highlight: true },
  { text: "Custom SMILE phase configuration", included: true, highlight: true },
  { text: "Batch processing (50+ proposals)", included: true },
  { text: "White-label report branding", included: true },
  { text: "Custom anti-pattern library", included: true },
  { text: "Priority support (4h SLA)", included: true },
  { text: "Dedicated onboarding session", included: true },
  { text: "SSO / SAML integration", included: true },
];

const FAQ = [
  {
    q: "Is the free tier actually free? What's the catch?",
    a: "No catch. You get all 45+ anti-pattern detectors, full 4-layer analysis, and score estimates — visible on screen. The free tier exists because we want every EU proposal to be better. You only pay when you want to export the report or unlock SMILE radar and call alignment.",
  },
  {
    q: "I only submit 1-2 proposals per year. Which plan?",
    a: "Single Analysis at EUR 9.90 per report. Most researchers submit once or twice a year — a monthly subscription doesn't make sense. Pay per report, get everything. No subscription, no commitment.",
  },
  {
    q: "Who needs the Pro plan?",
    a: "Grant consultants, research offices, and NCPs who review 5+ proposals per month. At 5 analyses, Pro already pays for itself vs single reports. Plus you get EIC Pathfinder mode, budget analysis, and strategic scoring.",
  },
  {
    q: "Is my proposal kept confidential?",
    a: "Yes. PDFs are processed in-memory, never stored permanently. Single Analysis and Pro users can opt into encrypted analysis history. Enterprise can run on-premises.",
  },
  {
    q: "What Horizon Europe programmes does CRUCIBLE cover?",
    a: "Validated against Cluster 1-6 RIAs/IAs, EIC Pathfinder, EIC Accelerator, ERC, and MSCA proposals. The anti-pattern library comes from real evaluation summary reports published by the European Commission.",
  },
  {
    q: "Can I use CRUCIBLE for non-EU proposals?",
    a: "The anti-pattern detectors and SMILE radar work for any multi-party R&I proposal. Call alignment is Horizon Europe-specific. Enterprise plans include custom call configuration for other funders (EIT, BMBF, Vinnova, UKRI, NSF).",
  },
  {
    q: "What if the analysis fails on my PDF?",
    a: "If CRUCIBLE can't return results for a valid proposal PDF, you get a full refund for that single analysis or month. No questions asked.",
  },
  {
    q: "Is there a team discount?",
    a: "Enterprise plan includes team accounts. For research offices reviewing 50+ proposals/year, contact us for volume pricing.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Anti-pattern detection", free: "All 45+", single: "All 45+", pro: "All 45+", enterprise: "All 45+ + custom" },
  { feature: "Structural integrity (Layer 1)", free: "Full", single: "Full", pro: "Full", enterprise: "Full" },
  { feature: "Call alignment (Layer 2)", free: "—", single: "Included", pro: "Included", enterprise: "Included" },
  { feature: "SMILE radar (Layer 3)", free: "—", single: "6 dimensions", pro: "6 dimensions", enterprise: "6 + custom" },
  { feature: "Score estimate", free: "On screen", single: "In report", pro: "In report", enterprise: "In report" },
  { feature: "Fix recommendations", free: "—", single: "Included", pro: "Included", enterprise: "Included" },
  { feature: "Pre-submission checklist", free: "—", single: "Included", pro: "Included", enterprise: "Included" },
  { feature: "PDF report export", free: "—", single: "Included", pro: "Included", enterprise: "Included" },
  { feature: "JSON export", free: "—", single: "Included", pro: "Included", enterprise: "Included" },
  { feature: "Analyses per month", free: "3", single: "Pay per use", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "EIC Pathfinder mode", free: "—", single: "—", pro: "Included", enterprise: "Included" },
  { feature: "Budget analysis", free: "—", single: "—", pro: "Included", enterprise: "Included" },
  { feature: "Strategic scoring", free: "—", single: "—", pro: "Included", enterprise: "Included" },
  { feature: "API access", free: "—", single: "—", pro: "—", enterprise: "500 calls/mo" },
  { feature: "Team accounts", free: "—", single: "—", pro: "—", enterprise: "Up to 25" },
  { feature: "Batch processing", free: "—", single: "—", pro: "—", enterprise: "50+ proposals" },
  { feature: "Support", free: "Community", single: "Email", pro: "Priority email", enterprise: "4h SLA" },
];

export default function PricingPage() {
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
            <Link
              href="/analyze"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              Try free
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Header */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Free to start.<br />Pay when you need more.
            </h1>
            <p className="text-slate-400 text-xl">
              Full analysis with all 45+ detectors — free, no signup.
              <br />
              Export reports and unlock advanced features when you&apos;re ready.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              <PricingCard
                tier="free"
                name="Free"
                price="Free"
                description="See every problem in your proposal. No signup, no credit card, no friction."
                features={FREE_FEATURES}
                ctaLabel="Start analyzing now"
                ctaHref="/analyze"
              />

              <PricingCard
                tier="single"
                name="Single Analysis"
                price="EUR 9.90"
                description="One full report with export. Perfect for the researcher who submits 1-2 proposals per year."
                features={SINGLE_FEATURES}
                ctaLabel="Buy one analysis"
                ctaHref="/checkout/single"
                badge="Most popular"
                highlighted
              />

              <PricingCard
                tier="pro"
                name="Pro"
                price="EUR 49"
                annualPrice="EUR 39"
                description="Unlimited analyses for consultants and research offices reviewing many proposals."
                features={PRO_FEATURES}
                ctaLabel="Start Pro"
                ctaHref="/checkout/pro"
              />

              <PricingCard
                tier="enterprise"
                name="Enterprise"
                price="EUR 199"
                description="API, teams, batch processing, and custom configuration for large organizations."
                features={ENTERPRISE_FEATURES}
                ctaLabel="Contact sales"
                ctaHref="mailto:hello@winniio.io?subject=CRUCIBLE Enterprise"
                badge="Teams"
              />
            </div>

            {/* Value callout */}
            <div className="mt-8 glass rounded-2xl p-6 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg" aria-hidden="true">
                  &lt;
                </div>
                <div>
                  <p className="text-white font-semibold">A consultant charges EUR 5,000-15,000 per review</p>
                  <p className="text-slate-400 text-sm">CRUCIBLE gives you 60-second feedback for EUR 9.90. Run it before the consultant, or instead of one.</p>
                </div>
              </div>
              <Link
                href="/analyze"
                className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
              >
                Try it free first
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white text-center mb-12">Full comparison</h2>

            <div className="glass rounded-2xl border border-slate-700/50 overflow-x-auto">
              {/* Table header */}
              <div className="grid grid-cols-5 min-w-[700px] border-b border-slate-700/50">
                <div className="p-4 text-slate-500 text-sm font-medium">Feature</div>
                <div className="p-4 text-center text-white font-semibold text-sm border-l border-slate-700/50">Free</div>
                <div className="p-4 text-center text-emerald-400 font-semibold text-sm border-l border-slate-700/50 bg-emerald-500/5">
                  Single
                </div>
                <div className="p-4 text-center text-blue-400 font-semibold text-sm border-l border-slate-700/50">
                  Pro
                </div>
                <div className="p-4 text-center text-amber-400 font-semibold text-sm border-l border-slate-700/50">Enterprise</div>
              </div>

              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 min-w-[700px] border-b border-slate-800/60 last:border-0 ${
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
                  <div className="p-4 text-center text-slate-300 text-sm border-l border-slate-800/60 bg-emerald-500/5">
                    {row.single === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      <span className="text-white font-medium">{row.single}</span>
                    )}
                  </div>
                  <div className="p-4 text-center text-slate-300 text-sm border-l border-slate-800/60">
                    {row.pro === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      <span className="text-blue-300 font-medium">{row.pro}</span>
                    )}
                  </div>
                  <div className="p-4 text-center text-slate-300 text-sm border-l border-slate-800/60">
                    {row.enterprise === "—" ? (
                      <span className="text-slate-700" aria-label="Not included">—</span>
                    ) : (
                      <span className="text-amber-300 font-medium">{row.enterprise}</span>
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

            <div className="mt-12 text-center glass rounded-2xl p-8 border border-blue-500/20">
              <p className="text-white font-bold text-lg mb-2">Still have questions?</p>
              <p className="text-slate-400 text-sm mb-6">
                We answer within 24 hours. For enterprise demos, book a call.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@winniio.io"
                  className="w-full sm:w-auto glass border border-slate-700 hover:border-blue-500/40 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
                >
                  Email us
                </a>
                <a
                  href="https://calendly.com/futurecreation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200"
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
              Your next proposal deserves better odds
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Free. No signup. Upload your PDF and see what evaluators will flag — in 60 seconds.
            </p>
            <Link
              href="/analyze"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
            >
              Try CRUCIBLE free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-black text-xs">C</span>
            </div>
            <span className="text-white font-bold tracking-tight">CRUCIBLE</span>
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

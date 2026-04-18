import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing — ANVIL Academic Paper Quality Scorer",
  description:
    "ANVIL pricing: Free tier with 1 paper/month and basic citation check. Pro EUR 29/month for unlimited papers and full 7-layer analysis. Enterprise for API and batch scoring.",
};

const FREE_FEATURES = [
  { text: "1 paper/month", included: true, highlight: true },
  { text: "Basic citation check (APA 7th)", included: true, highlight: true },
  { text: "Self-citation ratio detection", included: true },
  { text: "Top 5 quality findings", included: true },
  { text: "No signup required", included: true },
  { text: "Full 7-layer ANVIL analysis", included: false },
  { text: "SMILE radar (6 dimensions)", included: false },
  { text: "PDF & JSON report export", included: false },
  { text: "Actionable fix recommendations", included: false },
];

const PRO_FEATURES = [
  { text: "Unlimited papers per month", included: true, highlight: true },
  { text: "Full 7-layer ANVIL analysis", included: true, highlight: true },
  { text: "SMILE methodology radar", included: true, highlight: true },
  { text: "Four Perspectives radar", included: true, highlight: true },
  { text: "AEST temporal depth scoring", included: true },
  { text: "Anonymisation compliance check", included: true },
  { text: "PDF & JSON report export", included: true },
  { text: "Actionable fix recommendations", included: true },
  { text: "Analysis history & comparisons", included: true },
  { text: "Priority email support", included: true },
];

const ENTERPRISE_FEATURES = [
  { text: "Everything in Pro, plus:", included: true },
  { text: "REST API access (500 calls/mo)", included: true, highlight: true },
  { text: "Batch scoring (50+ papers)", included: true, highlight: true },
  { text: "Custom rubrics per journal", included: true, highlight: true },
  { text: "Team accounts (up to 25 users)", included: true },
  { text: "White-label report branding", included: true },
  { text: "Custom quality issue library", included: true },
  { text: "Priority support (4h SLA)", included: true },
  { text: "Dedicated onboarding session", included: true },
  { text: "SSO / SAML integration", included: true },
];

const FAQ = [
  {
    q: "What does the free tier actually check?",
    a: "The free tier runs a basic citation integrity scan: APA 7th compliance on the reference list, self-citation ratio calculation, orphaned and ghost citation detection, and citation density per section. You receive the top 5 findings. This alone catches the issues that most commonly trigger reviewer flags.",
  },
  {
    q: "I submit 1-2 papers per year. Do I need Pro?",
    a: "The free tier gives you the citation check for each submission. If you want the full 7-layer analysis including theoretical depth scoring, SMILE radar, falsifiability check, and the export PDF to share with co-authors, Pro at EUR 29/month is worthwhile for even a single paper — one revision cycle saved is worth far more.",
  },
  {
    q: "Who needs the Enterprise plan?",
    a: "Research offices, journal editors running pre-submission services, doctoral supervisors reviewing multiple student papers per month, and consultancies offering manuscript review services. The batch API lets you score 50+ papers programmatically and the custom rubric system supports different citation standards per target venue.",
  },
  {
    q: "Is my paper kept confidential?",
    a: "Yes. PDFs are processed in-memory, never stored permanently. Pro users can opt into encrypted analysis history for version comparison. Enterprise can run on-premises or in a private cloud environment.",
  },
  {
    q: "What citation styles does ANVIL support?",
    a: "Full APA 7th edition compliance check on the free tier. Pro adds APA 6th, Chicago 17th, IEEE, Harvard, and Vancouver (medical). Enterprise adds custom citation style configuration for specific journals.",
  },
  {
    q: "Can ANVIL detect all decorative citations?",
    a: "ANVIL detects decorative citations probabilistically: it checks whether framework-specific vocabulary appears in the analysis sections after citation, whether cited theories are mentioned in the coding or analysis language, and whether the theoretical contribution section makes claims that require the framework. It is not 100% accurate — use it as a first-pass flag, not a final verdict.",
  },
  {
    q: "What if the analysis fails on my PDF?",
    a: "If ANVIL cannot return results for a valid paper PDF, you get a full refund for that analysis month. No questions asked. For best results, ensure the PDF has a text layer (not a scanned image).",
  },
  {
    q: "Does ANVIL work for conference papers?",
    a: "Yes. ANVIL works for any academic manuscript: journal articles, conference papers, book chapters, and working papers. The anonymisation compliance check includes double-blind conference submission policies. Specify the target venue in the optional field for venue-specific checks.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Papers per month", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Citation integrity (Layer 1)", free: "Basic", pro: "Full APA 7th+", enterprise: "Full + custom style" },
  { feature: "Theoretical depth (Layer 2)", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "SMILE radar (Layer 3)", free: "—", pro: "6 dimensions", enterprise: "6 + custom" },
  { feature: "Falsifiability check (Layer 4)", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "Four Perspectives (Layer 5)", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "AEST temporal (Layer 6)", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "Anonymisation check (Layer 7)", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "Quality findings shown", free: "Top 5", pro: "All", enterprise: "All" },
  { feature: "Fix recommendations", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "PDF report export", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "JSON export", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "Analysis history", free: "—", pro: "Included", enterprise: "Included" },
  { feature: "API access", free: "—", pro: "—", enterprise: "500 calls/mo" },
  { feature: "Batch scoring", free: "—", pro: "—", enterprise: "50+ papers" },
  { feature: "Custom rubrics", free: "—", pro: "—", enterprise: "Per journal" },
  { feature: "Team accounts", free: "—", pro: "—", enterprise: "Up to 25" },
  { feature: "Support", free: "Community", pro: "Priority email", enterprise: "4h SLA" },
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
              Try free
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
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Start free.<br />Go deep with Pro.
            </h1>
            <p className="text-slate-400 text-xl">
              1 paper/month with basic citation check — free, no signup.
              <br />
              Unlock full 7-layer ANVIL analysis when you&apos;re ready.
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
                description="Basic citation check for every paper. No signup, no credit card, no friction."
                features={FREE_FEATURES}
                ctaLabel="Start scoring now"
                ctaHref="/analyze"
              />

              <PricingCard
                tier="pro"
                name="Pro"
                price="EUR 29"
                annualPrice="EUR 23"
                description="Unlimited papers with the full 7-layer ANVIL analysis for researchers who publish regularly."
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
                description="API, batch scoring, and custom rubrics for research offices and consultancies."
                features={ENTERPRISE_FEATURES}
                ctaLabel="Contact sales"
                ctaHref="mailto:hello@winniio.io?subject=ANVIL Enterprise"
                badge="Teams"
              />
            </div>

            {/* Value callout */}
            <div className="mt-8 glass rounded-2xl p-6 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg" aria-hidden="true">
                  &lt;
                </div>
                <div>
                  <p className="text-white font-semibold">One revision cycle costs weeks of time</p>
                  <p className="text-slate-400 text-sm">ANVIL catches the issues reviewers flag — in 60 seconds, before submission.</p>
                </div>
              </div>
              <Link
                href="/analyze"
                className="shrink-0 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
              >
                Try it free first
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white text-center mb-12">Full comparison</h2>

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
                      <span className="text-amber-200 font-medium">{row.pro}</span>
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

            <div className="mt-12 text-center glass rounded-2xl p-8 border border-amber-500/20">
              <p className="text-white font-bold text-lg mb-2">Still have questions?</p>
              <p className="text-slate-400 text-sm mb-6">
                We answer within 24 hours. For enterprise demos, book a call.
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
              Your next paper deserves a better shot
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Free. No signup. Upload your PDF and see what reviewers will flag — in 60 seconds.
            </p>
            <Link
              href="/analyze"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
            >
              Try ANVIL free
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

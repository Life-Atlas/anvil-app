import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANVIL — Academic Narrative Verification and Integrity Layer",
  description:
    "Run your research paper through the ANVIL. Catch citation gaps, theoretical decorations, and structural weaknesses — before reviewers do.",
};

const ANALYSIS_LAYERS = [
  {
    number: "01",
    title: "Citation Integrity",
    description:
      "APA 7th edition compliance check across all in-text citations and reference list entries. Detects orphaned references (cited but not listed), ghost references (listed but never cited), citation density analysis (target: 2–3 per page), and self-citation ratio flagging above the 30% threshold.",
    color: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Theoretical Depth",
    description:
      "Are frameworks APPLIED analytically or just cited? ANVIL detects decorative citations — where a theory (ANT, Structuration, Complexity, Institutional Theory) is name-dropped to add authority but never operationalised in the analysis. Also checks whether theoretical contributions are explicitly stated versus implicit.",
    color: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "S.M.I.L.E. Alignment",
    description:
      "Six-phase radar analysis mapping the paper across the Sustainable Methodology for Impact Lifecycle Enablement. Does the research ground itself in current reality? Does it test hypotheses virtually before claiming effects? Does it contribute reusable knowledge that outlives the study? Impact first, data last.",
    color: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Falsifiability Check",
    description:
      "Are the paper's propositions testable? ANVIL checks whether research questions or hypotheses are stated in a falsifiable form, whether expected effect sizes are specified (not just direction), whether null results are acknowledged, and whether limitations sections are substantive rather than perfunctory.",
    color: "red",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Four Perspectives",
    description:
      "Diamond radar mapping the paper across People, Systems, Planet, and AI. Checks whether human subjects, ethics, and stakeholder impact are addressed (People), whether technical systems and interoperability are considered (Systems), environmental or spatial dimensions acknowledged (Planet), and AI/algorithmic contributions disclosed (AI).",
    color: "green",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "AEST Temporal",
    description:
      "Does the paper operate across time? Absorb (prior art and historical grounding — are foundational and recent works both cited?), Emulate (present state — is the research context accurately represented?), Simulate (future implications — are generalisations bounded?), Transcend (contribution beyond the study — open data, replication packages, theory extensions).",
    color: "cyan",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Anonymisation & Compliance",
    description:
      "Detects residual identifying information that may break double-blind review: author-identifying company names, individual names in acknowledgements, self-referential GitHub links, institutional affiliations in text, funding disclosures that reveal identity, and proper open-access licensing statement presence.",
    color: "violet",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const QUALITY_ISSUES_PREVIEW = [
  "Decorative ANT citation — not applied",
  "Self-citation ratio above 30%",
  "APA 7th: missing DOIs on 8 entries",
  "Orphaned reference: Jones (2021)",
  "Hypothesis not falsifiable as stated",
  "Effect size absent from main claim",
  "Limitations section under 80 words",
  "Company name in methods section",
  "Citation density <1.5/page in Sec 3",
  "Theory contribution not stated",
  "No replication package mentioned",
  "Ghost citation: Smith et al. (2019)",
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Upload your research paper",
    description:
      "Drag and drop your paper as a PDF or paste the Markdown source. We accept manuscripts at any stage — preprint, submitted, or under revision. No account required for the free tier.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Select target journal or conference",
    description:
      "Optional but powerful: specify the publication venue. This enables venue-specific citation style checks, scope alignment scoring, and anonymisation compliance against that journal's double-blind policy.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Get citation analysis in under 60 seconds",
    description:
      "Receive citation quality, theoretical depth, methodology rigour, domain relevance, and writing quality scores, a SMILE radar, a prioritised findings list with actionable fixes, and a PDF report ready to share with co-authors.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "60s", prefix: "~", label: "Full analysis time" },
  { value: "7", prefix: "", label: "Analysis layers" },
  { value: "30%", prefix: "<", label: "Max self-citation threshold" },
  { value: "2–3", prefix: "", label: "Target citations per page" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0a0f1e]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">ANVIL</span>
            </div>
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <Link href="#how-it-works" className="text-slate-400 hover:text-white text-sm transition-colors">
                How it works
              </Link>
              <Link href="#methodology" className="text-slate-400 hover:text-white text-sm transition-colors">
                Methodology
              </Link>
              <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">
                Pricing
              </Link>
            </nav>
            <Link
              href="/analyze"
              className="bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Score your paper
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 pb-32">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-600/8 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-800/10 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              Built from real peer-review rejection feedback
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              Academic Paper{" "}
              <span className="gradient-text">Quality Scorer</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 max-w-3xl mx-auto">
              Run your research paper through the ANVIL — citation analysis in 60 seconds.
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Catch citation gaps, theoretical decorations, and structural weaknesses — before reviewers do.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/analyze"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
              >
                Upload your paper — free
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto glass text-white font-semibold px-8 py-4 rounded-xl text-lg border border-slate-700 hover:border-amber-500/40 transition-all duration-200"
              >
                See Pro features
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-800">
              {STATS.map((s) => (
                <div key={s.label} className="glass px-6 py-5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {s.prefix}{s.value}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                The problem
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Most reviewer rejections.
                <br />
                <span className="text-slate-400">Are caused by</span>{" "}
                <span className="text-amber-400">preventable patterns.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Reviewers reject papers not because the research is bad, but because citations are
                poorly managed, theoretical frameworks are decorative rather than analytical, and
                claims are not falsifiable. The difference between accepted and rejected is often
                a handful of structural and rhetorical patterns you can fix before submission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "45%",
                  title: "Self-citation threshold breach",
                  body: "Papers exceeding 30% self-citation ratio trigger bias flags. ANVIL catches this automatically before any reviewer sees it.",
                  color: "red",
                },
                {
                  stat: "60%",
                  title: "Decorative citations detected",
                  body: "Most theoretical framework citations name-drop without applying the framework analytically. Reviewers notice every time.",
                  color: "amber",
                },
                {
                  stat: "7",
                  title: "Analysis layers",
                  body: "From APA 7th compliance to falsifiability, perspectives balance, and double-blind anonymisation — all checked in under 60 seconds.",
                  color: "gold",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="glass rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/20 transition-all duration-300"
                >
                  <div
                    className={`text-4xl font-black mb-3 ${
                      card.color === "red"
                        ? "text-red-400"
                        : "text-amber-400"
                    }`}
                  >
                    {card.stat}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEVEN LAYERS */}
        <section className="py-24 border-t border-slate-800/60" id="methodology">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Analysis architecture
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                Seven layers of scrutiny
              </h2>
              <p className="text-slate-400 text-lg">
                Every paper passes through a complete pipeline — from citation compliance
                to theoretical depth, methodology rigour, falsifiability, perspective balance,
                temporal depth, and anonymisation.
              </p>
            </div>

            <div className="relative">
              <div
                className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-violet-500/30"
                aria-hidden="true"
              />

              <div className="space-y-4">
                {ANALYSIS_LAYERS.map((layer) => (
                  <div key={layer.number} className="lg:pl-24 relative">
                    <div
                      className={`hidden lg:flex absolute left-0 top-6 w-16 h-16 rounded-2xl items-center justify-center text-white
                        ${layer.color === "amber" ? "bg-amber-500/20 border border-amber-500/30" : ""}
                        ${layer.color === "purple" ? "bg-purple-500/20 border border-purple-500/30" : ""}
                        ${layer.color === "red" ? "bg-red-500/20 border border-red-500/30" : ""}
                        ${layer.color === "green" ? "bg-emerald-500/20 border border-emerald-500/30" : ""}
                        ${layer.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30" : ""}
                        ${layer.color === "violet" ? "bg-violet-500/20 border border-violet-500/30" : ""}
                      `}
                      aria-hidden="true"
                    >
                      {layer.icon}
                    </div>

                    <div
                      className={`glass rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01]
                        ${layer.color === "amber" ? "border-amber-500/20 hover:border-amber-500/40" : ""}
                        ${layer.color === "purple" ? "border-purple-500/20 hover:border-purple-500/40" : ""}
                        ${layer.color === "red" ? "border-red-500/20 hover:border-red-500/40" : ""}
                        ${layer.color === "green" ? "border-emerald-500/20 hover:border-emerald-500/40" : ""}
                        ${layer.color === "cyan" ? "border-cyan-500/20 hover:border-cyan-500/40" : ""}
                        ${layer.color === "violet" ? "border-violet-500/20 hover:border-violet-500/40" : ""}
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`lg:hidden shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                            ${layer.color === "amber" ? "bg-amber-500/20 text-amber-400" : ""}
                            ${layer.color === "purple" ? "bg-purple-500/20 text-purple-400" : ""}
                            ${layer.color === "red" ? "bg-red-500/20 text-red-400" : ""}
                            ${layer.color === "green" ? "bg-emerald-500/20 text-emerald-400" : ""}
                            ${layer.color === "cyan" ? "bg-cyan-500/20 text-cyan-400" : ""}
                            ${layer.color === "violet" ? "bg-violet-500/20 text-violet-400" : ""}
                          `}
                          aria-hidden="true"
                        >
                          {layer.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`text-xs font-mono font-bold
                                ${layer.color === "amber" ? "text-amber-500" : ""}
                                ${layer.color === "purple" ? "text-purple-500" : ""}
                                ${layer.color === "red" ? "text-red-500" : ""}
                                ${layer.color === "green" ? "text-emerald-500" : ""}
                                ${layer.color === "cyan" ? "text-cyan-500" : ""}
                                ${layer.color === "violet" ? "text-violet-500" : ""}
                              `}
                            >
                              LAYER {layer.number}
                            </span>
                          </div>
                          <h3 className="text-white font-bold text-xl mb-2">{layer.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{layer.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SMILE SECTION */}
        <section className="py-24 border-t border-slate-800/60 bg-gradient-to-b from-transparent to-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6">
                  Methodology
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                  Scored against{" "}
                  <span className="text-amber-400">S.M.I.L.E.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Sustainable Methodology for Impact Lifecycle Enablement. Every ANVIL analysis
                  maps your paper across the six phases of societal contribution — from grounding
                  in current reality to knowledge that transcends the study.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Academic papers that score well on SMILE move from descriptive to explanatory
                  to prescriptive. Impact first, data last. The radar immediately shows whether
                  your paper is stuck in Absorb/Emulate or reaches Simulate/Transcend territory.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { letter: "1", word: "Reality Emulation", desc: "Is the research context accurately modelled?" },
                    { letter: "2", word: "Concurrent Engineering", desc: "Are hypotheses tested before real-world claims?" },
                    { letter: "3", word: "Collective Intelligence", desc: "Does the paper draw on shared ontologies and datasets?" },
                    { letter: "4", word: "Contextual Intelligence", desc: "Is the analysis situated and context-sensitive?" },
                    { letter: "5", word: "Continuous Intelligence", desc: "Does the paper enable ongoing inference or prediction?" },
                    { letter: "6", word: "Perpetual Wisdom", desc: "Does the contribution outlive the specific study?" },
                  ].map((item) => (
                    <div
                      key={item.letter}
                      className="glass rounded-xl p-4 border border-slate-700/50 hover:border-amber-500/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-amber-400 font-black text-lg w-5">{item.letter}</span>
                        <span className="text-white font-semibold text-sm">{item.word}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radar preview */}
              <div className="glass rounded-2xl p-8 border border-amber-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Sample SMILE Output</h3>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold">Pro</span>
                </div>

                <svg
                  viewBox="0 0 300 300"
                  className="w-full max-w-xs mx-auto"
                  aria-label="Sample SMILE radar chart showing paper methodology dimensions"
                  role="img"
                >
                  {[1, 2, 3, 4, 5].map((ring) => {
                    const r = (ring / 5) * 110;
                    const pts = Array.from({ length: 6 }, (_, i) => {
                      const a = (i * 60 - 90) * (Math.PI / 180);
                      return `${(150 + r * Math.cos(a)).toFixed(1)},${(150 + r * Math.sin(a)).toFixed(1)}`;
                    }).join(" ");
                    return (
                      <polygon key={ring} points={pts} fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1" />
                    );
                  })}

                  {Array.from({ length: 6 }, (_, i) => {
                    const a = (i * 60 - 90) * (Math.PI / 180);
                    return (
                      <line
                        key={i}
                        x1="150" y1="150"
                        x2={(150 + 110 * Math.cos(a)).toFixed(1)}
                        y2={(150 + 110 * Math.sin(a)).toFixed(1)}
                        stroke="rgba(245,158,11,0.2)" strokeWidth="1"
                      />
                    );
                  })}

                  {(() => {
                    const vals = [3.8, 2.4, 3.9, 4.1, 2.2, 3.3];
                    const colors = ["#f59e0b","#10b981","#8b5cf6","#3b82f6","#ef4444","#06b6d4"];
                    const labels = ["RE","CE","CI","CX","CN","PW"];
                    const pts = vals.map((v, i) => {
                      const a = (i * 60 - 90) * (Math.PI / 180);
                      const r = (v / 5) * 110;
                      return `${(150 + r * Math.cos(a)).toFixed(1)},${(150 + r * Math.sin(a)).toFixed(1)}`;
                    }).join(" ");
                    return (
                      <>
                        <polygon points={pts} fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.7)" strokeWidth="2" />
                        {vals.map((v, i) => {
                          const a = (i * 60 - 90) * (Math.PI / 180);
                          const r = (v / 5) * 110;
                          const lr = 134;
                          return (
                            <g key={i}>
                              <circle cx={(150 + r * Math.cos(a)).toFixed(1)} cy={(150 + r * Math.sin(a)).toFixed(1)} r="4" fill={colors[i]} stroke="white" strokeWidth="1.5" />
                              <circle cx={(150 + lr * Math.cos(a)).toFixed(1)} cy={(150 + lr * Math.sin(a)).toFixed(1)} r="13" fill={`${colors[i]}22`} />
                              <text
                                x={(150 + lr * Math.cos(a)).toFixed(1)}
                                y={(150 + lr * Math.sin(a)).toFixed(1)}
                                textAnchor="middle" dominantBaseline="central"
                                fill={colors[i]} fontSize="11" fontWeight="700"
                              >
                                {labels[i]}
                              </text>
                            </g>
                          );
                        })}
                      </>
                    );
                  })()}
                </svg>

                <div className="mt-4 p-3 bg-amber-500/5 rounded-xl border border-amber-500/10">
                  <p className="text-slate-400 text-xs text-center">
                    Strong on Contextual Intelligence (CX=4.1) and Collective Intelligence (CI=3.9). Weak on Continuous Intelligence (CN=2.2) and Concurrent Engineering (CE=2.4).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY ISSUES PREVIEW */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Quality issue library
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                We know what reviewers flag
              </h2>
              <p className="text-slate-400 text-lg">
                Documented quality issues from real peer-review rejection letters, coded and
                classified by severity. A sample of what ANVIL checks:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {QUALITY_ISSUES_PREVIEW.map((issue, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-3.5 border border-red-500/10 hover:border-amber-500/25 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500/15 flex items-center justify-center" aria-hidden="true">
                      <span className="text-amber-400 text-xs font-bold">!</span>
                    </div>
                    <span className="text-slate-300 text-xs font-medium group-hover:text-white transition-colors">
                      {issue}
                    </span>
                  </div>
                </div>
              ))}
              <div className="glass rounded-xl p-3.5 border border-slate-700/50 col-span-2 sm:col-span-1 flex items-center justify-center">
                <span className="text-slate-500 text-sm">+40 more patterns</span>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/analyze"
                className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 text-amber-300 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                Check my paper for quality issues
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 border-t border-slate-800/60 bg-gradient-to-b from-transparent to-slate-900/20" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Process
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                Three steps to a stronger paper
              </h2>
              <p className="text-slate-400 text-lg">
                From upload to actionable report in under 60 seconds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={i} className="glass rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      {step.icon}
                    </div>
                    <span className="text-slate-700 font-black text-4xl">{step.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/analyze"
                className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
              >
                Start your free analysis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-slate-600 text-sm mt-3">No signup required · PDF stays private · 1 free paper/month</p>
            </div>
          </div>
        </section>

        {/* PRICING PREVIEW */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Pricing
              </p>
              <h2 className="text-4xl font-black text-white mb-4">
                Start free. Go deep with Pro.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                {
                  name: "Free",
                  price: "EUR 0",
                  sub: "forever",
                  features: ["1 paper/month", "Basic citation check", "Top 5 findings"],
                  cta: "Start free",
                  href: "/analyze",
                  featured: false,
                },
                {
                  name: "Pro",
                  price: "EUR 29",
                  sub: "/month",
                  features: ["Unlimited papers", "Full 7-layer ANVIL analysis", "SMILE radar", "PDF + JSON export"],
                  cta: "Start Pro",
                  href: "/pricing",
                  badge: "Most popular",
                  featured: true,
                },
                {
                  name: "Enterprise",
                  price: "EUR 149",
                  sub: "/month",
                  features: ["Everything in Pro", "API access", "Batch scoring", "Custom rubrics"],
                  cta: "Contact us",
                  href: "mailto:hello@winniio.io",
                  featured: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${
                    plan.featured
                      ? "bg-amber-600/10 border-amber-500/40 ring-1 ring-amber-500/30"
                      : "glass border-slate-700/50"
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-black text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm mb-1">{plan.sub}</span>
                  </div>
                  <ul className="space-y-2 mb-6" role="list">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400 text-xs" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    className={`block w-full py-2.5 rounded-xl text-center font-semibold text-sm transition-all duration-200 ${
                      plan.featured
                        ? "bg-amber-600 hover:bg-amber-500 text-white"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/pricing" className="text-amber-400 hover:text-amber-300 text-sm font-medium underline underline-offset-2">
                See full pricing comparison
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 border-t border-slate-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl p-12 border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="text-amber-400 text-6xl font-black leading-none mb-6 select-none" aria-hidden="true">"</div>
                <blockquote className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                  We built ANVIL from the wreckage of a paper rejected twice for decorative theory use
                  and a self-citation ratio that signalled bias. Reviewers were right. Every pattern in
                  the quality issue library was discovered the hard way.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shrink-0" aria-hidden="true">
                    N
                  </div>
                  <div>
                    <p className="text-white font-semibold">Nicolas Waern</p>
                    <p className="text-slate-400 text-sm">Founder, WINNIIO AB · Digital Twin researcher · Academic author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 border-t border-slate-800/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/5 to-transparent" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Your paper deserves
              <br />
              <span className="gradient-text">a fair shot.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-10">
              Upload now. No signup required. Results in under 60 seconds.
            </p>
            <Link
              href="/analyze"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
            >
              Run it through the ANVIL
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SMILE Ecosystem strip */}
          <div className="mb-12 glass rounded-2xl p-6 border border-amber-500/15">
            <p className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Part of the SMILE Ecosystem
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-5">
              <a
                href="https://github.com/Life-Atlas/smile-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                SMILE as a Service
              </a>
              <a
                href="https://github.com/Life-Atlas/crucible-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                CRUCIBLE — Proposal Analyzer
              </a>
              <a
                href="https://lifeatlas.github.io/the-sentinel-seed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                Research Library
              </a>
              <a
                href="https://lifeatlas.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                lifeatlas.online
              </a>
            </div>
            <a
              href="https://calendly.com/futurecreation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600/15 border border-amber-500/25 text-amber-300 text-sm font-semibold hover:bg-amber-600/25 transition-all"
            >
              Book a consulting session — Nicolas Waern / WINNIIO AB
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                  <span className="text-white font-black text-sm">A</span>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">ANVIL</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Academic paper quality scoring built on S.M.I.L.E. methodology
                by WINNIIO AB, Gothenburg, Sweden.
              </p>
              <p className="text-slate-600 text-xs mt-4">
                Academic Narrative Verification and Integrity Layer (MIT open-source core)
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
              <ul className="space-y-2.5" role="list">
                {[
                  { label: "Analyze", href: "/analyze" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Methodology", href: "#methodology" },
                  { label: "API", href: "/api/analyze" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-2.5" role="list">
                {[
                  { label: "WINNIIO AB", href: "https://winniio.io", external: true },
                  { label: "Life Atlas", href: "https://lifeatlas.online", external: true },
                  { label: "Contact", href: "mailto:hello@winniio.io", external: false },
                  { label: "GitHub", href: "https://github.com/Life-Atlas", external: true },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">
              2026 Nicolas Waern / WINNIIO AB · Gothenburg, Sweden
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy</a>
              <a href="/terms" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

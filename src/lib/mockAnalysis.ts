import type { Finding } from "@/components/FindingsList";

export interface AnvilAnalysisResult {
  proposalId: string;
  analyzedAt: string;
  proposalTitle: string;
  tier: "free" | "pro" | "enterprise";

  overallScore: number; // 0–100
  publicationReadiness: "ready" | "borderline" | "not-ready";

  scores: {
    citation_quality: number;      // 0–5
    theoretical_depth: number;     // 0–5
    methodology_rigour: number;    // 0–5
    domain_relevance: number;      // 0–5
    writing_quality: number;       // 0–5
  };

  smile: {
    RE: number;  // Reality Emulation
    CE: number;  // Concurrent Engineering
    CI: number;  // Collective Intelligence
    CX: number;  // Contextual Intelligence
    CN: number;  // Continuous Intelligence
    PW: number;  // Perpetual Wisdom
  };

  perspectives: {
    people: number;  // 0–5
    systems: number; // 0–5
    planet: number;  // 0–5
    ai: number;      // 0–5
  };

  aest: {
    absorb: number;    // 0–5
    emulate: number;   // 0–5
    simulate: number;  // 0–5
    transcend: number; // 0–5
  };

  antReality: {
    realityAsActor: number;     // 0–5
    nonHumanActants: number;    // 0–5
    obligatoryPassage: number;  // 0–5
    translationMoments: number; // 0–5
  };

  findings: Finding[];

  summary: string;
  topStrengths: string[];
  topWeaknesses: string[];

  layers: {
    structural: { score: number; label: string };
    callAlignment: { score: number; label: string };
    smile: { score: number; label: string };
    antiPatterns: { count: number; critical: number; major: number };
    perspectives: { score: number; label: string };
    aest: { score: number; label: string };
    antReality: { score: number; label: string };
  };
}

// Keep the exported type alias so existing imports of CrucibleAnalysisResult still resolve
export type CrucibleAnalysisResult = AnvilAnalysisResult;

export const MOCK_ANALYSIS: AnvilAnalysisResult = {
  proposalId: "mock-paper-001",
  analyzedAt: new Date().toISOString(),
  proposalTitle: "Boundary Objects in Digital Twin Implementation: An Actor-Network Analysis of Municipal Infrastructure Projects",
  tier: "pro",

  overallScore: 58,
  publicationReadiness: "borderline",

  scores: {
    citation_quality: 2.8,
    theoretical_depth: 2.4,
    methodology_rigour: 3.6,
    domain_relevance: 4.1,
    writing_quality: 3.3,
  },

  smile: {
    RE: 3.8,
    CE: 2.4,
    CI: 3.9,
    CX: 4.1,
    CN: 2.2,
    PW: 3.3,
  },

  perspectives: {
    people: 3.6,
    systems: 4.2,
    planet: 2.1,
    ai: 2.4,
  },

  aest: {
    absorb: 4.0,
    emulate: 3.8,
    simulate: 2.1,
    transcend: 1.9,
  },

  antReality: {
    realityAsActor: 3.2,
    nonHumanActants: 2.6,
    obligatoryPassage: 2.0,
    translationMoments: 1.8,
  },

  findings: [
    {
      id: "f001",
      title: "Decorative ANT citation — Callon mentioned but not applied",
      description:
        "The paper cites Callon (1986) and Latour (1987) in the theoretical framework section but never applies ANT concepts (inscription, translation, obligatory passage point, interessement) to the empirical data. Actor-Network Theory is used as decoration to signal theoretical awareness rather than as an analytical lens. Reviewers familiar with ANT will identify this immediately.",
      severity: "critical",
      layer: "Theoretical Depth",
      antiPattern: "TD-01: Decorative Framework Citation",
      recommendation:
        "Either remove ANT from the framework and replace with a theory you actually apply, or systematically reanalyse your case data using ANT vocabulary. Identify at least one obligatory passage point in each municipal case and trace the translation moments. This will require significant revision but will transform the theoretical contribution.",
      pageRef: "Section 2.2, pp. 6–8",
    },
    {
      id: "f002",
      title: "Self-citation ratio 45% — exceeds 30% threshold",
      description:
        "Of the 38 citations in the reference list, 17 are self-citations by the authors. This 45% self-citation rate significantly exceeds the commonly accepted 30% threshold and creates an appearance of citation bias. Double-blind reviewers who identify the authors through their citation patterns may flag this explicitly.",
      severity: "critical",
      layer: "Citation Integrity",
      antiPattern: "CI-04: Self-Citation Bias",
      recommendation:
        "Replace at least 8 self-citations with equivalent third-party literature that makes the same theoretical or empirical points. Retain self-citations only where they represent unique datasets or validated frameworks not available elsewhere in the literature.",
      pageRef: "Reference list, pp. 18–21",
    },
    {
      id: "f003",
      title: "Hypothesis is not falsifiable as stated",
      description:
        "The central proposition — 'Digital twins improve coordination in municipal infrastructure projects' — is not falsifiable as written. 'Improve' is undefined, the comparison baseline is absent, and no operationalisation of 'coordination' is provided. A reviewer operating under Popperian standards will reject this as a research hypothesis.",
      severity: "critical",
      layer: "Falsifiability Check",
      antiPattern: "FA-02: Non-falsifiable Proposition",
      recommendation:
        "Restate the hypothesis with: a measurable dependent variable (e.g. 'coordination latency measured in days to decision'), a defined comparison condition (with vs. without digital twin support), a minimum effect size (e.g. ≥20% reduction), and a specified measurement instrument.",
      pageRef: "Section 1.3, p. 4",
    },
    {
      id: "f004",
      title: "APA 7th: 6 reference entries missing DOIs",
      description:
        "Six journal article entries in the reference list lack DOI links despite the articles having registered DOIs. APA 7th edition (2020) mandates DOI inclusion for all journal articles where available. This signals incomplete reference management.",
      severity: "major",
      layer: "Citation Integrity",
      antiPattern: "CI-01: APA 7th Non-compliance",
      recommendation:
        "Run the reference list through a DOI lookup tool (CrossRef, DOI.org) and add the missing DOIs. Check the complete list against APA 7th formatting rules — also verify author et al. thresholds (3+ authors → et al. from first citation).",
      pageRef: "Reference list, pp. 18–21",
    },
    {
      id: "f005",
      title: "Planet perspective absent — no environmental framing",
      description:
        "The Four Perspectives analysis reveals a significant gap: the Planet dimension scores 2.1/5. The paper studies municipal infrastructure projects — exactly the domain where spatial, environmental, and GIS dimensions are most relevant — yet makes no reference to environmental impact, carbon footprint of infrastructure decisions, or geospatial data sources.",
      severity: "major",
      layer: "Four Perspectives",
      recommendation:
        "Add a paragraph in the discussion section connecting digital twin implementation to environmental decision-making: reduced material waste through virtual testing, spatial optimisation of infrastructure placement, and long-term environmental monitoring capabilities.",
      pageRef: "Section 4, pp. 12–15",
    },
    {
      id: "f006",
      title: "No replication package or open data statement",
      description:
        "The paper presents interview data and document analysis but provides no information about data availability, anonymisation protocols, or replication package. Many journals in information systems and science & technology studies now require FAIR data statements.",
      severity: "major",
      layer: "Anonymisation & Compliance",
      antiPattern: "AC-03: No Open Data Statement",
      recommendation:
        "Add a Data Availability Statement section specifying: interview transcripts are confidential per ethics approval (cite approval number), analysis codes and coding scheme are available from the corresponding author on reasonable request, and any documentary sources that are public are listed in an appendix.",
    },
    {
      id: "f007",
      title: "Effect size absent — findings stated as directional only",
      description:
        "The results section reports that digital twins 'significantly reduced' coordination latency and 'notably improved' stakeholder alignment. No quantitative effect sizes, confidence intervals, or statistical significance values are provided despite the paper collecting structured interview data that could support quantification.",
      severity: "major",
      layer: "Falsifiability Check",
      antiPattern: "FA-05: Effect Size Absent",
      recommendation:
        "Quantify the central claims: report average latency reduction with standard deviation, or if using qualitative data exclusively, explicitly reframe findings as 'descriptive' and 'exploratory' rather than 'significant' and 'notable' — terms that imply statistical warrant you have not provided.",
      pageRef: "Section 3.2, pp. 10–12",
    },
    {
      id: "f008",
      title: "Orphaned reference: Geels (2004) cited but not in reference list",
      description:
        "The paper cites 'Geels (2004)' in Section 2.3 but no Geels 2004 entry appears in the reference list. This is either a missing reference or a citation to the wrong year of publication.",
      severity: "major",
      layer: "Citation Integrity",
      antiPattern: "CI-02: Orphaned Citation",
      recommendation:
        "Identify whether you meant Geels (2002) 'Technological transitions as evolutionary reconfiguration processes' or Geels (2004) 'From sectoral systems of innovation to socio-technical systems' and add the correct full entry to the reference list.",
      pageRef: "Section 2.3, p. 8",
    },
    {
      id: "f009",
      title: "Limitations section is 47 words — substantively inadequate",
      description:
        "The limitations section (Section 5.2) runs to only 47 words and states only that the study is limited to three municipalities. It makes no mention of selection bias in interviewee recruitment, temporal limitations of the study window, generalisability boundaries, or researcher positionality.",
      severity: "minor",
      layer: "Falsifiability Check",
      antiPattern: "FA-06: Perfunctory Limitations",
      recommendation:
        "Expand to at least 200 words addressing: interviewee selection criteria and potential bias, time-bounding of the study, transferability conditions (what types of municipal projects would and would not generalise), and a brief positionality statement.",
      pageRef: "Section 5.2, p. 16",
    },
    {
      id: "f010",
      title: "Company name 'Siemens' in methods section",
      description:
        "The methods section mentions 'the Siemens-provided digital twin platform used in Case B'. This identifies a specific commercial vendor in a way that may de-anonymise the case organisation and could compromise double-blind review if the organisation is publicly known to use this platform.",
      severity: "minor",
      layer: "Anonymisation & Compliance",
      antiPattern: "AC-01: Identifying Information",
      recommendation:
        "Replace with a generic descriptor: 'a commercial BIM-integrated digital twin platform (vendor details available post-review)'. Ensure the same anonymisation is applied to all technology-specific references that could identify participant organisations.",
      pageRef: "Section 2.4, p. 9",
    },
    {
      id: "f011",
      title: "AEST gap: no Transcend dimension — paper ends with the study",
      description:
        "The AEST analysis shows strong Absorb (4.0) and Emulate (3.8) — solid prior art grounding and accurate case representation — but Simulate (2.1) and Transcend (1.9) are weak. The paper does not describe how its findings can be tested in other contexts, and there is no replication or extension pathway offered to future researchers.",
      severity: "minor",
      layer: "AEST Temporal",
      recommendation:
        "Add a 'Future Research' paragraph to the conclusion specifying: two or three testable propositions derived from the findings, the types of organisations or contexts where replication would be most informative, and whether the interview protocol or coding scheme will be made available to support systematic replication.",
      pageRef: "Section 5.3, p. 17",
    },
    {
      id: "f012",
      title: "Citation density in Section 3 is 0.8 citations per page",
      description:
        "The methods section (Section 3, 4 pages) contains only 3 citations — a density of 0.75/page against the target of 2–3/page. This signals that the methodological choices are being presented as self-evident rather than grounded in established research methodology literature.",
      severity: "minor",
      layer: "Citation Integrity",
      recommendation:
        "Add citations for each major methodological choice: case study design (Yin, 2018), semi-structured interview protocol (Brinkmann, 2013), thematic analysis (Braun and Clarke, 2006 or 2019 reflexive update), and purposive sampling rationale (Patton, 2015).",
      pageRef: "Section 3, pp. 9–12",
    },
    {
      id: "f013",
      title: "GitHub link identifies research group",
      description:
        "Footnote 7 contains a GitHub URL (github.com/[lab-name]/dt-study) that directly identifies the research group and breaks double-blind anonymisation.",
      severity: "info",
      layer: "Anonymisation & Compliance",
      antiPattern: "AC-02: De-anonymising URL",
      recommendation:
        "Replace with '[GitHub repository — URL provided post-review]' or use an anonymous review link service such as anonymized.io for the submission version.",
      pageRef: "Footnote 7, p. 10",
    },
  ],

  summary:
    "This paper addresses a timely and relevant research problem with solid empirical grounding across three municipal cases. The methodology is coherent and the domain relevance is high. However, three critical deficiencies undermine publishability: ANT is cited decoratively without analytical application, the self-citation ratio of 45% exceeds acceptable thresholds, and the central proposition is not falsifiable as stated. These are not cosmetic issues — they require substantive revision. With targeted rewriting (est. 25–40 hours), this paper is publishable in an IS or STS journal.",

  topStrengths: [
    "Strong empirical grounding across three well-selected municipal infrastructure cases",
    "High domain relevance — digital twin governance in public sector is under-researched",
    "Methodological coherence between case study design and research questions",
    "Writing quality is clear and readable throughout",
  ],

  topWeaknesses: [
    "ANT cited but never analytically applied — decorative theory use",
    "Self-citation ratio 45% — will trigger bias flag from reviewers",
    "Central hypothesis is not falsifiable — 'improve coordination' undefined",
    "Limitations section inadequate at 47 words",
  ],

  layers: {
    structural: { score: 64, label: "Acceptable" },
    callAlignment: { score: 74, label: "Good" },
    smile: { score: 63, label: "Acceptable" },
    antiPatterns: { count: 13, critical: 3, major: 5 },
    perspectives: { score: 60, label: "Acceptable" },
    aest: { score: 54, label: "Needs Work" },
    antReality: { score: 48, label: "Needs Work" },
  },
};

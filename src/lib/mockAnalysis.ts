import type { Finding } from "@/components/FindingsList";

export interface CrucibleAnalysisResult {
  proposalId: string;
  analyzedAt: string;
  proposalTitle: string;
  tier: "free" | "pro" | "enterprise";

  overallScore: number; // 0–100
  fundingReadiness: "ready" | "borderline" | "not-ready";

  scores: {
    excellence: number;       // 0–5
    impact: number;           // 0–5
    implementation: number;   // 0–5
    callAlignment: number;    // 0–5
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

export const MOCK_ANALYSIS: CrucibleAnalysisResult = {
  proposalId: "mock-001",
  analyzedAt: new Date().toISOString(),
  proposalTitle: "EDGE-VERSE: Edge-Native Digital Twin Platform for Urban Resilience",
  tier: "pro",

  overallScore: 61,
  fundingReadiness: "borderline",

  scores: {
    excellence: 3.2,
    impact: 3.8,
    implementation: 2.9,
    callAlignment: 3.5,
  },

  smile: {
    RE: 4.1,
    CE: 2.8,
    CI: 4.2,
    CX: 3.3,
    CN: 2.5,
    PW: 3.6,
  },

  perspectives: {
    people: 3.2,
    systems: 4.0,
    planet: 2.4,
    ai: 2.8,
  },

  aest: {
    absorb: 3.8,
    emulate: 4.1,
    simulate: 2.6,
    transcend: 2.1,
  },

  antReality: {
    realityAsActor: 3.5,
    nonHumanActants: 2.8,
    obligatoryPassage: 2.2,
    translationMoments: 1.9,
  },

  findings: [
    {
      id: "f001",
      title: "Theory of Change not explicitly articulated",
      description:
        "The proposal describes activities and expected outputs but does not trace a clear causal chain from outputs → outcomes → societal impact. Evaluators operating under the Horizon Europe assessment guide explicitly look for a logic model connecting research activities to the stated Grand Challenge.",
      severity: "critical",
      layer: "Impact",
      antiPattern: "AP-07: Missing Theory of Change",
      recommendation:
        "Add a dedicated Theory of Change section (or diagram) within the Impact chapter. Show how each work package output contributes to a measurable intermediate outcome, and how those outcomes aggregate to the long-term impact. Reference SDG alignment explicitly.",
      pageRef: "Section 2.1, p. 14",
    },
    {
      id: "f002",
      title: "Quantified KPIs absent from all work packages",
      description:
        "Work packages WP3 and WP5 list deliverables without SMART (Specific, Measurable, Achievable, Relevant, Time-bound) success criteria. Evaluators cannot assess whether stated targets are ambitious but realistic — a core Excellence criterion.",
      severity: "critical",
      layer: "Excellence",
      antiPattern: "AP-02: Vague Metrics",
      recommendation:
        "For each WP deliverable, add a measurable KPI row in the Gantt table. Example: 'D3.2 Validated edge inference pipeline — KPI: <50ms latency on Raspberry Pi 5 by M18, validated in 3 pilot sites.'",
      pageRef: "Section 1.3, pp. 22–28",
    },
    {
      id: "f003",
      title: "Evaluator perspective not adopted in innovation claim",
      description:
        "The claim 'our platform is unique' appears three times without comparative reference to prior art. Under Horizon Europe Excellence criterion, novelty must be demonstrated against state-of-the-art, not asserted.",
      severity: "critical",
      layer: "Excellence",
      antiPattern: "AP-11: Unsubstantiated Novelty",
      recommendation:
        "Add a 'Beyond State of the Art' table comparing your approach to the 3–5 most relevant existing solutions across dimensions: edge capability, real-time sync, privacy model, open-source compliance.",
      pageRef: "Section 1.1, p. 8",
    },
    {
      id: "f004",
      title: "Budget justification too thin for hardware costs",
      description:
        "Hardware costs of €180K are listed as a single line item without breakdown. For amounts over €100K, evaluators expect per-unit cost, quantity, purpose, and procurement method.",
      severity: "major",
      layer: "Implementation",
      antiPattern: "AP-33: Opaque Budget Lines",
      recommendation:
        "Expand the budget narrative to include an itemised hardware list: sensor type, unit cost, quantity, deployment site, and link to WP responsible. Consider adding a procurement timeline.",
      pageRef: "Budget Table, p. 41",
    },
    {
      id: "f005",
      title: "Exploitation plan lacks market sizing",
      description:
        "The exploitation section describes intended commercialisation pathways but does not quantify the addressable market (TAM/SAM). Without this, the evaluator cannot assess whether the stated exploitation pathway is credible.",
      severity: "major",
      layer: "Impact",
      antiPattern: "AP-19: No Market Evidence",
      recommendation:
        "Include a market sizing paragraph referencing third-party data (IDC, Gartner, or EU reports). State TAM, SAM, and your projected 5-year market capture with supporting rationale.",
      pageRef: "Section 2.2, p. 32",
    },
    {
      id: "f006",
      title: "Consortium gender balance not addressed",
      description:
        "Horizon Europe requires proposals to address gender dimension both in research content and team composition. No gender balance statement is present.",
      severity: "major",
      layer: "Implementation",
      antiPattern: "AP-41: Missing Gender Dimension",
      recommendation:
        "Add a Gender Equality Plan paragraph. If team is imbalanced, acknowledge it and describe corrective hiring targets. For research content, consider whether the technology has differential gender impact.",
    },
    {
      id: "f007",
      title: "Risk register incomplete — technology risks only",
      description:
        "The risk matrix covers only technical risks. Horizon Europe evaluators expect financial, consortium, ethical, and regulatory risks to be mapped with corresponding mitigation strategies.",
      severity: "major",
      layer: "Implementation",
      antiPattern: "AP-38: Incomplete Risk Register",
      recommendation:
        "Expand the risk table to include: partner dependency risk (key personnel departure), regulatory risk (GDPR, AI Act), market timing risk, and open-source licensing risk. For each, assign probability, impact, and named risk owner.",
      pageRef: "Section 3.4, p. 38",
    },
    {
      id: "f008",
      title: "Open access data management plan missing",
      description:
        "Horizon Europe mandates a Data Management Plan (DMP) following FAIR principles. The current proposal does not include or reference a DMP.",
      severity: "major",
      layer: "Implementation",
      antiPattern: "AP-43: Missing DMP",
      recommendation:
        "Add a brief DMP section referencing the FAIR data principles. Specify what data will be produced, how it will be stored, who owns it, when it will be made open, and which repository will be used (e.g., Zenodo).",
    },
    {
      id: "f009",
      title: "Stakeholder engagement methodology underspecified",
      description:
        "The proposal mentions end-user workshops but does not describe the methodology for co-design, feedback loops, or validation with target communities.",
      severity: "minor",
      layer: "Impact",
      recommendation:
        "Describe the stakeholder engagement process with specificity: who (job titles, organisations), when (which project months), how (workshops, surveys, advisory board), and how feedback feeds back into development.",
      pageRef: "Section 2.1, p. 18",
    },
    {
      id: "f010",
      title: "Acronym overload in abstract",
      description:
        "The abstract introduces 11 acronyms in 250 words. Evaluators reading initial screening often read only the abstract — dense acronyms reduce comprehension and signal poor communication skills.",
      severity: "minor",
      layer: "Structural Integrity",
      antiPattern: "AP-04: Acronym Overload",
      recommendation:
        "Limit acronyms in the abstract to 3–4 maximum. Spell out all terms on first use. Save technical shorthand for the body sections.",
      pageRef: "Abstract, p. 1",
    },
    {
      id: "f011",
      title: "TRL progression not mapped to milestones",
      description:
        "The proposal claims to advance from TRL 4 to TRL 7 but does not map this progression to specific milestones or deliverables, making it difficult to verify the claim.",
      severity: "minor",
      layer: "Excellence",
      recommendation:
        "Add a TRL progression table showing: starting TRL per technology component, target TRL at project end, the milestone/deliverable that validates each TRL step, and the validation method.",
    },
    {
      id: "f012",
      title: "Letter of Intent from key industrial partner recommended",
      description:
        "Industrial partner ACME Corp is mentioned as a key exploitation partner but no Letter of Intent (LoI) or letter of support is included in the annex.",
      severity: "info",
      layer: "Implementation",
      recommendation:
        "Obtain and attach LoIs from the two most critical non-consortium stakeholders. This significantly strengthens evaluator confidence in the exploitation pathway.",
    },
    {
      id: "f013",
      title: "Ethics self-assessment section placeholder not completed",
      description:
        "Section 5 (Ethics) contains the template placeholder text from the Horizon Europe proposal template rather than actual content.",
      severity: "critical",
      layer: "Structural Integrity",
      antiPattern: "AP-01: Incomplete Template",
      recommendation:
        "Complete the ethics section fully. Address: personal data handling, vulnerable populations, dual-use potential, and whether an Ethics Review is required. Incomplete ethics sections are grounds for administrative rejection.",
      pageRef: "Section 5, p. 44",
    },
    {
      id: "f014",
      title: "Planet perspective absent — no environmental impact assessment",
      description:
        "The Three Perspectives Analysis (People / Systems / Planet) reveals a significant gap: the proposal makes no reference to spatial awareness, environmental footprint, or GIS/BIM/CIM integration. The planet dimension scores 2.4/5, well below the People (3.2) and Systems (4.0) axes. Evaluators from Cluster 5 programmes increasingly require this framing.",
      severity: "major",
      layer: "Impact",
      recommendation:
        "Add a paragraph on environmental co-benefits and spatial context. Reference any GIS datasets or BIM models used, describe the physical geography of pilot sites, and quantify expected environmental impact (e.g. energy reduction, emissions avoided).",
      pageRef: "Section 2.1, p. 17",
    },
    {
      id: "f015",
      title: "AEST gap: no simulation layer — interventions tested in production only",
      description:
        "The AEST Temporal Analysis shows strong Absorb (3.8) and Emulate (4.1) scores — the proposal builds on prior art and creates a living digital representation — but Simulate (2.6) and Transcend (2.1) are weak. There is no mention of virtual testing or scenario modelling before physical deployment, and no knowledge transfer mechanism beyond the project lifetime.",
      severity: "major",
      layer: "Excellence",
      recommendation:
        "Add a simulation workstream (even lightweight scenario analysis) to WP3. For Transcend, describe how generated datasets, models, and learned patterns will be published as open artefacts for the broader community — this directly supports Horizon Europe's open science requirements.",
      pageRef: "Section 1.3, p. 24",
    },
    {
      id: "f016",
      title: "ANT analysis: reality treated as passive substrate, not active participant",
      description:
        "The Actor-Network Theory (ANT) analysis identifies a structural framing problem: the physical environment is described as a data source, not a co-shaping actant. Non-human actors (sensors, standards, regulatory frameworks) are listed but not acknowledged as having agency. Critically, no obligatory passage point (boundary object) is defined — there is no shared artefact that all stakeholders must engage with to advance the project.",
      severity: "major",
      layer: "Impact",
      recommendation:
        "Reframe one deliverable (e.g. the digital twin dashboard or shared ontology) as an explicit boundary object. Add a paragraph naming the non-human actants and describing how they constrain or enable human decisions. Describe at least two translation moments where an actor's interests are re-framed to enrol them in the network.",
    },
  ],

  summary:
    "EDGE-VERSE shows genuine innovation potential in edge-native digital twin infrastructure, with strong Impact framing and solid consortium composition. However, the proposal carries three critical deficiencies — an incomplete ethics section, missing Theory of Change, and absent quantified KPIs — any one of which can trigger below-threshold scores from evaluators. The implementation chapter needs significant strengthening around budget justification, risk register completeness, and data management. With targeted revision (est. 40–60 hours of work), this proposal is fundable.",

  topStrengths: [
    "Strong alignment with Horizon Europe Cluster 4 digital and industrial transformation priorities",
    "Diverse consortium with genuine complementarity across academic, SME, and municipal partners",
    "Edge-native architecture addresses real privacy and latency gaps in existing DT platforms",
    "Ambitious but technically credible scope with clear work package structure",
  ],

  topWeaknesses: [
    "Ethics section left as template placeholder — administrative rejection risk",
    "No Theory of Change connecting activities to societal impact",
    "KPIs absent or unmeasurable across three of five work packages",
    "Budget narrative insufficient for hardware and subcontracting line items",
  ],

  layers: {
    structural: { score: 52, label: "Needs Work" },
    callAlignment: { score: 71, label: "Good" },
    smile: { score: 67, label: "Acceptable" },
    antiPatterns: { count: 16, critical: 4, major: 7 },
    perspectives: { score: 64, label: "Acceptable" },
    aest: { score: 58, label: "Needs Work" },
    antReality: { score: 51, label: "Needs Work" },
  },
};

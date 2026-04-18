import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://crucible.winniio.io";
const siteName = "CRUCIBLE — EU Grant Proposal Analyzer";
const siteDescription =
  "AI-powered Horizon Europe proposal analysis. Catch the 48+ anti-patterns that cost you funding — before evaluators do. Score your proposal across Excellence, Impact, and Implementation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | CRUCIBLE",
  },
  description: siteDescription,
  keywords: [
    "Horizon Europe proposal analyzer",
    "EU grant proposal checker",
    "Horizon Europe proposal score",
    "EU funding proposal review tool",
    "grant writing tool Europe",
    "Horizon Europe success rate",
    "EU research funding checker",
    "proposal anti-patterns",
    "SMILE methodology",
    "Horizon Europe 2027",
    "ERC proposal review",
    "MSCA proposal analysis",
    "European Research Council checker",
    "grant proposal AI",
  ],
  authors: [{ name: "WINNIIO AB", url: "https://winniio.io" }],
  creator: "WINNIIO AB",
  publisher: "WINNIIO AB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_EU",
    url: siteUrl,
    siteName: "CRUCIBLE",
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@winniio_io",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CRUCIBLE",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteDescription,
  url: siteUrl,
  provider: {
    "@type": "Organization",
    name: "WINNIIO AB",
    url: "https://winniio.io",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gothenburg",
      addressCountry: "SE",
    },
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "EUR",
      description: "Basic anti-pattern scan, 3 proposals/month",
    },
    {
      "@type": "Offer",
      name: "Single Analysis",
      price: "9.90",
      priceCurrency: "EUR",
      description: "One-time full 4-layer analysis with SMILE radar and score estimate",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49",
      priceCurrency: "EUR",
      billingDuration: "P1M",
      description: "Full 4-layer analysis, unlimited proposals, PDF report",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "199",
      priceCurrency: "EUR",
      billingDuration: "P1M",
      description: "Everything in Pro plus API access, team accounts, priority support",
    },
  ],
  featureList: [
    "Structural Integrity Analysis",
    "Call Alignment Scoring",
    "SMILE Methodology Radar",
    "48+ Anti-Pattern Detection",
    "Three Perspectives Analysis (People, Systems, Planet)",
    "AEST Temporal Analysis",
    "Reality-as-Actor Analysis",
    "PDF Report Export",
    "JSON API Export",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CRUCIBLE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRUCIBLE is an AI-powered static analysis tool for Horizon Europe proposals. It detects 48+ anti-patterns that evaluators commonly flag, estimates Excellence/Impact/Implementation scores, and checks alignment with the SMILE methodology — all from a single PDF upload in under 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What are Horizon Europe proposal anti-patterns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anti-patterns are recurring structural and rhetorical mistakes that cause proposals to score below threshold. Examples include missing Theory of Change, vague KPIs, unsubstantiated novelty claims, incomplete ethics sections, and opaque budget line items. CRUCIBLE checks for 48+ documented patterns from real evaluator feedback.",
      },
    },
    {
      "@type": "Question",
      name: "How much does CRUCIBLE cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRUCIBLE offers a free tier with anti-pattern scanning (top 5 findings, 3 analyses/month), a single analysis for EUR 9.90, a Pro plan at EUR 49/month with full 4-layer analysis and unlimited proposals, and an Enterprise plan at EUR 199/month with API access and team accounts.",
      },
    },
    {
      "@type": "Question",
      name: "How does CRUCIBLE score my proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRUCIBLE estimates scores across Excellence, Impact, and Implementation criteria (0-5 each, 15 total) based on structural evidence found in your PDF. It also generates a SMILE methodology radar across 6 phases and checks alignment with your specific call topic if provided.",
      },
    },
    {
      "@type": "Question",
      name: "Is CRUCIBLE open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The CRUCIBLE analysis engine is MIT-licensed and available on GitHub. The commercial web app (TURTLESHELL) provides a hosted SaaS experience with tier-gated features, PDF reports, and API access.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

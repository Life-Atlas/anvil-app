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

const siteUrl = "https://anvil.winniio.io";
const siteName = "ANVIL — Academic Paper Quality Scorer";
const siteDescription =
  "Run your research paper through the ANVIL. Catch citation gaps, theoretical decorations, and structural weaknesses — before reviewers do. Built on S.M.I.L.E. methodology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | ANVIL",
  },
  description: siteDescription,
  keywords: [
    "academic paper quality scorer",
    "research paper citation checker",
    "APA 7th compliance tool",
    "decorative citation detector",
    "SMILE methodology academic",
    "paper falsifiability check",
    "self-citation ratio analysis",
    "theoretical depth scoring",
    "research paper reviewer tool",
    "academic integrity checker",
    "manuscript pre-submission review",
    "paper anonymisation compliance",
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
    siteName: "ANVIL",
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
  name: "ANVIL",
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
      description: "1 paper/month, basic citation check",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "29",
      priceCurrency: "EUR",
      billingDuration: "P1M",
      description: "Unlimited papers, full ANVIL 7-layer analysis, PDF report",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "149",
      priceCurrency: "EUR",
      billingDuration: "P1M",
      description: "API access, batch scoring, custom rubrics, team accounts",
    },
  ],
  featureList: [
    "Citation Integrity — APA 7th compliance",
    "Theoretical Depth — decorative citation detection",
    "S.M.I.L.E. Alignment Radar",
    "Falsifiability Check",
    "Four Perspectives Analysis (People, Systems, Planet, AI)",
    "AEST Temporal Analysis",
    "Anonymisation and Compliance",
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
      name: "What is ANVIL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ANVIL (Academic Narrative Verification and Integrity Layer) is an AI-powered static analysis tool for research papers. It detects citation integrity issues, decorative theoretical citations, falsifiability gaps, and structural weaknesses — all from a single PDF or Markdown upload in under 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What is a decorative citation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A decorative citation occurs when a theoretical framework or author is mentioned by name to lend authority, but the framework is never actually applied analytically in the paper. For example, citing Callon or Latour on Actor-Network Theory without using ANT concepts to analyse data. ANVIL detects these patterns automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ANVIL cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ANVIL offers a free tier with 1 paper per month and basic citation check, a Pro plan at EUR 29/month with unlimited papers and full 7-layer analysis, and an Enterprise plan at EUR 149/month with API access, batch scoring, and custom rubrics.",
      },
    },
    {
      "@type": "Question",
      name: "How does ANVIL score my paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ANVIL scores across five dimensions: citation quality, theoretical depth, methodology rigour, domain relevance, and writing quality. It also generates a SMILE radar across 6 phases, a Four Perspectives analysis, and an AEST temporal depth check.",
      },
    },
    {
      "@type": "Question",
      name: "Is ANVIL open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The ANVIL analysis engine is MIT-licensed. The commercial web app provides a hosted experience with tier-gated features, PDF reports, and API access.",
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

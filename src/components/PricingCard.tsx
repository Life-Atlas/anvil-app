"use client";

import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingCardProps {
  tier: "free" | "pro" | "enterprise";
  name: string;
  price: string;
  annualPrice?: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}

const tierStyles = {
  free: {
    border: "border-slate-700",
    badgeBg: "bg-slate-700 text-slate-300",
    ctaBg: "bg-slate-700 hover:bg-slate-600 text-white",
    glow: "",
    priceBg: "bg-slate-800",
  },
  pro: {
    border: "border-amber-500/50",
    badgeBg: "bg-amber-500 text-white",
    ctaBg: "bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-500/25",
    glow: "shadow-2xl shadow-amber-500/10",
    priceBg: "bg-amber-500/10",
  },
  enterprise: {
    border: "border-amber-700/40",
    badgeBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    ctaBg: "bg-amber-500 hover:bg-amber-400 text-black font-bold",
    glow: "shadow-xl shadow-amber-500/5",
    priceBg: "bg-amber-500/5",
  },
};

export default function PricingCard({
  tier,
  name,
  price,
  annualPrice,
  description,
  features,
  ctaLabel,
  ctaHref,
  badge,
  highlighted = false,
}: PricingCardProps) {
  const styles = tierStyles[tier];

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl border ${styles.border} ${styles.glow}
        glass transition-all duration-300 hover:scale-[1.01]
        ${highlighted ? "ring-1 ring-amber-500/50" : ""}
      `}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${styles.badgeBg}`}>
            {badge}
          </span>
        </div>
      )}

      <div className="p-8 flex-1">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>

        {/* Price */}
        <div className={`rounded-xl ${styles.priceBg} p-4 mb-6`}>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black text-white">{price}</span>
            {price !== "Free" && (
              <span className="text-slate-400 text-sm mb-1.5">/month</span>
            )}
          </div>
          {annualPrice && (
            <p className="text-amber-400 text-sm mt-1">
              or {annualPrice}/month billed annually
            </p>
          )}
          {price === "Free" && (
            <p className="text-slate-400 text-sm mt-1">No credit card required</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3" role="list">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  feature.included
                    ? feature.highlight
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-emerald-500/20 text-emerald-400"
                    : "bg-slate-700 text-slate-600"
                }`}
                aria-hidden="true"
              >
                {feature.included ? "✓" : "–"}
              </span>
              <span
                className={`text-sm ${
                  feature.included
                    ? feature.highlight
                      ? "text-white font-medium"
                      : "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-8 pt-0">
        {ctaHref.startsWith("http") || ctaHref.startsWith("mailto") ? (
          <a
            href={ctaHref}
            className={`block w-full py-3.5 px-6 rounded-xl text-center font-semibold transition-all duration-200 ${styles.ctaBg}`}
          >
            {ctaLabel}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className={`block w-full py-3.5 px-6 rounded-xl text-center font-semibold transition-all duration-200 ${styles.ctaBg}`}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

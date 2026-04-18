"use client";

import { useEffect, useRef, useState } from "react";

interface ScoreCardProps {
  label: string;
  score: number;
  maxScore?: number;
  description: string;
  color?: "blue" | "amber" | "green" | "red";
  delay?: number;
}

const colorMap = {
  blue: {
    bar: "bg-blue-500",
    glow: "shadow-blue-500/30",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/20 text-blue-300",
  },
  amber: {
    bar: "bg-amber-500",
    glow: "shadow-amber-500/30",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    badge: "bg-amber-500/20 text-amber-300",
  },
  green: {
    bar: "bg-emerald-500",
    glow: "shadow-emerald-500/30",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
  red: {
    bar: "bg-red-500",
    glow: "shadow-red-500/30",
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    badge: "bg-red-500/20 text-red-300",
  },
};

function getScoreLabel(score: number, max: number): { label: string; color: "blue" | "amber" | "green" | "red" } {
  const pct = (score / max) * 100;
  if (pct >= 80) return { label: "Excellent", color: "green" };
  if (pct >= 65) return { label: "Good", color: "blue" };
  if (pct >= 50) return { label: "Acceptable", color: "amber" };
  return { label: "Below Threshold", color: "red" };
}

export default function ScoreCard({
  label,
  score,
  maxScore = 5,
  description,
  color = "blue",
  delay = 0,
}: ScoreCardProps) {
  const [animated, setAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const colors = colorMap[color];
  const pct = Math.min((score / maxScore) * 100, 100);
  const scoreStatus = getScoreLabel(score, maxScore);
  const statusColors = colorMap[scoreStatus.color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass rounded-2xl p-6 border ${colors.border} transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg ${colors.glow}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{label}</h3>
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        </div>
        <div className="text-right shrink-0 ml-4">
          <span className={`text-3xl font-bold ${colors.text}`}>
            {score.toFixed(1)}
          </span>
          <span className="text-slate-500 text-sm">/{maxScore}</span>
        </div>
      </div>

      <div className="mb-3">
        <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: animated ? `${pct}%` : "0%" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors.badge}`}
        >
          {scoreStatus.label}
        </span>
        <span className="text-slate-500 text-xs">{pct.toFixed(0)}%</span>
      </div>
    </div>
  );
}

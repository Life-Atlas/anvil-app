"use client";

import { useEffect, useRef, useState } from "react";

interface AestData {
  absorb: number;    // 0–5  (past)
  emulate: number;   // 0–5  (present)
  simulate: number;  // 0–5  (future)
  transcend: number; // 0–5  (beyond)
}

interface AestBarProps {
  data: AestData;
}

const BARS: {
  key: keyof AestData;
  label: string;
  time: string;
  color: string;
  bg: string;
  border: string;
  textColor: string;
}[] = [
  {
    key: "absorb",
    label: "Absorb",
    time: "Past",
    color: "#f59e0b",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    textColor: "text-amber-400",
  },
  {
    key: "emulate",
    label: "Emulate",
    time: "Present",
    color: "#3b82f6",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    textColor: "text-blue-400",
  },
  {
    key: "simulate",
    label: "Simulate",
    time: "Future",
    color: "#06b6d4",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    textColor: "text-cyan-400",
  },
  {
    key: "transcend",
    label: "Transcend",
    time: "Beyond",
    color: "#eab308",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    textColor: "text-yellow-400",
  },
];

function getScoreLabel(val: number): string {
  if (val >= 4) return "Strong";
  if (val >= 3) return "Acceptable";
  if (val >= 2) return "Weak";
  return "Critical Gap";
}

export default function AestBar({ data }: AestBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 border border-cyan-500/20">
      <h3 className="text-white font-semibold text-lg mb-1">AEST Temporal Analysis</h3>
      <p className="text-slate-400 text-sm mb-6">
        Does the proposal operate across all four temporal registers?
      </p>

      <div className="space-y-5">
        {BARS.map(({ key, label, time, color, bg, border, textColor }, i) => {
          const val = Math.min(Math.max(data[key] ?? 3, 0), 5);
          const pct = (val / 5) * 100;
          const scoreLabel = getScoreLabel(val);

          return (
            <div key={key}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-white text-sm font-semibold">{label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium border ${bg} ${border} ${textColor}`}
                  >
                    {time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs">{scoreLabel}</span>
                  <span className={`text-sm font-bold ${textColor}`}>{val}/5</span>
                </div>
              </div>

              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${pct}%` : "0%",
                    backgroundColor: color,
                    transitionDelay: `${i * 120}ms`,
                  }}
                  role="progressbar"
                  aria-valuenow={val}
                  aria-valuemin={0}
                  aria-valuemax={5}
                  aria-label={`${label}: ${val} out of 5`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Temporal axis label */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-slate-600 text-xs">Past</span>
        <div className="flex-1 mx-3 h-px bg-gradient-to-r from-amber-500/30 via-blue-500/30 via-cyan-500/30 to-yellow-500/30" />
        <span className="text-slate-600 text-xs">Beyond</span>
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { ArrowRight, Calculator } from "lucide-react";

export function CtaSection() {
  const metrics = [
    { value: "450+", label: "Projects Completed" },
    { value: "0", label: "OSHA Violations" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Delivery Rate" },
  ];

  return (
    <section className="bg-primary text-primary-foreground">
      {/* Metrics Grid */}
      <div className="border-b border-primary-foreground/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 text-center flex flex-col items-center justify-center ${idx % 2 !== 0 ? "border-l border-primary-foreground/10" : ""} ${idx >= 2 ? "border-t border-primary-foreground/10 md:border-t-0" : ""} ${idx !== 0 && idx !== 2 ? "md:border-l md:border-primary-foreground/10" : ""}`}
              >
                <div className="text-3xl lg:text-5xl font-display font-bold text-accent mb-2">{m.value}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

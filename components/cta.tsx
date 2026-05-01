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
      <div className="border-b border-primary-foreground/10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-primary-foreground/10">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="text-3xl lg:text-5xl font-display font-bold text-accent mb-2">{m.value}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FileText, DraftingCompass, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Pre-Construction & Permitting",
    icon: FileText,
    desc: "We secure all necessary municipal approvals, finalize site assessments, and lock in the master budget to eliminate phase-1 surprises.",
    deliverables: ["Site Survey", "Budget Lock-in", "City Permits"],
  },
  {
    id: "02",
    title: "Design & Value Engineering",
    icon: DraftingCompass,
    desc: "Architectural blueprints are rigorously engineered for cost-efficiency. Every aesthetic choice is backed by a structural and financial feasibility study.",
    deliverables: ["BIM Modeling", "Material Sourcing", "Structural Engineering"],
  },
  {
    id: "03",
    title: "Execution & Build",
    icon: Hammer,
    desc: "Groundbreaking to topping off. Our project managers maintain strict quality control while keeping you updated via the client portal.",
    deliverables: ["Foundation", "Framing", "MEP Installation"],
  },
  {
    id: "04",
    title: "Testing & Handover",
    icon: CheckCircle,
    desc: "Rigorous stress testing of all internal systems, followed by a detailed walkthrough and the formal turnover of keys and warranties.",
    deliverables: ["Punch List", "System Checks", "Occupancy Permit"],
  },
];

export function Lifecycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="process" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">E2E Execution</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">The BuildIt Lifecycle</h3>
          <p className="text-lg text-secondary/80">
            From initial feasibility to final turnover, our structured four-phase methodology ensures zero ambiguity and
            absolute control.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-stone-200 -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 origin-top"
            style={{ scaleY: pathProgress }}
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-14 h-14 bg-white border-4 border-stone-200 rounded-full flex items-center justify-center -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:text-left md:pr-16" : "md:text-right md:pl-16"}`}
                  >
                    <div className="inline-block text-accent font-mono font-bold tracking-wider mb-2">
                      PHASE {step.id}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-primary mb-4">{step.title}</h4>
                    <p className="text-secondary/80 mb-6 leading-relaxed">{step.desc}</p>

                    <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-stone-100 text-stone-600 border border-stone-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

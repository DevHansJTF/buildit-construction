"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Services() {
  const packages = [
    {
      title: "Commercial Fit-Out",
      price: "15,000",
      unit: "/ sqm",
      timeline: "45-90 Days",
      features: [
        "Space Planning & 3D Renders",
        "HVAC & Structural Adjustment",
        "Enterprise-grade Networking Prep",
        "Acoustic Engineering",
        "Safety & Occupancy Certs",
      ],
      highlight: false,
    },
    {
      title: "Premium Residential",
      price: "35,000",
      unit: "/ sqm",
      timeline: "6-8 Months",
      features: [
        "Architectural Schematic Design",
        "Soil & Structural Engineering",
        "High-end Finish Materials",
        "Smart Home Integration",
        "Turnkey Handover",
      ],
      highlight: true,
    },
    {
      title: "Industrial Facility",
      price: "22,000",
      unit: "/ sqm",
      timeline: "5-10 Months",
      features: [
        "Heavy-duty Structural Steel",
        "Industrial Flooring Systems",
        "High-voltage Electrical Layout",
        "Logistics Bay Design",
        "Environmental Compliance",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Productized Builds</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Transparent Baselines.</h3>
            <p className="text-lg text-secondary/80">
              Every project is unique, but ambiguity shouldn&apos;t be. Use our baseline packages to understand starting
              costs and standard timelines before we sit down at the drafting table.
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-secondary transition-colors border border-transparent">
            Download Pricing Matrix
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative flex flex-col p-8 border ${pkg.highlight ? "bg-primary text-primary-foreground border-accent scale-105 shadow-2xl z-10" : "bg-white border-stone-200 text-primary"}`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Most Requested
                </div>
              )}
              <h4 className={`text-xl font-display font-bold mb-2 ${pkg.highlight ? "" : "text-primary"}`}>
                {pkg.title}
              </h4>
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-stone-200/20">
                <span className="text-sm font-medium text-muted-foreground mr-1">Starts at ₱</span>
                <span className="text-4xl font-bold tracking-tighter">{pkg.price}</span>
                <span
                  className={`text-sm font-medium ${pkg.highlight ? "text-primary-foreground/70" : "text-secondary/70"}`}
                >
                  {pkg.unit}
                </span>
              </div>

              <div className="mb-8">
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-4 ${pkg.highlight ? "text-accent" : "text-primary/60"}`}
                >
                  Est. Timeline: {pkg.timeline}
                </p>
                <ul className="space-y-4 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${pkg.highlight ? "text-accent" : "text-primary/50"}`} />
                      <span className={pkg.highlight ? "text-primary-foreground/90" : "text-secondary/90"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                    pkg.highlight
                      ? "bg-accent text-primary-foreground hover:bg-yellow-600"
                      : "bg-stone-100 text-primary hover:bg-stone-200"
                  }`}
                >
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

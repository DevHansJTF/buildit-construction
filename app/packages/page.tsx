"use client";

import { use } from "react";
import { motion } from "motion/react";
import { Header } from "@/components/header";
import { packageData, SpecCategory, IndustryType } from "@/lib/package-data";
import { Check, ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function PackagesPage(props: { searchParams?: Promise<{ sector?: string }> }) {
  const searchParams = props.searchParams ? use(props.searchParams) : {};
  const sectorParam = searchParams.sector as string | undefined;

  const activeSector: IndustryType =
    sectorParam && Object.keys(packageData).includes(sectorParam) ? (sectorParam as IndustryType) : "commercial";

  const currentPackages = packageData[activeSector];

  let titleTop = "Commercial &";
  let titleBottom = "Office Space Baselines.";
  if (activeSector === "residential") {
    titleTop = "Premium";
    titleBottom = "Residential Baselines.";
  } else if (activeSector === "industrial") {
    titleTop = "Infrastructure &";
    titleBottom = "Industrial Baselines.";
  }

  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden pt-20">
      <Header />

      {/* Editorial Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 pb-24 md:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-primary-foreground/10 text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6 shadow-xl">
                Absolute Transparency
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1] sm:leading-[1.05]">
                {titleTop} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
                  {titleBottom}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
                Ambiguity in construction leads to capital runaway. We replace guesses with concrete baselines,
                explicitly documenting our finish tiers so you can project budgets with ultimate confidence.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
                {(["commercial", "residential", "industrial"] as IndustryType[]).map((sector) => (
                  <Link
                    key={sector}
                    href={`/packages?sector=${sector}`}
                    className={`px-5 py-2.5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${
                      activeSector === sector
                        ? "bg-accent text-primary-foreground pointer-events-none"
                        : "bg-white/5 text-primary-foreground hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    {sector}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </section>

      {/* Comparison Matrix */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.grade}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`flex flex-col bg-white border border-stone-200 shadow-xl overflow-hidden ${
                idx === 1 ? "scale-100 lg:scale-[1.03] lg:-translate-y-4 ring-1 ring-accent z-10" : "z-0"
              }`}
            >
              {/* Header Area */}
              <div
                className={`p-8 border-b ${idx === 1 ? "bg-primary text-primary-foreground border-primary-foreground/10" : "bg-stone-50 border-stone-200"}`}
              >
                {idx === 1 && (
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3 inline-block bg-accent/10 px-3 py-1">
                    Flagship Class
                  </div>
                )}
                <h3 className={`text-3xl font-display font-bold mb-2 ${idx === 1 ? "text-white" : "text-primary"}`}>
                  {pkg.grade}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${idx === 1 ? "text-primary-foreground/60" : "text-stone-500"}`}
                  >
                    Base Multiplier:
                  </span>
                  <span className={`font-mono text-lg font-bold ${idx === 1 ? "text-accent" : "text-primary"}`}>
                    {pkg.multiplier}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${idx === 1 ? "text-primary-foreground/80" : "text-stone-600"}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Features Area */}
              <div className="p-6 sm:p-8 flex-grow">
                <div className="space-y-8 sm:space-y-10">
                  {pkg.specs.map((specGroup) => (
                    <div key={specGroup.category}>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 pb-2 border-b border-stone-100">
                        {specGroup.category}
                      </h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {specGroup.items.map((spec, specIdx) => (
                          <li
                            key={specIdx}
                            className="flex flex-row items-start gap-3 text-sm text-stone-700 leading-relaxed"
                          >
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="font-medium">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Footer */}
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Link
                  href="/#quote"
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors min-h-[44px] flex items-center justify-center ${
                    idx === 1
                      ? "bg-accent text-primary-foreground hover:bg-yellow-600 active:bg-yellow-700"
                      : "bg-stone-100 text-primary hover:bg-stone-200 active:bg-stone-300"
                  }`}
                >
                  Base on {pkg.grade}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Download Strip */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-2">Need a formal procurement packet?</h3>
            <p className="text-stone-600">Download the complete technical specifications PDF tailored for QS review.</p>
          </div>
          <button className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-secondary transition-colors shrink-0">
            <ArrowDownToLine className="w-4 h-4 text-accent" />
            Download Specs Matrix
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 text-primary-foreground/60 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display font-bold tracking-widest text-primary-foreground">
            BUILDIT.CORP &copy; {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Client Portal Login
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

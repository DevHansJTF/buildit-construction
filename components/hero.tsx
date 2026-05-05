"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Building2, Home, Landmark, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Industry = "commercial" | "residential" | "industrial";

const industries: Record<Industry, { title: string; desc: string; icon: LucideIcon; image: string }> = {
  commercial: {
    title: "Commercial & Office Spaces",
    desc: "High-performance workspaces and retail environments built for scale.",
    icon: Building2,
    image: "https://picsum.photos/seed/comm/1920/1080",
  },
  residential: {
    title: "Premium Residential",
    desc: "Bespoke architectural homes with transparent timelines and fixed pricing.",
    icon: Home,
    image: "https://picsum.photos/seed/res/1920/1080",
  },
  industrial: {
    title: "Infrastructure & Industrial",
    desc: "Heavy-duty engineering solutions and logistics facilities.",
    icon: Landmark,
    image: "https://picsum.photos/seed/infra/1920/1080",
  },
};

export function Hero() {
  const [selected, setSelected] = useState<Industry>("commercial");

  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-primary">
      {/* Background Image Reveal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={industries[selected].image}
            alt={industries[selected].title}
            fill
            className="object-cover"
            priority /* Ensure these are prioritized, perhaps could be handled better but good for MVP */
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-12 lg:pb-0 pt-8 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-sm font-medium tracking-widest uppercase mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
            Next-Gen Construction Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Build with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">Precision.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-xl mb-8 sm:mb-12">
            We replace ambiguity with engineering rigor. Explore our productized build packages with transparent
            pricing, guaranteed timelines, and enterprise-grade execution.
          </p>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50">
              Select your sector to begin
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {(Object.keys(industries) as Industry[]).map((key) => {
                const Icon = industries[key].icon;
                const isSelected = selected === key;
                return (
                  <button
                    key={key}
                    onMouseEnter={() => setSelected(key)}
                    onClick={() => setSelected(key)}
                    className={`relative p-4 text-left border transition-all duration-300 group ${
                      isSelected
                        ? "bg-secondary/80 border-accent/50 shadow-[0_0_20px_rgba(176,141,87,0.15)]"
                        : "bg-primary/50 border-primary-foreground/10 hover:border-primary-foreground/30 hover:bg-secondary/40"
                    }`}
                  >
                    <span
                      className={`absolute top-0 left-0 w-full h-[2px] transition-opacity duration-300 ${isSelected ? "bg-accent opacity-100" : "bg-transparent opacity-0"}`}
                    />
                    <Icon className={`w-6 h-6 mb-3 ${isSelected ? "text-accent" : "text-muted"}`} />
                    <h3
                      className={`font-display font-bold text-sm tracking-wide ${isSelected ? "text-primary-foreground" : "text-muted"}`}
                    >
                      {industries[key].title}
                    </h3>
                  </button>
                );
              })}
            </div>
            <motion.div
              key={`cta-${selected}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-6"
            >
              <Link
                href={`/packages?sector=${selected}`}
                className="flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-stone-200 transition-colors w-full sm:w-auto justify-center group"
              >
                Explore {industries[selected].title} Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="hidden lg:block relative h-[600px] w-full">
          {/* Architectural decorative element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[80%] border-r border-t border-b border-accent/20 z-0" />
          <div className="absolute right-8 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
            className="absolute top-1/4 right-0 h-[1px] bg-accent/30"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.5 }}
            className="absolute bottom-1/4 right-0 h-[1px] bg-accent/30"
          />

          {/* Quick stats floating card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-12 bottom-1/4 bg-primary/95 border border-primary-foreground/10 p-6 backdrop-blur-md max-w-[280px]"
          >
            <div className="text-accent text-3xl font-display font-bold mb-1">₱2.4B+</div>
            <div className="text-xs text-muted font-mono tracking-wider uppercase mb-4">Total Value Managed</div>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

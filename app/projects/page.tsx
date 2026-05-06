"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/header";
import { ArrowRight, Maximize, Clock, Landmark } from "lucide-react";
import Image from "next/image";

type Category = "All" | "Commercial" | "Residential" | "Infrastructure";

const projects = [
  {
    id: "p1",
    title: "Apex Corporate Tower",
    category: "Commercial",
    image: "/corporate-tower.jpg",
    value: "₱1.2B",
    sqm: "45,000",
    days: "420",
    description:
      "A 40-story LEED-certified commercial tower featuring smart HVAC systems, adaptive tint glass, and high-load structural steel for tech enterprise tenants.",
  },
  {
    id: "p2",
    title: "Lumina Harbor Residences",
    category: "Residential",
    image: "/harbor-residences.jpg",
    value: "₱450M",
    sqm: "12,000",
    days: "260",
    description:
      "Premium cantilevered residential complex with passive cooling design, sound-isolated concrete barriers, and private elevator lobbies.",
  },
  {
    id: "p3",
    title: "Metro Logistics Hub East",
    category: "Infrastructure",
    image: "logistics-hub.jpg",
    value: "₱850M",
    sqm: "120,000",
    days: "310",
    description:
      "Heavy-duty industrial park featuring automated sorting bays, 20-ton structural flooring, and advanced fire suppression networks.",
  },
  {
    id: "p4",
    title: "The Vertex Data Center",
    category: "Infrastructure",
    image: "data-center.jpg",
    value: "₱920M",
    sqm: "22,000",
    days: "380",
    description:
      "Tier III certified data center facility. Massive reinforcement, redundant power pathways, and zero-vibration structural isolation.",
  },
  {
    id: "p5",
    title: "Serenity Villa Estate",
    category: "Residential",
    image: "/villa-estate.jpg",
    value: "₱180M",
    sqm: "4,500",
    days: "180",
    description:
      "Ultra-luxury modern minimalist estate. Formed concrete aesthetics, integrated smart-home core, and massive open-span structural beams.",
  },
  {
    id: "p6",
    title: "Equinox Lifestyle Mall",
    category: "Commercial",
    image: "lifestyle-mall.jpg",
    value: "₱2.1B",
    sqm: "85,000",
    days: "540",
    description:
      "Next-generation retail environment with a 100m span structural glass dome, centralized automation, and high-footfall industrial acoustic treatments.",
  },
];

const categories: Category[] = ["All", "Commercial", "Residential", "Infrastructure"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden pt-20">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply z-0" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/50 text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
              The Proof
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              Engineered <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
                to Scale.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl">
              We don&apos;t just build structures; we deliver predictable, high-value assets. Review our completed
              portfolio categorized by sector, value, and precise completion metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Grid Area */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-10 sm:mb-16 border-b border-stone-200 pb-6 sm:pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all rounded-sm min-h-[44px] ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-stone-500 border border-stone-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group relative bg-white border border-stone-200 overflow-hidden flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-[300px] sm:h-[400px] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest z-10 shadow-lg">
                    {project.category}
                  </div>
                  {/* Value Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent pt-16 pb-4 px-6 z-10 flex justify-between items-end">
                    <div>
                      <div className="text-accent/90 text-xs font-bold uppercase tracking-widest mb-1">
                        Contract Value
                      </div>
                      <div className="text-2xl font-display font-bold text-white">{project.value}</div>
                    </div>
                    <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">{project.title}</h3>
                  <p className="text-stone-600 mb-8 flex-grow">{project.description}</p>

                  {/* Enterprise Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
                        <Maximize className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Footprint</div>
                        <div className="font-mono text-sm font-bold text-primary">
                          {project.sqm} <span className="text-xs font-sans font-normal text-stone-500">SQM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Execution</div>
                        <div className="font-mono text-sm font-bold text-primary">
                          {project.days} <span className="text-xs font-sans font-normal text-stone-500">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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

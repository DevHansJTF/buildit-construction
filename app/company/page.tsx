"use client";

import { motion } from "motion/react";
import { Header } from "@/components/header";
import { ShieldCheck, HardHat, FileBadge, BarChart3 } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Marcus Vanguard",
    role: "Chief Engineer & CEO",
    experience: "25+ Years",
    image: "https://picsum.photos/seed/marcus/400/500",
    accreditation: "P.E., M.ASCE",
  },
  {
    name: "Elena Sterling",
    role: "VP of Pre-Construction",
    experience: "18+ Years",
    image: "https://picsum.photos/seed/elena/400/500",
    accreditation: "AIA, LEED AP",
  },
  {
    name: "David Chen",
    role: "Director of Field Operations",
    experience: "20+ Years",
    image: "https://picsum.photos/seed/david/400/500",
    accreditation: "OSHA 500, PMP",
  },
];

const capabilities = [
  { metric: "1.2M+", label: "Safe Man-Hours", icon: ShieldCheck },
  { metric: "ISO 9001", label: "Quality Management", icon: FileBadge },
  { metric: "AAAA", label: "PCAB License", icon: HardHat },
  { metric: "0.85", label: "EMR Safety Rating", icon: BarChart3 },
];

const timeline = [
  {
    year: "2010",
    title: "Firm Established",
    desc: "Started as a boutique commercial fit-out contractor focusing on tech tenant improvements.",
  },
  {
    year: "2015",
    title: "PCAB AAA Upgraded",
    desc: "Expanded into ground-up commercial structures and attained AAA licensing.",
  },
  {
    year: "2020",
    title: "Digital Platform Integration",
    desc: "Launched our proprietary bidding and project lifecycle management software to clients.",
  },
  {
    year: "2024",
    title: "Enterprise Milestone",
    desc: "Surpassed ₱10B in total managed project value with zero critical safety incidents.",
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-foreground/20 text-accent text-sm font-medium tracking-widest uppercase mb-6">
              Risk Management First
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
              Reliability is our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
                Primary Material.
              </span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-xl">
              We protect capital allocation through rigorous safety protocols, proactive risk mitigation, and unyielding
              adherence to architectural integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-secondary/40 border border-primary-foreground/10 p-6 flex flex-col justify-center backdrop-blur-sm"
                >
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <div className="text-3xl font-display font-bold text-white mb-1">{item.metric}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/50">{item.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Engineering Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Enterprise Governance</h2>
            <h3 className="text-4xl font-display font-bold text-primary">Engineering Leadership</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={leader.name}
                className="group border border-stone-200"
              >
                <div className="relative h-[400px] w-full bg-stone-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image fill src={leader.image} alt={leader.name} className="object-cover" unoptimized />
                </div>
                <div className="p-6 bg-white flex flex-col items-center text-center">
                  <h4 className="text-xl font-display font-bold text-primary mb-1">{leader.name}</h4>
                  <div className="text-sm font-bold text-accent uppercase tracking-widest mb-4">{leader.role}</div>

                  <div className="w-full h-px bg-stone-100 my-4" />

                  <div className="flex justify-between w-full text-xs font-mono font-bold text-stone-500 uppercase">
                    <span>{leader.experience}</span>
                    <span>{leader.accreditation}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Structural Progression</h2>
            <p className="text-stone-600">
              Over a decade of calibrated, sustainable growth built on client trust and flawless execution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 md:-translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-white md:-translate-x-1/2 z-10" />

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:text-left md:pr-16 md:pl-16" : "md:text-right md:pr-16 md:pl-16"}`}
                    >
                      <div className="text-3xl font-display font-bold text-primary/20 mb-2">{event.year}</div>
                      <h4 className="text-xl font-bold text-primary mb-3">{event.title}</h4>
                      <p className="text-stone-600 leading-relaxed text-sm md:text-base">{event.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
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

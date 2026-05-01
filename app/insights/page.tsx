"use client";

import { motion } from "motion/react";
import { Header } from "@/components/header";
import { Download, FileText, Lock, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const resources = [
  {
    id: "r1",
    title: "2026 Commercial Fit-Out Cost Index",
    type: "Market Report",
    readTime: "12 Min Read",
    image: "https://picsum.photos/seed/report1/600/800",
    desc: "A comprehensive breakdown of material costs, labor inflation, and time-to-delivery metrics for class-A office spaces.",
  },
  {
    id: "r2",
    title: "The Industrial Supply Chain Architect",
    type: "Whitepaper",
    readTime: "20 Min Read",
    image: "https://picsum.photos/seed/report2/600/800",
    desc: "Optimizing logistics hubs for automation. How structural choices impact 10-year operational costs in heavy industry.",
  },
  {
    id: "r3",
    title: "Navigating Municipal Permits",
    type: "Execution Guide",
    readTime: "8 Min Read",
    image: "https://picsum.photos/seed/report3/600/800",
    desc: "Our proprietary pre-construction checklist for accelerating zoning approvals and environmental compliance.",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden pt-20">
      <Header />

      {/* Editorial Header */}
      <section className="bg-white border-b border-stone-200 py-24 pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-stone-500">
                  Industry Intelligence
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-4 tracking-tight leading-[1.1]">
                Data-driven strategy for <br />
                <span className="text-stone-400">capital-intensive builds.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600">
                Access our proprietary cost indices, execution frameworks, and architectural whitepapers designed for
                enterprise developers and high-net-worth operators.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Architectural abstract background element */}
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-stone-100 hidden lg:block">
          <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        </div>
      </section>

      {/* Featured Lead Gen Gate */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary text-primary-foreground shadow-2xl grid lg:grid-cols-5 overflow-hidden"
        >
          {/* Visual Side */}
          <div className="lg:col-span-2 relative h-64 lg:h-auto bg-secondary/50">
            <Image
              src="https://picsum.photos/seed/hero-report/800/1000"
              alt="Guide Cover"
              fill
              className="object-cover opacity-80 mix-blend-luminosity"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-accent text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 inline-block mb-3">
                Q4 Report
              </div>
              <h3 className="text-2xl font-display font-bold">BuildIt Global Macro Forecast 2026</h3>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8 border-b border-primary-foreground/10 pb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Unlock the complete cost-index.</h4>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  Enter your details to receive our 40-page technical breakdown of projected steel, concrete, and labor
                  costs for the upcoming fiscal year.
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-2">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-secondary/40 border border-primary-foreground/20 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-2">
                    Primary Sector
                  </label>
                  <select className="w-full bg-secondary/40 border border-primary-foreground/20 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="text-primary">Commercial / Retail</option>
                    <option className="text-primary">Heavy Infrastructure</option>
                    <option className="text-primary">Premium Residential</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
                  <Lock className="w-3 h-3" />
                  <span>Your data is architecturally secured.</span>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-accent text-primary-foreground px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-colors"
                >
                  Download Report
                  <Download className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Resource Library Grid */}
      <section className="py-16 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-4">
          <h3 className="text-2xl font-display font-bold text-primary">Technical Library</h3>
          <button className="text-sm font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {resources.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] mb-6 overflow-hidden bg-stone-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                  {item.type}
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                <span>{item.readTime}</span>
              </div>
              <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                Read Briefing <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </motion.div>
          ))}
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

"use client";

import { motion } from "motion/react";
import { Home, Building2, Factory } from "lucide-react";

export type ProjectSector = {
  id: string;
  title: string;
  subtitle: string;
  baseRate: number;
  icon: string;
};

const projectSectors: ProjectSector[] = [
  {
    id: "residential",
    title: "Residential",
    subtitle: "Bespoke Homes & Estates",
    baseRate: 35000, // Base rate per SQM in PHP
    icon: "Home",
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "Office & Retail Spaces",
    baseRate: 28000,
    icon: "Building",
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle: "Warehouses & Facilities",
    baseRate: 18000,
    icon: "Factory",
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Home":
      return <Home className="w-8 h-8 mb-4 transition-colors duration-300" />;
    case "Building":
      return <Building2 className="w-8 h-8 mb-4 transition-colors duration-300" />;
    case "Factory":
      return <Factory className="w-8 h-8 mb-4 transition-colors duration-300" />;
    default:
      return null;
  }
};

interface Step1SectorProps {
  onSelect: (sector: ProjectSector) => void;
  selectedId?: string | null;
}

export function Step1Sector({ onSelect, selectedId }: Step1SectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">What are you looking to build?</h3>
        <p className="text-slate-400 text-lg">Select the primary use-case for your project.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {projectSectors.map((sector) => {
          const isSelected = selectedId === sector.id;

          return (
            <button
              key={sector.id}
              onClick={() => onSelect(sector)}
              className={`relative p-8 border text-left flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-300 group ${
                isSelected
                  ? "bg-white/10 border-amber-500 shadow-[0_0_20px_rgba(212,175,55,0.15)] text-white"
                  : "bg-white/5 border-white/10 hover:border-amber-500 hover:bg-white/10 text-slate-300 hover:text-white"
              }`}
            >
              <div
                className={`transition-colors duration-300 ${
                  isSelected ? "text-amber-500" : "text-slate-400 group-hover:text-amber-500"
                }`}
              >
                {getIcon(sector.icon)}
              </div>
              <h4 className="font-display font-bold text-xl mb-2">{sector.title}</h4>
              <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                {sector.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

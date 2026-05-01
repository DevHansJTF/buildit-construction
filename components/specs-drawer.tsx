"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";
import { packageData, SpecCategory } from "@/lib/package-data";

interface SpecsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpecsDrawer({ isOpen, onClose }: SpecsDrawerProps) {
  const categories: SpecCategory[] = [
    "Flooring",
    "Electrical & Smart Tech",
    "Kitchen/Pantry",
    "Bathrooms",
    "Paint/Finishing",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl bg-primary border-l border-primary-foreground/20 h-full overflow-y-auto shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 bg-primary/95 backdrop-blur border-b border-primary-foreground/10 p-4 sm:p-6 flex items-center justify-between">
              <div>
                <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-accent mb-1">
                  Detailed Specifications
                </h3>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground leading-tight">
                  Finish Grade Baseline Matrix
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 shrink-0 ml-4 bg-secondary/50 text-primary-foreground/70 hover:text-white hover:bg-secondary rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Matrix Content */}
            <div className="p-4 sm:p-6 space-y-8 sm:space-y-12">
              {packageData.map((pkg) => (
                <div key={pkg.grade} className="bg-secondary/20 border border-primary-foreground/10 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary-foreground/10 pb-4 mb-6 gap-2">
                    <h4 className="text-xl font-display font-bold text-primary-foreground">{pkg.grade} Finish</h4>
                    <div className="text-[10px] w-fit font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1">
                      Multiplier: {pkg.multiplier}
                    </div>
                  </div>

                  <div className="space-y-8">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <h5 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-3">
                          {cat}
                        </h5>
                        <ul className="space-y-3">
                          {pkg.specs[cat].map((spec, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-primary-foreground/80 leading-relaxed"
                            >
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer space to ensure scroll clearance */}
            <div className="h-12" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

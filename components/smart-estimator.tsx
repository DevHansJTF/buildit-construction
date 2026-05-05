"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Home,
  Factory,
  ArrowRight,
  Lock,
  FileText,
  CheckCircle,
  Calculator,
  ArrowLeft,
  X,
} from "lucide-react";
import { SpecsDrawer } from "@/components/specs-drawer";
import { Step1Sector, type ProjectSector } from "@/components/step1-sector";

type ProjectType = "Residential" | "Commercial" | "Industrial";
type FinishGrade = "Standard" | "Premium" | "Luxury";

interface EstimatorData {
  type: string | null;
  baseRate: number;
  area: number;
  finish: FinishGrade | null;
  name: string;
  email: string;
}

const finishMultipliers: Record<FinishGrade, number> = {
  Standard: 1.0,
  Premium: 1.4,
  Luxury: 2.0,
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function SmartEstimator() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<EstimatorData>({
    type: null,
    baseRate: 0,
    area: 500,
    finish: null,
    name: "",
    email: "",
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    costLow: number;
    costHigh: number;
    monthsLow: number;
    monthsHigh: number;
  } | null>(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);

  const calculateEstimate = () => {
    if (!data.type || !data.finish || !data.baseRate) return;

    const baseRate = data.baseRate;
    const multiplier = finishMultipliers[data.finish];
    const targetCost = data.area * baseRate * multiplier;

    const costLow = targetCost * 0.85;
    const costHigh = targetCost * 1.15;

    const baseMonths = Math.floor(data.area / 150) + 2;
    const monthsLow = baseMonths;
    const monthsHigh = baseMonths + 2;

    setResults({ costLow, costHigh, monthsLow, monthsHigh });
  };

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
      setIsAnalyzing(true);
      calculateEstimate();
      setTimeout(() => {
        setIsAnalyzing(false);
        setStep(5);
      }, 2500);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            key="step0"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-center py-8 sm:py-12"
          >
            <Calculator className="w-12 h-12 text-accent mx-auto mb-6 sm:mb-8" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 tracking-tight">
              Stop Guessing. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400">
                Calculate Your Build.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10">
              Use our interactive estimator to input your project specs and instantly receive a verified cost bracket
              and timeline projection based on current material indices.
            </p>

            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center gap-3 bg-accent text-primary-foreground px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-colors group"
            >
              Open Smart Estimator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-60 grayscale border-t border-primary-foreground/10 pt-8 sm:pt-12">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground">Certified By:</div>
              <div className="flex flex-wrap justify-center gap-6">
                <div>
                  <span className="font-display font-bold">CIAP</span>
                </div>
                <div>
                  <span className="font-display font-bold">PCAB AAAA</span>
                </div>
                <div>
                  <span className="font-display font-bold">ISO 9001</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div key="step1" variants={slideVariants} initial="initial" animate="enter" exit="exit">
            <Step1Sector
              selectedId={data.type?.toLowerCase()}
              onSelect={(sector) => {
                setData({ ...data, type: sector.title, baseRate: sector.baseRate });
                setTimeout(() => handleNext(), 300);
              }}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="space-y-8 max-w-lg mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold">What is the estimated scale?</h3>
              <p className="text-primary-foreground/60 mt-2">Adjust the slider to approximate your gross floor area.</p>
            </div>

            <div className="bg-secondary/40 border border-primary-foreground/10 p-8 text-center">
              <div className="text-5xl font-display font-bold text-accent mb-2">
                {data.area.toLocaleString()} <span className="text-2xl text-primary-foreground/50">SQM</span>
              </div>
            </div>

            <div className="space-y-4 py-4">
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={data.area}
                onChange={(e) => setData({ ...data, area: parseInt(e.target.value) })}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent my-4"
                style={{ minHeight: "44px" }}
              />
              <div className="flex justify-between text-xs text-primary-foreground/40 font-mono">
                <span>50 SQM</span>
                <span>5,000+ SQM</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-accent text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold">Select your desired finish grade.</h3>
              <p className="text-primary-foreground/60 mt-2">
                This significantly impacts material costs and timelines.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { grade: "Standard", desc: "Functional, durable, enterprise-baseline." },
                { grade: "Premium", desc: "High-end fixtures, architectural lighting." },
                { grade: "Luxury", desc: "Bespoke materials, imported stone, smart-integrated." },
              ].map((item) => {
                const isSelected = data.finish === item.grade;
                return (
                  <button
                    key={item.grade}
                    onClick={() => {
                      setData({ ...data, finish: item.grade as FinishGrade });
                      setTimeout(() => handleNext(), 300);
                    }}
                    className={`p-6 border text-left flex flex-col transition-all min-h-[80px] sm:min-h-auto ${
                      isSelected
                        ? "bg-secondary/80 border-accent shadow-[0_0_15px_rgba(176,141,87,0.2)]"
                        : "bg-secondary/30 border-primary-foreground/10 hover:border-primary-foreground/30 hover:bg-secondary/50"
                    }`}
                  >
                    <h4 className={`font-bold text-lg mb-2 ${isSelected ? "text-accent" : ""}`}>{item.grade}</h4>
                    <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="text-center pt-8">
              <button
                onClick={() => setIsSpecsOpen(true)}
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-yellow-600 transition-colors underline underline-offset-4"
              >
                View detailed finish specifications
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="py-12 flex flex-col items-center text-center space-y-6 min-h-[300px] justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-16 h-16 border-4 border-secondary border-t-accent rounded-full"
            />
            <div>
              <h3 className="text-xl font-display font-bold mb-2">Architectural Assessment</h3>
              <p className="text-primary-foreground/60 text-sm">
                Analyzing current material indices and local labor rates...
              </p>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="max-w-md mx-auto relative"
          >
            <div className="absolute inset-0 bg-secondary/20 backdrop-blur-sm z-0 flex items-center justify-center border border-primary-foreground/10" />

            <div className="relative z-10 bg-primary border border-primary-foreground/20 p-8 shadow-2xl text-center">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Your estimate is locked.</h3>
              <p className="text-sm text-primary-foreground/60 mb-8 leading-relaxed">
                Your preliminary calculation is ready. Where should we send the detailed breakdown and lifecycle
                mapping?
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full bg-secondary/40 border border-primary-foreground/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full bg-secondary/40 border border-primary-foreground/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-primary-foreground py-4 mt-2 font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2"
                >
                  Unlock Estimate <FileText className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            key="step6"
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-500 rounded-full mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-2">Preliminary Assessment</h3>
            <p className="text-primary-foreground/60 mb-10">
              We&apos;ve detailed your {data.area} SQM {data.finish} {data.type} project.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-secondary/40 border border-primary-foreground/10 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                  Estimated Cost Bracket
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {results
                    ? `${formatCurrency(results.costLow)} - ${formatCurrency(results.costHigh)}`
                    : "Calculating..."}
                </div>
              </div>
              <div className="bg-secondary/40 border border-primary-foreground/10 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Execution Timeline</div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {results ? `${results.monthsLow} - ${results.monthsHigh} Months` : "Calculating..."}
                </div>
              </div>
            </div>

            <p className="text-xs text-primary-foreground/40 max-w-2xl mx-auto border-t border-primary-foreground/10 pt-6">
              Disclaimer: This is a preliminary algorithmic estimate based on historical data and current market
              aggregates. It is not a binding quotation. A formal scope of work and engineering review is required for a
              guaranteed maximum price.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full text-primary-foreground transition-all duration-700 overflow-hidden relative ${
        step > 0 ? "bg-primary border border-primary-foreground/10 shadow-2xl" : "bg-transparent py-12"
      }`}
    >
      {/* Decorative Grid Lines */}
      {step > 0 && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      )}

      {/* Navigation Controls */}
      {step > 0 && (
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 z-20 flex justify-between items-center pointer-events-none">
          {(step > 0 && step < 4) || step === 5 ? (
            <button
              onClick={() => {
                if (step === 5) {
                  setStep(3);
                } else {
                  setStep((prev) => prev - 1);
                }
              }}
              className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 hover:text-white transition-colors flex items-center gap-2 pointer-events-auto group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
              {step === 5 ? "Edit Inputs" : "Back"}
            </button>
          ) : (
            <div />
          )}

          {step > 0 &&
            step !== 4 &&
            (isCancelConfirmOpen ? (
              <div className="flex items-center gap-3 pointer-events-auto bg-primary border border-primary-foreground/10 px-3 py-2 -my-2 shadow-xl whitespace-nowrap">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70 hidden sm:inline">
                  Cancel estimate?
                </span>
                <button
                  onClick={() => {
                    setIsCancelConfirmOpen(false);
                    setStep(0);
                    setData({ type: null, baseRate: 0, area: 500, finish: null, name: "", email: "" });
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors"
                >
                  Yes
                </button>
                <span className="text-primary-foreground/30">/</span>
                <button
                  onClick={() => setIsCancelConfirmOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 hover:text-white transition-colors"
                >
                  No
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsCancelConfirmOpen(true)}
                className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 hover:text-red-400 transition-colors flex items-center gap-2 pointer-events-auto group"
              >
                Close <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
            ))}
        </div>
      )}

      {/* Step Indicator (hide on loading and results) */}
      {step > 0 && step < 4 && (
        <div className="px-4 pb-2 pt-16 sm:px-8 relative z-10 flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2 w-12 sm:w-16">
              <div
                className={`h-1 w-full rounded-full transition-colors ${s <= step ? "bg-accent" : "bg-primary-foreground/10"}`}
              />
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${s === step ? "text-accent" : "text-primary-foreground/30 hidden sm:block"}`}
              >
                {s === step ? `Step ${s}` : s}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Dynamic Content Area */}
      <div className="p-4 sm:p-8 lg:p-12 relative z-10 min-h-[450px] flex flex-col justify-center">
        <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
      </div>

      <SpecsDrawer
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        activeSector={
          data.type ? (data.type.toLowerCase() as "commercial" | "residential" | "industrial") : "commercial"
        }
      />
    </div>
  );
}

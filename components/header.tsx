"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { HardHat, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary/20 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
          <HardHat className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-warning transition-colors" />
          <span className="font-display font-bold tracking-tighter text-xl md:text-2xl uppercase">
            BuildIt.<span className="text-accent">Corp</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          <Link href="/projects" className="hover:text-warning transition-colors">
            Projects
          </Link>
          <Link href="/company" className="hover:text-warning transition-colors">
            Company
          </Link>
          <Link href="/insights" className="hover:text-warning transition-colors">
            Insights
          </Link>
          <Link href="/packages" className="hover:text-warning transition-colors">
            Packages
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#quote"
            className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-accent text-primary-foreground font-medium text-sm tracking-wide hover:bg-accent/90 transition-all rounded-sm uppercase min-h-[44px]"
          >
            Start a Blueprint
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary-foreground/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-8 gap-1 text-sm font-bold uppercase tracking-widest text-primary-foreground/90">
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="flex items-center hover:text-accent transition-colors py-4 border-b border-primary-foreground/10 min-h-[44px]"
              >
                Projects
              </Link>
              <Link
                href="/company"
                onClick={() => setIsOpen(false)}
                className="flex items-center hover:text-accent transition-colors py-4 border-b border-primary-foreground/10 min-h-[44px]"
              >
                Company
              </Link>
              <Link
                href="/insights"
                onClick={() => setIsOpen(false)}
                className="flex items-center hover:text-accent transition-colors py-4 border-b border-primary-foreground/10 min-h-[44px]"
              >
                Insights
              </Link>
              <Link
                href="/packages"
                onClick={() => setIsOpen(false)}
                className="flex items-center hover:text-accent transition-colors py-4 border-b border-primary-foreground/10 min-h-[44px]"
              >
                Packages
              </Link>
              <Link
                href="/#quote"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-accent hover:text-warning transition-colors py-4 mt-2 min-h-[44px]"
              >
                Start a Blueprint
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

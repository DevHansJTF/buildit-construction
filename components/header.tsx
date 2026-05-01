"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HardHat } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary/20 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <HardHat className="w-8 h-8 text-accent group-hover:text-warning transition-colors" />
          <span className="font-display font-bold tracking-tighter text-2xl uppercase">
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
            href="#quote"
            className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-accent text-primary-foreground font-medium text-sm tracking-wide hover:bg-accent/90 transition-all rounded-sm uppercase"
          >
            Start a Blueprint
          </Link>
        </div>
      </div>
    </header>
  );
}

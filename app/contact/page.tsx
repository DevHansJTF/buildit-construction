"use client";

import { Header } from "@/components/header";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden pt-20">
      <Header />

      {/* Contact Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-primary-foreground/10 text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6 shadow-xl">
            Start a Conversation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
              BuildIt.Corp
            </span>
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your blueprint to reality? Reach out to our team of dedicated project managers and
            architects.
          </p>
        </div>

        {/* Abstract Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </section>

      {/* Main Contact Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-16 sm:mb-24">
        <ContactSection />
      </section>

      {/* Global Offices */}
      <section className="py-16 sm:py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Our Regional Offices</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We maintain dedicated hubs to service our primary operational zones across North America.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 border border-stone-200 p-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">East Coast Division</h4>
              <p className="text-lg font-bold text-primary mb-2">Metropolis HQ</p>
              <p className="text-stone-600 mb-6">
                100 Architecture Way
                <br />
                New York, NY 10012
              </p>
              <p className="text-sm font-mono text-stone-500">+1 (555) 890-1234</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">West Coast Division</h4>
              <p className="text-lg font-bold text-primary mb-2">Silicon Bay Operations</p>
              <p className="text-stone-600 mb-6">
                450 Steel Avenue
                <br />
                San Francisco, CA 94105
              </p>
              <p className="text-sm font-mono text-stone-500">+1 (555) 890-5678</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Central Division</h4>
              <p className="text-lg font-bold text-primary mb-2">Midwest Heavy Industrial</p>
              <p className="text-stone-600 mb-6">
                200 Concrete Blvd
                <br />
                Chicago, IL 60601
              </p>
              <p className="text-sm font-mono text-stone-500">+1 (555) 890-9012</p>
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

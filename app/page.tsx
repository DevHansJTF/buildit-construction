import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Lifecycle } from "@/components/lifecycle";
import { Services } from "@/components/services";
import { CtaSection } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden">
      <Header />
      <Hero />
      <Lifecycle />
      <Services />

      <CtaSection />

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

"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <div className="w-full bg-white rounded-md shadow-2xl overflow-hidden border border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Contact Information */}
        <div className="bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              Let&apos;s build something exceptional.
            </h3>
            <p className="text-primary-foreground/70 mb-12 max-w-sm text-lg leading-relaxed">
              Reach out to our architectural team to discuss your next visionary project. We handle everything from
              concept to turnkey handover.
            </p>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-1">
                    Direct Line
                  </p>
                  <p className="text-lg font-mono">+1 (555) 890-1234</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-1">
                    Inquiries
                  </p>
                  <p className="text-lg font-mono">projects@buildit.corp</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-1">
                    Headquarters
                  </p>
                  <p className="text-lg">
                    100 Architecture Way
                    <br />
                    Metropolis, NY 10012
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 100 100" className="w-[400px] h-auto">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-8 md:p-12 lg:p-16 bg-white">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-stone-100 border-none px-4 py-3 min-h-[44px] rounded-sm focus:ring-2 focus:ring-accent outline-none text-stone-900 transition-shadow"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-stone-100 border-none px-4 py-3 min-h-[44px] rounded-sm focus:ring-2 focus:ring-accent outline-none text-stone-900 transition-shadow"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Corporate Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-stone-100 border-none px-4 py-3 min-h-[44px] rounded-sm focus:ring-2 focus:ring-accent outline-none text-stone-900 transition-shadow"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Project Type
              </label>
              <select
                id="projectType"
                className="w-full bg-stone-100 border-none px-4 py-3 min-h-[44px] rounded-sm focus:ring-2 focus:ring-accent outline-none text-stone-900 transition-shadow appearance-none"
              >
                <option value="commercial">Commercial Fit-Out</option>
                <option value="residential">Premium Residential</option>
                <option value="industrial">Industrial Facility</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Project Details
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-stone-100 border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none text-stone-900 transition-shadow resize-none"
                placeholder="Briefly describe your vision, timeline, and location..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-colors flex items-center justify-center gap-2 group min-h-[44px]"
            >
              Submit Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-stone-500 text-center mt-4">
              By submitting, you agree to our{" "}
              <a href="#" className="underline hover:text-stone-900">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

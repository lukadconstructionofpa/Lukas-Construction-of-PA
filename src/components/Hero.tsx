import React from 'react';
import { ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constructionData';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_construction_1790625368685.jpg"
          alt="High-Quality Residential Construction Project by Lukas Construction"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/75 to-neutral-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          
          {/* Location & Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-xs animate-float">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Allentown, PA · Licensed & Insured General Contractor</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 text-balance">
            Building Excellence, Transforming Homes Across Pennsylvania.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-neutral-200 mb-8 leading-relaxed font-normal max-w-2xl">
            From luxury kitchen and basement remodels to full additions, custom deck construction, and roofing—Lukas Construction delivers precision craftsmanship built to endure generations.
          </p>

          {/* Key Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full-Scope General Contracting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Transparent Upfront Bids</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Allentown & Lehigh Valley</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="contact.html"
              className="btn-premium inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-amber-500 text-neutral-950 font-bold text-base hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              <span>Get Free Project Estimate</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="services.html"
              className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40"
            >
              <span>Explore All 19 Services</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex sm:hidden items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800/90 text-neutral-200 font-semibold text-sm border border-neutral-700 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Direct: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

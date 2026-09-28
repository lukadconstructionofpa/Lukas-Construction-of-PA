import React from 'react';
import { ArrowRight, MapPin, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constructionData';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2 Column Layout: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <span className="w-6 h-0.5 bg-amber-600"></span>
              <span>About Lukas Construction of PA</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight text-balance">
              Decades of Combined Craftsmanship, Rooted in Allentown, PA.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              At <strong className="text-neutral-900">Lukas Construction of PA</strong>, based at 3525 Regent Ct in Allentown, we believe every home renovation should be an investment that brings lasting pride, structural integrity, and elevated living space.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              We specialize in custom residential general contracting—from ground-up home additions, full kitchen and bath transformations, and walk-out basement conversions to exterior finishing, custom composite decks, and complete roofing systems.
            </p>

            {/* Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Master Quality Standards</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Strict quality control on framing, trim, electrical, and plumbing staging.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Clear Communication</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Direct contractor accessibility, daily work updates, and fixed milestone quotes.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Button of page about.html */}
              <a
                href="about.html"
                className="btn-premium inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-bold text-sm hover:bg-amber-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Column 2: Image */}
          <div className="lg:col-span-5 relative">
            <div className="tilt-card relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-4/3 group bg-neutral-100">
              <img
                src="/src/assets/images/about_craftsmanship_1790625382979.jpg"
                alt="Lukas Construction team on site in Allentown PA reviewing architectural blueprints"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/15 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">On-Site Standards</p>
                <p className="text-sm font-bold text-white">Lukas Construction of PA · 3525 Regent Ct, Allentown, PA</p>
              </div>
            </div>

            {/* Decorative trust accent badge */}
            <div className="tilt-card absolute -bottom-6 -right-4 sm:-bottom-6 sm:right-6 bg-amber-500 text-neutral-950 font-bold p-4 rounded-2xl shadow-xl border border-amber-400 max-w-[200px] animate-pulse-glow">
              <p className="text-2xl font-heading font-black tabular-nums">100%</p>
              <p className="text-xs font-semibold leading-tight">Dedicated to Pennsylvania Homeowners</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

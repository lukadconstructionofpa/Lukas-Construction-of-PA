import React from 'react';
import { ShieldCheck, DollarSign, Hammer, ClipboardCheck, Clock, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/constructionData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <ShieldCheck key="shield" className="w-6 h-6 text-amber-500" />,
    <DollarSign key="dollar" className="w-6 h-6 text-amber-500" />,
    <Hammer key="hammer" className="w-6 h-6 text-amber-500" />,
    <ClipboardCheck key="clipboard" className="w-6 h-6 text-amber-500" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            <span className="w-6 h-0.5 bg-amber-400"></span>
            <span>The Lukas Standard</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Homeowners Choose Lukas Construction of PA
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            Construction shouldn’t be fraught with delays or hidden costs. We operate with strict transparency, seasoned on-site craftsmen, and respect for your home.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((point, index) => (
            <div
              key={point.title}
              className="tilt-card bg-neutral-800/80 hover:bg-neutral-800 rounded-3xl p-7 border border-neutral-700/80 hover:border-amber-500/70 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 shadow-inner">
                  {icons[index % icons.length]}
                </div>
                
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-700/60">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                  {point.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-800/40 border border-neutral-700/50 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Punctual Schedules</p>
              <p className="text-xs text-neutral-400">Daily start times & firm milestone dates</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-neutral-700"></div>

          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Full Workmanship Guarantee</p>
              <p className="text-xs text-neutral-400">Written warranty on all completed trade work</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-neutral-700"></div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">PA Licensed Contractor</p>
              <p className="text-xs text-neutral-400">Fully compliant with Pennsylvania home improvement statutes</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

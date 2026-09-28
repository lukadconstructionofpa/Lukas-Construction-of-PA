import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constructionData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span className="w-6 h-0.5 bg-amber-600"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Contact Lukas Construction of PA
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Reach out directly to discuss your home renovation, remodeling, additions, or repair project in Allentown and across Pennsylvania.
          </p>
        </div>

        {/* 3 Main Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Phone */}
          <div className="tilt-card glow-card bg-neutral-50/90 rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl flex flex-col justify-between hover:bg-white transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-1">
                Call Us Directly
              </p>
              <h3 className="font-heading text-2xl font-black text-neutral-900 mb-2 tabular-nums">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Direct phone consultation with our project team for scheduling estimates and urgent inquiries.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-neutral-200/80">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-premium inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-neutral-900 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg group"
              >
                <span>Call {BUSINESS_INFO.phone}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="tilt-card glow-card bg-neutral-50/90 rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl flex flex-col justify-between hover:bg-white transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-1">
                Email Inquiry
              </p>
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2 break-all">
                {BUSINESS_INFO.email}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Send blueprints, project scopes, or questions. We respond promptly within standard business hours.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-neutral-200/80">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="btn-premium inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-neutral-900 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg group"
              >
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 3: Headquarters & Hours */}
          <div className="tilt-card bg-neutral-900 text-white rounded-3xl p-8 shadow-xl border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-1">
                Office & Hours
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                {BUSINESS_INFO.address}
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                {BUSINESS_INFO.cityStateZip}
              </p>

              <div className="space-y-1.5 text-xs text-neutral-300 pt-3 border-t border-neutral-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">Monday – Friday:</span>
                  <span>7:00 AM – 5:00 PM</span>
                </div>
                <div className="text-neutral-400 pl-6">
                  Saturday & Sunday: Closed
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Serving Allentown, Bethlehem, Easton & Lehigh Valley</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Hammer, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constructionData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoErr, setLogoErr] = useState(false);

  const handleLink = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          
          {/* Column 1: Website Logo & Tagline (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {!logoErr ? (
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Lukas Construction of PA Logo"
                  className="h-12 w-auto object-contain bg-white/10 rounded-md p-1"
                  onError={() => setLogoErr(true)}
                />
              ) : (
                <div className="h-11 w-11 rounded-lg bg-neutral-900 text-amber-500 flex items-center justify-center font-bold">
                  <Hammer className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight block">
                  Lukas Construction
                </span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  of PA
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm pt-2">
              Premier residential construction, master home remodeling, additions, and repairs built with integrity across Allentown, PA and the greater Lehigh Valley.
            </p>

            <div className="pt-2 text-xs text-neutral-500">
              Licensed & Insured Residential General Contractor
            </div>
          </div>

          {/* Column 2: Get In Touch (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider text-amber-400">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_INFO.address}</p>
                  <p className="text-neutral-400 text-xs">{BUSINESS_INFO.cityStateZip}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-amber-400 transition-colors font-medium tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-white hover:text-amber-400 transition-colors text-xs break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-1 text-xs text-neutral-400">
                Monday – Friday: 7:00 AM – 5:00 PM
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="contact.html"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Contact Page</span>
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="services.html"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Home Page</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Custom Code (Map Embed) (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider text-amber-400">
              Find Our Office
            </h4>
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-md group">
              <a
                href="https://g.page/r/CSRuYcPFxVbfEBM/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative cursor-pointer"
                title="Open Lukas Construction of PA on Google Maps"
              >
                {/* Custom code iframe as requested */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193928.8398763608!2d-75.4699343!3d40.5827065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4da37610906bc4fd%3A0xdf56c5c5c3616e24!2sLukas%20Construction%20of%20PA!5e0!3m2!1sen!2s!4v1790625183518!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Lukas Construction of PA Location"
                  className="w-full h-48 block pointer-events-none"
                />
                {/* Clickable overlay ensuring entire map click opens the link */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-neutral-900/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-700 shadow-lg pointer-events-none">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Last Row of Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </p>
          
          <p>
            Powered and Secured by{' '}
            <a
              href={BUSINESS_INFO.rankingGeeksLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
            >
              The Ranking Geeks
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

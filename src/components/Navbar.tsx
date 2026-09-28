import React, { useState } from 'react';
import { Phone, Menu, X, Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constructionData';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { label: 'Home', href: 'index.html', pageId: 'home' },
    { label: 'About', href: 'about.html', pageId: 'about' },
    { label: 'Services', href: 'services.html', pageId: 'services' },
    { label: 'Contact', href: 'contact.html', pageId: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Zone */}
          <a
            href="index.html"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-sm"
          >
            {!logoError ? (
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Lukas Construction of PA Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-11 w-11 rounded-lg bg-neutral-900 text-amber-500 flex items-center justify-center font-bold shadow-xs">
                <Hammer className="w-6 h-6" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-neutral-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
                Lukas Construction
              </span>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                of PA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activePage === item.pageId;
              return (
                <a
                  key={item.pageId}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                    isActive
                      ? 'text-amber-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600'
                      : 'text-neutral-700 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-amber-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="contact.html"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-lg hover:bg-amber-600 transition-colors shadow-sm whitespace-nowrap"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Lukas Construction"
              className="p-2 text-neutral-700 hover:text-amber-600"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.pageId}
                href={item.href}
                className={`px-3 py-2 rounded-md text-base font-semibold ${
                  activePage === item.pageId
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 font-semibold text-neutral-800 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="contact.html"
              className="w-full text-center px-4 py-2.5 rounded-lg bg-amber-600 text-white font-bold text-sm tracking-wide shadow-xs"
            >
              Request Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

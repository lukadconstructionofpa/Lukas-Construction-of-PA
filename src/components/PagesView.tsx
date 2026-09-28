import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Hammer, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, ALL_SERVICES } from '../data/constructionData';
import { ContactSection } from './ContactSection';

interface PagesViewProps {
  page: 'about' | 'services' | 'contact' | 'privacy' | 'terms';
  onBackToHome: () => void;
  onNavigate: (page: string) => void;
}

export const PagesView: React.FC<PagesViewProps> = ({ page, onBackToHome, onNavigate }) => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation pill - no index.html mentioned */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-amber-600 mb-8 px-4 py-2 rounded-lg bg-white border border-neutral-200 shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* ABOUT PAGE */}
        {page === 'about' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Company Overview</span>
              <h1 className="font-heading text-4xl sm:text-5xl font-black text-neutral-900 mt-2 tracking-tight">
                About Lukas Construction of PA
              </h1>
              <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                Dedicated residential general contractors headquartered at 3525 Regent Ct in Allentown, PA. We build with unyielding structural integrity, honest craftsmanship, and personalized client communication.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <h3 className="font-heading text-2xl font-bold text-neutral-900">Our Story & Mission</h3>
                <p>
                  Founded to provide Pennsylvania homeowners with a contractor they can rely on, Lukas Construction of PA combines hands-on master carpentry with modern project coordination. We treat every home in Allentown, Bethlehem, Easton, and beyond as if it were our own.
                </p>
                <p>
                  From full structural alterations and two-story home additions to bespoke kitchen islands and custom outdoor living decks, our crew manages every detail from initial permits through final touch-ups.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 font-medium text-neutral-900">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Pennsylvania Home Improvement Contractor Registered</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-neutral-900">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Comprehensive Liability & Workers' Comp Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-neutral-900">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Direct Owner Supervision on Every Job Site</span>
                  </div>
                </div>

                {/* Learn More button after story and mission linking to Google Maps */}
                <div className="pt-4">
                  <a
                    href={BUSINESS_INFO.mapsPageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900 text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-sm"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src="/src/assets/images/about_craftsmanship_1790625382979.jpg"
                  alt="Lukas Construction of PA craftsmanship"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-lg bg-amber-500 text-neutral-950 font-bold text-sm hover:bg-amber-400 transition-colors"
              >
                Call (484) 660-9091
              </a>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 rounded-lg bg-neutral-100 text-neutral-800 font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                View Services
              </button>
            </div>
          </div>
        )}

        {/* SERVICES PAGE */}
        {page === 'services' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-neutral-200">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Complete Directory</span>
                <h1 className="font-heading text-4xl sm:text-5xl font-black text-neutral-900 mt-2 tracking-tight">
                  Our Residential Services
                </h1>
                <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                  Lukas Construction of PA delivers full-scale residential construction, remodeling, additions, and repair trades in Pennsylvania.
                </p>
              </div>

              {/* Single button "View More" with kgmid link as requested */}
              <div className="shrink-0">
                <a
                  href={BUSINESS_INFO.servicesPageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-colors shadow-sm"
                >
                  <span>View More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Full 19 Services Clean Grid - no 'Inquire About This Service' link */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_SERVICES.map((s, index) => (
                <div
                  key={s}
                  className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-amber-600">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-neutral-400" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                      {s}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Professional execution by licensed tradesmen adhering to Pennsylvania residential construction safety and code requirements.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  Ready to Start Your Project?
                </h3>
                <p className="text-neutral-600 text-sm mt-1">
                  Contact Lukas Construction of PA at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-amber-600 hover:underline">{BUSINESS_INFO.phone}</a> or email <a href={`mailto:${BUSINESS_INFO.email}`} className="font-bold text-amber-600 hover:underline">{BUSINESS_INFO.email}</a>.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.servicesPageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-amber-600 text-white font-bold text-sm transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>View More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* CONTACT PAGE - Uses clean ContactSection with no form */}
        {page === 'contact' && (
          <div>
            <ContactSection />
          </div>
        )}

        {/* PRIVACY POLICY */}
        {page === 'privacy' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <FileText className="w-4 h-4" />
              <span>Legal Notice</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-neutral-900">
              Privacy Policy
            </h1>
            <p className="text-sm text-neutral-500">Effective Date: 2026 · Lukas Construction of PA</p>

            <div className="space-y-4 text-neutral-700 text-sm leading-relaxed">
              <p>
                Lukas Construction of PA ("we," "our," or "us") respects your privacy. This policy outlines how we handle personal communication and project details.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">1. Information We Collect</h3>
              <p>
                When you contact us for construction, remodeling, or renovation services, we collect contact information such as name, phone number, email address, and property location in Pennsylvania solely to facilitate project consultation.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">2. How We Use Information</h3>
              <p>
                We use this information exclusively to communicate regarding construction estimates, schedule on-site inspections, prepare proposals, and manage ongoing projects. We never sell or rent your personal information to third parties.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">3. Contact</h3>
              <p>
                For questions regarding your privacy, please email us at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-amber-600 underline">{BUSINESS_INFO.email}</a> or call <span className="font-semibold">{BUSINESS_INFO.phone}</span>.
              </p>
            </div>
          </div>
        )}

        {/* TERMS & CONDITIONS */}
        {page === 'terms' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <FileText className="w-4 h-4" />
              <span>Legal Notice</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-neutral-900">
              Terms & Conditions
            </h1>
            <p className="text-sm text-neutral-500">Effective Date: 2026 · Lukas Construction of PA</p>

            <div className="space-y-4 text-neutral-700 text-sm leading-relaxed">
              <p>
                Welcome to the website of Lukas Construction of PA. By using this website, you agree to these standard terms.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">1. Scope of Estimates</h3>
              <p>
                All preliminary construction estimates and consultation notes are confirmed in a signed written contract following an in-person physical inspection of the Pennsylvania property.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">2. Licensing & Compliance</h3>
              <p>
                All construction, remodeling, and renovation work is performed in compliance with Pennsylvania Uniform Construction Code (UCC) and local municipal guidelines.
              </p>
              <h3 className="font-bold text-neutral-900 text-base pt-2">3. Business Address</h3>
              <p>
                Lukas Construction of PA, 3525 Regent Ct, Allentown, PA 18103. Phone: {BUSINESS_INFO.phone}.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

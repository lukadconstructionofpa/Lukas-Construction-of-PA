import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Check, 
  Home, 
  Sparkles, 
  ShieldCheck, 
  Wrench,
  Hammer
} from 'lucide-react';
import { ALL_SERVICES, BUSINESS_INFO } from '../data/constructionData';

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'remodel' | 'exterior' | 'building'>('all');

  // Featured visual services with generated images
  const featuredServices = [
    {
      title: 'Kitchen Remodelling',
      category: 'remodel',
      image: '/src/assets/images/service_kitchen_1790625395217.jpg',
      description: 'Custom cabinetry, waterfall quartz countertops, open-concept layout reconfiguration, and modern lighting systems.'
    },
    {
      title: 'Deck Construction',
      category: 'exterior',
      image: '/src/assets/images/service_deck_1790625406104.jpg',
      description: 'Multi-level composite and cedar decks, pergolas, custom railings, and integrated outdoor living spaces.'
    },
    {
      title: 'Basement Remodelling',
      category: 'remodel',
      image: '/src/assets/images/service_basement_1790625416240.jpg',
      description: 'Full basement conversions into high-end entertainment lounges, home theaters, guest suites, and custom wet bars.'
    }
  ];

  // Filtering services
  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesSearch = service.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'remodel') {
      return matchesSearch && (service.toLowerCase().includes('remodel') || service.toLowerCase().includes('bathroom') || service.toLowerCase().includes('kitchen') || service.toLowerCase().includes('interior') || service.toLowerCase().includes('renovation'));
    }
    if (selectedCategory === 'exterior') {
      return matchesSearch && (service.toLowerCase().includes('deck') || service.toLowerCase().includes('roof') || service.toLowerCase().includes('exterior'));
    }
    if (selectedCategory === 'building') {
      return matchesSearch && (service.toLowerCase().includes('building') || service.toLowerCase().includes('addition') || service.toLowerCase().includes('construction') || service.toLowerCase().includes('drywall') || service.toLowerCase().includes('floor'));
    }
    return matchesSearch;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
              <span className="w-6 h-0.5 bg-amber-600"></span>
              <span>Comprehensive Residential Solutions</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Our Construction & Remodeling Services
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mt-3">
              Lukas Construction delivers turnkey craftsmanship for residential properties in Allentown and throughout Pennsylvania.
            </p>
          </div>

          {/* Action button requested: Single button "explore all services with services.html" */}
          <div className="shrink-0 flex items-center">
            <a
              href="services.html"
              className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Featured Visual Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((feat) => (
            <div
              key={feat.title}
              className="tilt-card glow-card bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                <img
                  src={feat.image}
                  alt={feat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-xs">
                  Residential Specialty
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                
                <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Allentown, PA</span>
                  <span className="font-semibold text-amber-600">Licensed Craftsmanship</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full 19 Services Catalog */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900">
                Full Service Directory ({ALL_SERVICES.length} Licensed Services)
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                Explore our complete suite of general construction and specialty trades.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search any service..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Service Category Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              All Trades ({ALL_SERVICES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('remodel')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedCategory === 'remodel'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Remodeling & Interiors
            </button>
            <button
              onClick={() => setSelectedCategory('exterior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedCategory === 'exterior'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Roofing & Decks
            </button>
            <button
              onClick={() => setSelectedCategory('building')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedCategory === 'building'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Building & Additions
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredServices.map((serviceName) => (
              <div
                key={serviceName}
                className="glow-card flex items-center justify-between p-3.5 rounded-xl border border-neutral-200/90 bg-neutral-50/70 hover:bg-white hover:border-amber-400/80 transition-all cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 flex items-center justify-center transition-colors group-hover:bg-amber-500">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-800">
                    {serviceName}
                  </span>
                </div>
                <Check className="w-4 h-4 text-amber-600" />
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-8 text-neutral-500 text-sm">
              No service matching "{searchTerm}". Please contact us directly for custom requests!
            </div>
          )}

          {/* Bottom Bar for Services */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center gap-3 bg-neutral-50 p-4 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-700">
              All services backed by Pennsylvania building permits, certified inspections, and workmanship guarantees.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

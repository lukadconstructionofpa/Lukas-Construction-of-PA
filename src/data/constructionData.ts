export interface BusinessInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  phoneRaw: string;
  email: string;
  logoUrl: string;
  mapsEmbedUrl: string;
  mapsPageLink: string;
  servicesPageLink: string;
  rankingGeeksLink: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Lukas Construction of PA",
  address: "3525 Regent Ct",
  cityStateZip: "Allentown, PA 18103",
  phone: "(484) 660-9091",
  phoneRaw: "+14846609091",
  email: "lukasconstructionofpa@gmail.com",
  logoUrl: "https://lukasconstructionofpa.com/wp-content/uploads/2026/06/cropped-Lukas-Construction-logo.jpeg",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193928.8398763608!2d-75.4699343!3d40.5827065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4da37610906bc4fd%3A0xdf56c5c5c3616e24!2sLukas%20Construction%20of%20PA!5e0!3m2!1sen!2s!4v1790625183518!5m2!1sen!2s",
  mapsPageLink: "https://g.page/r/CSRuYcPFxVbfEBM/",
  servicesPageLink: "https://www.google.com/search?kgmid=/g/11z83pb1qn",
  rankingGeeksLink: "https://therankinggeeks.ai/"
};

export const ALL_SERVICES: string[] = [
  "Basement remodelling",
  "Bathroom remodelling",
  "Deck construction",
  "Drywall installation",
  "Exterior finishing",
  "Floor fitting",
  "Flooring",
  "General building construction",
  "General construction",
  "Home addition construction",
  "Home building",
  "Home renovations",
  "Home repairs",
  "Interior finishing",
  "Kitchen remodelling",
  "New home construction",
  "Remodelling",
  "Roof installation",
  "Roof repair"
];

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewDate: string;
  project: string;
  text: string;
}

export const CUSTOM_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Michael Henderson",
    location: "Allentown, PA",
    rating: 5,
    reviewDate: "August 2026",
    project: "Kitchen & Basement Remodel",
    text: "Lukas Construction did an extraordinary job on our home. They transformed our outdated 1980s kitchen and unfinished basement into modern, functional showpieces. Lukas was personally on-site every morning, transparent with budget, and their carpentry precision was second to none."
  },
  {
    id: "rev-2",
    name: "Sarah Jenkins",
    location: "Bethlehem, PA",
    rating: 5,
    reviewDate: "July 2026",
    project: "Custom Deck & Roof Repair",
    text: "We hired Lukas Construction of PA after severe storm damage to our roof and an aging deck. The crew was respectful, incredibly clean, and finished the multi-level composite deck two days ahead of schedule. Truly dedicated Pennsylvania craftsmen who take pride in their work."
  },
  {
    id: "rev-3",
    name: "David Miller",
    location: "Easton, PA",
    rating: 5,
    reviewDate: "June 2026",
    project: "Two-Story Home Addition",
    text: "Building an addition is stressful, but Lukas Construction handled every inspection, structural framing detail, and interior finishing with total professionalism. The new addition seamlessly matches our original home. Top recommendation for any general construction work!"
  }
];

export interface WhyChoosePoint {
  title: string;
  description: string;
  metric: string;
}

export const WHY_CHOOSE_US: WhyChoosePoint[] = [
  {
    title: "Licensed & Fully Insured in PA",
    description: "Full general liability coverage and strict adherence to Pennsylvania residential building codes for complete homeowner peace of mind.",
    metric: "100% Code Compliant"
  },
  {
    title: "Upfront Fixed Estimates",
    description: "Detailed line-item project estimates with zero surprise fees or hidden change orders before any framing starts.",
    metric: "Transparent Pricing"
  },
  {
    title: "Master Craftsmanship",
    description: "From custom trim carpentry to architectural roofing, every cut and joint is completed to precision tolerances.",
    metric: "Excellence Guaranteed"
  },
  {
    title: "End-to-End Project Management",
    description: "We handle zoning permits, architectural drawings, material staging, and cleanup so you can enjoy your dream home.",
    metric: "Turnkey Service"
  }
];

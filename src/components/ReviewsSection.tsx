import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { CUSTOM_REVIEWS } from '../data/constructionData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span className="w-6 h-0.5 bg-amber-600"></span>
            <span>Client Testimonials</span>
            <span className="w-6 h-0.5 bg-amber-600"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Trusted by Homeowners Across Pennsylvania
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4">
            Hear from local Pennsylvania families who experienced our communication, craftsmanship, and commitment firsthand.
          </p>
        </div>

        {/* 3 Custom Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOM_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="tilt-card glow-card bg-neutral-50/90 rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl flex flex-col justify-between hover:bg-white transition-all duration-300"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300" />
                </div>

                {/* Review Text */}
                <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-neutral-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-neutral-900 text-base">
                      {review.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {review.location} · {review.project}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Trust Bar */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Reviews verified from Allentown, Bethlehem, Easton, and surrounding Pennsylvania communities.
        </div>

      </div>
    </section>
  );
};

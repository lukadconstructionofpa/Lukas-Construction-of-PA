import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PagesView } from './components/PagesView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact' | 'privacy' | 'terms'>('home');

  // Handle URL hash / path on initial load if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'about' || hash === 'about.html') setCurrentPage('about');
    else if (hash === 'services' || hash === 'services.html') setCurrentPage('services');
    else if (hash === 'contact' || hash === 'contact.html') setCurrentPage('contact');
    else if (hash === 'privacy' || hash === 'privacy-policy') setCurrentPage('privacy');
    else if (hash === 'terms' || hash === 'terms-and-conditions') setCurrentPage('terms');
  }, []);

  const navigateTo = (page: string) => {
    const cleanPage = page.replace('.html', '').replace('#', '').toLowerCase();
    if (cleanPage === 'home' || cleanPage === 'index') {
      setCurrentPage('home');
      window.history.pushState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanPage === 'about') {
      setCurrentPage('about');
      window.history.pushState(null, '', '#about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanPage === 'services') {
      setCurrentPage('services');
      window.history.pushState(null, '', '#services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanPage === 'contact') {
      setCurrentPage('contact');
      window.history.pushState(null, '', '#contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanPage === 'privacy') {
      setCurrentPage('privacy');
      window.history.pushState(null, '', '#privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanPage === 'terms') {
      setCurrentPage('terms');
      window.history.pushState(null, '', '#terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* Top Navigation */}
      <Navbar activePage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section with background image of residential project & text */}
            <Hero onNavigate={navigateTo} />

            {/* 2. About Section with 2 columns of text and image + button of page about.html */}
            <AboutSection onNavigate={navigateTo} />

            {/* 3. Services Section with images and Explore All Services button */}
            <ServicesSection onNavigate={navigateTo} />

            {/* 4. 3 Custom Reviews with English USA names */}
            <ReviewsSection />

            {/* 5. Contact Section with contact.html page / anchor */}
            <ContactSection />

            {/* 6. Why Choose Us Section */}
            <WhyChooseUs />
          </>
        ) : (
          <PagesView
            page={currentPage}
            onBackToHome={() => navigateTo('home')}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Footer with 4 Columns & Powered by The Ranking Geeks */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

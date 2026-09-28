/**
 * Lightweight, high-performance interaction utilities
 * - Scroll Reveal via IntersectionObserver
 * - 3D Card Tilt on Mouse Move
 * - Magnetic Hover Accents
 */

export function initInteractions() {
  if (typeof window === 'undefined') return;

  // 1. Scroll Reveal with IntersectionObserver
  const revealElements = document.querySelectorAll<HTMLElement>(
    '.reveal-init, .reveal-fade-left, .reveal-fade-right, section h2, section .max-w-3xl, .tilt-card, .glow-card'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains('reveal-init') && !el.classList.contains('reveal-fade-left') && !el.classList.contains('reveal-fade-right')) {
        el.classList.add('reveal-init');
      }
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // 2. 3D Card Tilt for Desktop Devices (Pointer: fine)
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouchDevice) {
    const tiltCards = document.querySelectorAll<HTMLElement>('.tilt-card, .interactive-tilt');

    tiltCards.forEach((card) => {
      let isHovering = false;

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovering) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Gentle tilt angles (max 6deg to remain elegant & readable)
        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`;
      };

      const handleMouseEnter = () => {
        isHovering = true;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease';
      };

      const handleMouseLeave = () => {
        isHovering = false;
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initInteractions());
  } else {
    initInteractions();
  }
}

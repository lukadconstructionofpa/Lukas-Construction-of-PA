/**
 * Lukas Construction of PA - Client Interactions
 * Pure Vanilla JavaScript for GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // 2. Scroll Reveal Animations
  const revealElements = document.querySelectorAll(
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
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains('reveal-init')) {
        el.classList.add('reveal-init');
      }
      observer.observe(el);
    });
  } else {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // 3. 3D Card Tilt Effect on Desktop
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouchDevice) {
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach((card) => {
      let isHovering = false;

      const handleMouseMove = (e) => {
        if (!isHovering) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`;
      };

      const handleMouseEnter = () => {
        isHovering = true;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease';
      };

      const handleMouseLeave = () => {
        isHovering = false;
        card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  // 4. Interactive Service Search Filter
  const searchInput = document.getElementById('service-search');
  const serviceItems = document.querySelectorAll('.service-grid-item');
  const noServicesMessage = document.getElementById('no-services-found');

  if (searchInput && serviceItems.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      let visibleCount = 0;

      serviceItems.forEach((item) => {
        const name = item.getAttribute('data-service-name') || item.textContent;
        if (name.toLowerCase().includes(query)) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (noServicesMessage) {
        noServicesMessage.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
});

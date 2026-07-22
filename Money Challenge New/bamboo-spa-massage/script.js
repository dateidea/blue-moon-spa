/* Bamboo Spa Massage — small, dependency-free interactions */

(function () {
  'use strict';

  /* current year in footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* mobile menu toggle */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (open) {
        menu.setAttribute('hidden', '');
      } else {
        menu.removeAttribute('hidden');
      }
    });
    /* close on tap of any menu link */
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
      });
    });
  }

  /* FAQ — simple expand/collapse, accessible */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });

  /* Hide sticky bar near the very bottom so it doesn't cover the footer CTA */
  var stickyBar = document.querySelector('.sticky-bar');
  var finalCta = document.querySelector('.final-cta');
  if (stickyBar && finalCta && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        stickyBar.style.opacity = e.isIntersecting ? '0' : '1';
        stickyBar.style.pointerEvents = e.isIntersecting ? 'none' : 'auto';
      });
    }, { threshold: 0.4 });
    io.observe(finalCta);
  }

  /* Reveal-on-scroll for major sections */
  if ('IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll(
      '.about-pillars .pillar, .service-card, .decide-card, .expect-steps li, .atmo-tile, .trust-card'
    );
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { ro.observe(el); });
  }

  /* Smooth scroll offset for sticky header on hash links */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerH = document.querySelector('.site-header');
      var offset = headerH ? headerH.offsetHeight + 8 : 0;
      var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

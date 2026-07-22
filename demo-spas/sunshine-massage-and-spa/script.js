/* Sunshine Massage and Spa — small interactions
   - Sticky-header is-stuck class on scroll
   - Live "open / closed" status pill in the rate card
   - Reveal-on-scroll for sections and cards
   - Sticky-call hide near the final CTA
*/

(function () {
  'use strict';

  // --- Sticky header is-stuck ----------------------------------------------
  var header = document.querySelector('.site-header');
  function syncHeader() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-stuck');
    else header.classList.remove('is-stuck');
  }
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  // --- Live open / closed status -------------------------------------------
  // Hours: every day, 10am – 10pm (08:30 – 23:00).
  // Reads the user's local clock; the site doesn't claim live availability,
  // it just nudges based on the listed hours.
  var liveDot = document.getElementById('liveDot');
  var liveText = document.getElementById('liveText');

  function syncLiveStatus() {
    if (!liveDot || !liveText) return;
    var now = new Date();
    var minutes = now.getHours() * 60 + now.getMinutes();
    var open = 8 * 60 + 30;
    var close = 23 * 60;
    if (minutes >= open && minutes < close) {
      liveDot.className = 'dot dot-open';
      var minutesUntilClose = close - minutes;
      if (minutesUntilClose <= 90) {
        var hrs = Math.floor(minutesUntilClose / 60);
        var mins = minutesUntilClose % 60;
        var msg = hrs > 0 ? hrs + ' hr ' + mins + ' min' : mins + ' min';
        liveText.textContent = 'Open now · closes in ' + msg + '.';
      } else {
        liveText.textContent = 'Open now · until 11 PM tonight.';
      }
    } else {
      liveDot.className = 'dot dot-closed';
      if (minutes < open) {
        liveText.textContent = 'Closed · opens at 8:30 AM today.';
      } else {
        liveText.textContent = 'Closed · opens at 8:30 AM tomorrow.';
      }
    }
  }
  syncLiveStatus();
  setInterval(syncLiveStatus, 60 * 1000);

  // --- Reveal on scroll ----------------------------------------------------
  var revealTargets = document.querySelectorAll(
    '.section-head, .detail-list li, .daypart-card, .steps li, .mos, .pull, .visit-info, .visit-map, .faq-item, .footer-grid, .rate-card-frame, .hero-copy'
  );

  function revealInViewport() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    revealTargets.forEach(function (el) {
      if (el.classList.contains('is-visible')) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });
  }

  // Mark above-the-fold targets visible immediately so they render without flash.
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  revealInViewport();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) {
      if (!el.classList.contains('is-visible')) io.observe(el);
    });
  }

  window.addEventListener('scroll', revealInViewport, { passive: true });
  window.addEventListener('resize', revealInViewport);
  // One delayed pass catches anything missed by IO timing.
  setTimeout(revealInViewport, 400);

  // --- Sticky-call hide near final CTA -------------------------------------
  var stickyCall = document.querySelector('.sticky-call');
  var finalSection = document.querySelector('.final-cta');
  if (stickyCall && finalSection) {
    function syncSticky() {
      var rect = finalSection.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var hide = rect.top < vh * 0.85;
      stickyCall.style.opacity = hide ? '0' : '1';
      stickyCall.style.pointerEvents = hide ? 'none' : '';
      stickyCall.style.transform = 'translateX(-50%) translateY(' + (hide ? '8px' : '0') + ')';
    }
    window.addEventListener('scroll', syncSticky, { passive: true });
    window.addEventListener('resize', syncSticky);
    syncSticky();
  }
}());

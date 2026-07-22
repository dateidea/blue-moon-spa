// =============================================================
// Star Spa — small interactions
// =============================================================

// Footer year
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Open / closed indicators in the hero
// Hours: every day, 9am to 11:30pm (America/Los_Angeles)
(function () {
  var meta = document.getElementById('today-hours');
  var pill = document.getElementById('status-pill');
  if (!meta && !pill) return;

  var now = new Date();
  var nowMins = now.getHours() * 60 + now.getMinutes();
  var openMins = 10 * 60;
  var closeMins = 21 * 60 + 30;
  var isOpen = nowMins >= openMins && nowMins < closeMins;

  if (meta) {
    meta.textContent = isOpen ? 'Open now, until 9:30 PM' : 'Closed, opens 10 AM';
    meta.classList.add(isOpen ? 'is-open' : 'is-closed');
  }
  if (pill) {
    var text = pill.querySelector('.status-text');
    if (text) text.textContent = isOpen ? 'Open now, until 9:30 PM' : 'Closed, opens 10 AM tomorrow';
    pill.classList.add(isOpen ? 'is-open' : 'is-closed');
  }

  // Refresh closed-state copy when the day rolls over
  if (!isOpen && pill) {
    var text2 = pill.querySelector('.status-text');
    if (text2) text2.textContent = nowMins < openMins
      ? 'Closed, opens today at 10 AM'
      : 'Closed, opens 10 AM tomorrow';
  }
})();

// Mobile menu toggle
(function () {
  var btn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('m-menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  // Close menu when a link inside is tapped
  menu.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.tagName === 'A') setOpen(false);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) setOpen(false);
  });

  // Reset on resize-up so the menu doesn't get stuck open
  window.addEventListener('resize', function () {
    if (window.innerWidth > 920 && !menu.hidden) setOpen(false);
  });
})();

// Smooth in-page anchors with offset for sticky header (mostly handled by CSS scroll-behavior + scroll-margin)
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function applyOffset() {
    var h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-h', h + 'px');
    var sections = document.querySelectorAll('main section[id]');
    sections.forEach(function (s) { s.style.scrollMarginTop = (h + 12) + 'px'; });
  }
  applyOffset();
  window.addEventListener('resize', applyOffset);
})();

// Hide the bottom sticky-call bar near the footer / final CTA so it doesn't stack with the in-page CTAs
(function () {
  var bar = document.querySelector('.sticky-call');
  var finalCta = document.querySelector('.final-cta');
  if (!bar || !finalCta) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        bar.style.transform = 'translateY(120%)';
        bar.style.opacity = '0';
      } else {
        bar.style.transform = '';
        bar.style.opacity = '';
      }
    });
  }, { rootMargin: '0px 0px -40% 0px', threshold: 0 });

  io.observe(finalCta);
})();

// Lightweight call/click telemetry stub — replace with real handler if needed.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[data-call]');
  if (!a) return;
  // Hook for analytics; intentionally a no-op without a provider.
  // window.dataLayer && window.dataLayer.push({ event: 'call_click', source: a.dataset.call });
});

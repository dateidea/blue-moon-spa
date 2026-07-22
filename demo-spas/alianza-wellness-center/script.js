// Alianza Wellness Center. Small interactions, no libraries.

(function () {
  // Year in footer
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Smooth scroll for in-page nav (matches scroll-padding-top via CSS)
  var headerHeight = 76;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  });

  // Sticky call: hide while in hero, show once user scrolls past it
  var stickyCall = document.querySelector('.sticky-call');
  var hero = document.querySelector('.hero');
  if (stickyCall && hero && 'IntersectionObserver' in window) {
    stickyCall.style.transition = 'opacity .25s ease, transform .25s ease';
    stickyCall.style.opacity = '0';
    stickyCall.style.transform = 'translateY(110%)';
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          stickyCall.style.opacity = '0';
          stickyCall.style.transform = 'translateY(110%)';
        } else {
          stickyCall.style.opacity = '1';
          stickyCall.style.transform = 'translateY(0)';
        }
      });
    }, { rootMargin: '-60px 0px 0px 0px' });
    io.observe(hero);
  }

  // Fade-up reveal on scroll
  var revealEls = document.querySelectorAll('.svc-card, .choose-card, .expect-list li, .trust, .review, .gallery figure, .hero-card, .visit-info > *, .visit-map');
  revealEls.forEach(function (el) { el.classList.add('fade-up'); });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var t = i * 60;
          setTimeout(function () { entry.target.classList.add('is-visible'); }, Math.min(t, 240));
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // FAQ accordion: only one open at a time (nicer for scanning)
  var faqDetails = document.querySelectorAll('.faq details');
  faqDetails.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        faqDetails.forEach(function (other) { if (other !== d) other.open = false; });
      }
    });
  });

  // Live "Open" indicator across status bar, header sub, hero panel, and call card.
  var now = new Date();
  var hour = now.getHours();
  var isOpen = (hour >= 9 && hour < 23);
  var openLabel;
  if (isOpen) {
    openLabel = 'Open now until 11pm';
  } else if (hour < 9) {
    openLabel = 'Opens today at 9am';
  } else {
    openLabel = 'Opens tomorrow at 9am';
  }

  // Top status bar
  var statusBarText = document.querySelector('.status-bar-pill-text');
  var statusBarDot = document.querySelector('.status-bar-dot');
  if (statusBarText) statusBarText.textContent = openLabel;
  if (statusBarDot && !isOpen) statusBarDot.classList.add('is-closed');

  // Sticky header sub line
  var headerSubText = document.querySelector('.brand-sub-text');
  var headerStatusDot = document.querySelector('.brand-sub .status-dot');
  if (headerSubText) headerSubText.textContent = '5555 Reservoir Dr Suite 204-A · ' + openLabel;
  if (headerStatusDot && !isOpen) headerStatusDot.classList.add('is-closed');

  // Hero panel phone meta and amber call card subtitle
  var heroPhoneMeta = document.querySelector('.hero-phone-meta');
  if (heroPhoneMeta) {
    heroPhoneMeta.textContent = isOpen
      ? 'Real person at the desk · Open now until 11pm tonight'
      : (hour < 9 ? 'Opens today at 9am · We will be ready' : 'Opens tomorrow at 9am · We will be ready');
  }
  var callCardMeta = document.querySelector('.hero-action-card-meta--call');
  if (callCardMeta) callCardMeta.textContent = openLabel;
})();

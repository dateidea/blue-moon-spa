/* Seasons Massage Spa — minimal client JS
   - Open Now / Closed status (Pacific time, daily 10am – 10pm)
   - Sticky mobile call/directions bar reveal
*/

(function () {
  'use strict';

  /* ---------- Open / Closed status ---------- */
  // Confirmed hours (per public listings): daily 10am – 10pm
  // Business is in San Diego, CA (America/Los_Angeles)

  function getPacificDate() {
    try {
      var nowStr = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
      return new Date(nowStr);
    } catch (e) {
      return new Date(); // fallback to user local
    }
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function fmtTime(h, m) {
    var period = h >= 12 ? 'PM' : 'AM';
    var hh = h % 12; if (hh === 0) hh = 12;
    return hh + (m ? ':' + pad(m) : '') + ' ' + period;
  }

  function updateStatus() {
    var el = document.getElementById('statusIndicator');
    var dot = document.getElementById('statusDot');
    var label = document.getElementById('statusLabel');
    if (!el || !label) return;

    var now = getPacificDate();
    var minutes = now.getHours() * 60 + now.getMinutes();
    var openMin  = 9 * 60 + 30;   // 09:30
    var closeMin = 22 * 60 + 30;  // 22:30
    var soonMin  = 30;            // "closing soon" threshold

    el.classList.remove('is-open', 'is-closed');

    if (minutes >= openMin && minutes < closeMin) {
      el.classList.add('is-open');
      var until = closeMin - minutes;
      if (until <= soonMin) {
        label.innerHTML = 'Closing soon<span class="status__time"> · 10:30 PM</span>';
      } else {
        label.innerHTML = 'Open now<span class="status__time"> · until 10:30 PM</span>';
      }
    } else {
      el.classList.add('is-closed');
      label.innerHTML = 'Closed<span class="status__time"> · opens 9:30 AM</span>';
    }
  }

  /* ---------- Sticky mobile bar + scrolled topbar ---------- */
  function initStickyBar() {
    var bar = document.getElementById('stickyBar');
    var topbar = document.querySelector('.topbar');
    var threshold = 320;
    var topbarThreshold = 8;
    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset;
        if (bar) {
          if (y > threshold) {
            bar.classList.add('is-visible');
            bar.setAttribute('aria-hidden', 'false');
          } else {
            bar.classList.remove('is-visible');
            bar.setAttribute('aria-hidden', 'true');
          }
        }
        if (topbar) {
          topbar.classList.toggle('is-scrolled', y > topbarThreshold);
        }
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Boot ---------- */
  function init() {
    updateStatus();
    setInterval(updateStatus, 60 * 1000); // refresh once a minute
    initStickyBar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* Red Panda Spa — small UI helpers */
(function () {
  "use strict";

  // 1. Sticky header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = -1;
    var update = function () {
      var y = window.scrollY || window.pageYOffset;
      if (y > 8 !== lastY > 8) {
        header.classList.toggle("is-stuck", y > 8);
      }
      lastY = y;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  // 2. Smooth scroll for in-page anchor links — accounts for sticky header height
  var headerEl = document.querySelector(".site-header");
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (!id || id === "#" || id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
    var top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, top);
    } else {
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });

  // 3. Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: reveal everything immediately
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // 4. Highlight today's hours row
  // Hours are the same every day (8:30 AM – 10:00 PM), so we just mark the
  // row matching the current weekday in the contact section.
  try {
    var dayIdx = new Date().getDay(); // 0 = Sun
    var dayKey = ["sun","mon","tue","wed","thu","fri","sat"][dayIdx];
    var todayRow = document.querySelector('.hours-list li[data-day="' + dayKey + '"]');
    if (todayRow) todayRow.classList.add("today");
  } catch (e) {}

  // 5. Update hero "open / closed" status — daily 8:30 AM to 10:00 PM
  try {
    var now = new Date();
    var minutes = now.getHours() * 60 + now.getMinutes();
    var open = (10 * 60);       // 600
    var close = (22 * 60);      // 1320
    var isOpen = minutes >= open && minutes < close;
    var statusEl = document.querySelector("[data-open-status]");
    if (statusEl) {
      if (isOpen) {
        statusEl.textContent = "Open now · until 10:00 PM";
        statusEl.style.color = "";
      } else {
        statusEl.textContent = "Currently closed · opens daily at 10:00 AM";
        statusEl.style.color = "var(--bark)";
      }
    }
    var dot = document.querySelector("[data-open-dot]");
    if (dot && !isOpen) {
      dot.style.background = "var(--bark)";
      dot.style.boxShadow = "0 0 0 4px rgba(107, 74, 47, 0.18)";
    }
  } catch (e) {}

})();

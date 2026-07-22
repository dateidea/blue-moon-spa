/* Happy Spa — small interactions only */
(function () {
  "use strict";

  // ========== Sticky header shadow on scroll ==========
  var header = document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ========== Mobile menu toggle ==========
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeMenu();
      else openMenu();
    });
    menu.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.tagName === "A") closeMenu();
    });
    window.matchMedia("(min-width: 980px)").addEventListener("change", function (m) {
      if (m.matches) closeMenu();
    });
  }

  // ========== Smooth scroll with header offset ==========
  // (Handled mostly by CSS scroll-behavior; we intercept to offset for sticky header.)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerH = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  // ========== Today's hours card (live status) ==========
  // Peaceful Spa is open every day 9:30 AM to 10:00 PM.
  var openPill = document.getElementById("open-pill");
  var openStatus = document.getElementById("open-status");
  var openText = document.getElementById("open-text");
  if (openPill && openText) {
    var now = new Date();
    var minsNow = now.getHours() * 60 + now.getMinutes();
    var openMin = 9 * 60 + 30;   // 09:30
    var closeMin = 22 * 60;      // 22:00
    var isOpen = minsNow >= openMin && minsNow < closeMin;
    if (isOpen) {
      if (openStatus) openStatus.textContent = "Open today";
      openText.textContent = "Until 10:00 PM";
    } else {
      openPill.classList.add("hero-card-closed");
      if (openStatus) openStatus.textContent = "Closed now";
      openText.textContent = "Opens at 9:30 AM";
    }
  }

  // ========== Footer year ==========
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ========== FAQ — close siblings when one opens (single-open accordion) ==========
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

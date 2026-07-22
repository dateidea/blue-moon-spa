/* Unique Foot Massage Spa — small interactions only */
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
    // auto-close when crossing into desktop width
    var mq = window.matchMedia("(min-width: 980px)");
    if (mq.addEventListener) mq.addEventListener("change", function (m) { if (m.matches) closeMenu(); });
    else if (mq.addListener) mq.addListener(function (m) { if (m.matches) closeMenu(); });
  }

  // ========== Smooth scroll with sticky-header offset ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerH = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - headerH - 10;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  // ========== Hero "today" + "open now" status ==========
  // Hours used here mirror the most commonly listed range (10:00–22:00 daily).
  // Copy elsewhere directs people to call to confirm — these are display niceties only.
  var openDot = document.getElementById("open-dot");
  var openStatus = document.getElementById("open-status");
  var openText = document.getElementById("open-text");
  var dayName = document.getElementById("day-name");

  var now = new Date();
  var minsNow = now.getHours() * 60 + now.getMinutes();
  var openMin = 10 * 60;       // 10:00
  var closeMin = 22 * 60;      // 22:00
  var isOpen = minsNow >= openMin && minsNow < closeMin;

  if (openStatus && openText) {
    if (isOpen) {
      openStatus.textContent = "Open today";
      openText.textContent = "Until 10:00 PM";
      if (openDot) openDot.classList.remove("is-closed");
    } else {
      openStatus.textContent = "Currently closed";
      openText.textContent = "Opens at 10:00 AM";
      if (openDot) openDot.classList.add("is-closed");
    }
  }

  if (dayName) {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dayName.textContent = days[now.getDay()];
  }

  // ========== Footer year ==========
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();

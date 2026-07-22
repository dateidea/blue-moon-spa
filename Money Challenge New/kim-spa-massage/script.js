/* Kim Spa massage — small scripts for live status + footer year */

(function () {
  "use strict";

  // 1) Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) Live "Open now / Closed" status
  // Hours are 9 AM - 10 PM, daily. Computed in America/Los_Angeles.
  var statusEl = document.getElementById("open-status");
  var ctaStatusEl = document.getElementById("cta-status");

  function getPacificHourMinute() {
    // Use Intl to read the current hour/minute in LA regardless of visitor TZ.
    try {
      var fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      });
      var parts = fmt.formatToParts(new Date());
      var h = 0, m = 0;
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === "hour") h = parseInt(parts[i].value, 10) || 0;
        if (parts[i].type === "minute") m = parseInt(parts[i].value, 10) || 0;
      }
      // Some locales render hour "24" at midnight — normalize.
      if (h === 24) h = 0;
      return { h: h, m: m };
    } catch (e) {
      // Fall back to local time if Intl/timeZone fails
      var d = new Date();
      return { h: d.getHours(), m: d.getMinutes() };
    }
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function fmtHour(h) {
    var suffix = h >= 12 ? "PM" : "AM";
    var hr = h % 12;
    if (hr === 0) hr = 12;
    return hr + " " + suffix;
  }

  // Header utility hours indicator (small dot + label in the dark strip)
  var utilityDot = document.querySelector("#utility-hours .utility__dot");
  var utilityLabel = document.querySelector("#utility-hours .utility__hours-label");

  function updateStatus() {
    if (!statusEl) return;
    var openHour = parseInt(statusEl.getAttribute("data-open-hour"), 10) || 9;
    var closeHour = parseInt(statusEl.getAttribute("data-close-hour"), 10) || 22;
    var t = getPacificHourMinute();
    var minutesNow = t.h * 60 + t.m;
    var openMin = openHour * 60;
    var closeMin = closeHour * 60;

    var isOpen = minutesNow >= openMin && minutesNow < closeMin;

    statusEl.classList.toggle("is-open", isOpen);
    statusEl.classList.toggle("is-closed", !isOpen);

    if (utilityDot) {
      utilityDot.classList.toggle("is-open", isOpen);
      utilityDot.classList.toggle("is-closed", !isOpen);
    }

    if (isOpen) {
      var minsToClose = closeMin - minutesNow;
      var label = "Open now · until " + fmtHour(closeHour);
      if (minsToClose <= 60) {
        label = "Open now · closes in " + minsToClose + " min";
      }
      statusEl.textContent = label;
      if (utilityLabel) {
        utilityLabel.textContent = "Open now · until " + fmtHour(closeHour);
      }
      if (ctaStatusEl) {
        ctaStatusEl.textContent =
          "Open now until " + fmtHour(closeHour) + " · 4539 College Ave, San Diego";
      }
    } else {
      statusEl.textContent = "Closed · opens " + fmtHour(openHour);
      if (utilityLabel) {
        utilityLabel.textContent = "Closed · opens " + fmtHour(openHour);
      }
      if (ctaStatusEl) {
        ctaStatusEl.textContent =
          "Currently closed · opens " + fmtHour(openHour) + " · 4539 College Ave, San Diego";
      }
    }
  }

  updateStatus();
  // Refresh every minute so the badge stays accurate while the tab stays open.
  setInterval(updateStatus, 60 * 1000);

  // 3) Track tap events for primary CTAs (lightweight, no analytics dep)
  function tag(selector, label) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener("click", function () {
        try {
          // Soft signal — visible in console for owners checking devtools
          // and harmless for end users.
          if (window.console && console.log) {
            console.log("[kim-spa] " + label + " tap");
          }
        } catch (e) {}
      });
    }
  }
  tag('a[href^="tel:"]', "call");
  tag('a[href*="google.com/maps"]', "directions");

  // 4) Smooth-scroll for in-page anchor links (older Safari fallback).
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var j = 0; j < anchors.length; j++) {
    anchors[j].addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id && id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var headerOffset = document.querySelector(".topbar")
            ? document.querySelector(".topbar").getBoundingClientRect().height
            : 0;
          var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      }
    });
  }

  // 5) Scrollspy — highlight nav tab matching the section currently in view.
  var navtabs = document.querySelectorAll(".navtab");
  if (navtabs.length) {
    var sectionMap = {};
    var sections = [];
    for (var k = 0; k < navtabs.length; k++) {
      var id = navtabs[k].getAttribute("data-target");
      var section = id && document.getElementById(id);
      if (section) {
        sectionMap[id] = { tab: navtabs[k], section: section };
        sections.push(section);
      }
    }

    var lastActive = null;
    function applyActive(id) {
      if (id === lastActive) return;
      lastActive = id;
      for (var k = 0; k < navtabs.length; k++) {
        navtabs[k].classList.remove("is-active");
      }
      if (id && sectionMap[id]) {
        sectionMap[id].tab.classList.add("is-active");
      }
    }

    function recomputeActive() {
      // Account for sticky header height — pick the section whose top crossed
      // an offset just below the header.
      var topbar = document.querySelector(".topbar");
      var offset = (topbar ? topbar.getBoundingClientRect().height : 0) + 24;
      var current = null;
      var bestTop = -Infinity;
      for (var k = 0; k < sections.length; k++) {
        var rect = sections[k].getBoundingClientRect();
        // Section must have started entering the viewport above the offset.
        if (rect.top - offset <= 0 && rect.top > bestTop) {
          bestTop = rect.top;
          current = sections[k].id;
        }
      }
      applyActive(current);
    }

    var ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          recomputeActive();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recomputeActive);
    recomputeActive();
  }
})();

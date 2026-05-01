/*
  Method Section Order
  --------------------
  To rearrange sections, change the order of names in SECTION_ORDER below.
  The script reorders DOM elements and auto-alternates dark/light themes.
  Section names match the data-section attribute on each <section>.

  "ux-process" is special — it keeps project--white instead of alternating.
*/

var SECTION_ORDER = [
  "ux-process",
  "journeymap-bloom",
  "ia-marvin",
  "taskflow-microsoft",
  "strategy-shoutmd",
  "persona-shoutmd",
  "journeymap-hackensack",
  "ia-hackensack"
];

var KEEP_WHITE = { "ux-process": true };

(function () {
  var main = document.querySelector("main");
  if (!main) return;

  var sections = {};
  main.querySelectorAll("section[data-section]").forEach(function (el) {
    sections[el.getAttribute("data-section")] = el;
  });

  var themes = ["project--dark", "project--light"];

  SECTION_ORDER.forEach(function (name, i) {
    var el = sections[name];
    if (!el) return;
    el.classList.remove("project--dark", "project--light", "project--white");
    if (KEEP_WHITE[name]) {
      el.classList.add("project--white");
    } else {
      el.classList.add(themes[i % 2]);
    }
    main.appendChild(el);
  });
})();

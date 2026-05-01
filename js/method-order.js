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

function reorderAndThemeSections() {
  var main = document.querySelector("main");
  if (!main) return;

  var sections = {};
  main.querySelectorAll("section[data-section]").forEach(function (el) {
    sections[el.getAttribute("data-section")] = el;
  });

  var themes = ["project--dark", "project--light"];
  var visibleIndex = 0;

  SECTION_ORDER.forEach(function (name) {
    var el = sections[name];
    if (!el) return;

    var isHidden = el.style.display === "none";
    el.classList.remove("project--dark", "project--light", "project--white");

    if (isHidden) {
      main.appendChild(el);
      return;
    }

    if (KEEP_WHITE[name]) {
      el.classList.add("project--white");
    } else {
      el.classList.add(themes[visibleIndex % 2]);
      visibleIndex++;
    }
    main.appendChild(el);
  });
}

reorderAndThemeSections();

/*
  Section Visibility Settings
  ---------------------------
  Desktop-only settings panel to toggle section visibility.
  Persists config to GitHub via Contents API (fine-grained PAT).
  Loaded after the per-page ordering JS on portfolio, method, patterns pages.
*/

var GITHUB_OWNER = "ncoreux";
var GITHUB_REPO = "folio";
var GITHUB_BRANCH = "refr2";
var CONFIG_PATH = "section-config.json";
var PAT_KEY = "ncoreux_folio_pat";

var PAGE_KEY = (function () {
  var path = location.pathname.toLowerCase();
  if (path.indexOf("method") !== -1) return "method";
  if (path.indexOf("pattern") !== -1) return "patterns";
  return "portfolio";
})();

function loadConfig(callback) {
  var url = "https://raw.githubusercontent.com/" + GITHUB_OWNER + "/" + GITHUB_REPO +
    "/" + GITHUB_BRANCH + "/" + CONFIG_PATH + "?t=" + Date.now();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      try { callback(JSON.parse(xhr.responseText)); } catch (e) { callback(null); }
    } else {
      callback(null);
    }
  };
  xhr.onerror = function () { callback(null); };
  xhr.send();
}

function applyVisibility(config) {
  var pageConfig = config && config[PAGE_KEY] ? config[PAGE_KEY] : {};
  var main = document.querySelector("main");
  if (!main) return;

  main.querySelectorAll("section[data-section]").forEach(function (el) {
    var name = el.getAttribute("data-section");
    var visible = pageConfig[name] !== false;
    el.style.display = visible ? "" : "none";
  });

  if (typeof reorderAndThemeSections === "function") {
    reorderAndThemeSections();
  }
}

function getSectionLabel(el) {
  var h2 = el.querySelector(".project__title");
  var h3 = el.querySelector(".project__subtitle");
  var label = h2 ? h2.textContent.trim() : el.getAttribute("data-section");
  if (h3) label += " — " + h3.textContent.trim();
  return label;
}

function getPAT() {
  var pat = localStorage.getItem(PAT_KEY);
  if (!pat) {
    pat = prompt("Enter your GitHub Personal Access Token\n(fine-grained, scoped to ncoreux/folio, Contents: read/write):");
    if (pat) localStorage.setItem(PAT_KEY, pat.trim());
  }
  return pat ? pat.trim() : null;
}

function clearPAT() {
  localStorage.removeItem(PAT_KEY);
}

function saveToGitHub(fullConfig) {
  var statusEl = document.getElementById("sv-status");
  statusEl.textContent = "Saving...";
  statusEl.className = "sv-panel__status";

  var pat = getPAT();
  if (!pat) {
    statusEl.textContent = "Cancelled (no token).";
    return;
  }

  var panel = document.getElementById("sv-panel");
  var checkboxes = panel.querySelectorAll("input[data-sv]");
  if (!fullConfig) fullConfig = {};
  if (!fullConfig[PAGE_KEY]) fullConfig[PAGE_KEY] = {};

  checkboxes.forEach(function (cb) {
    fullConfig[PAGE_KEY][cb.getAttribute("data-sv")] = cb.checked;
  });

  var content = JSON.stringify(fullConfig, null, 2) + "\n";
  var base64Content = btoa(unescape(encodeURIComponent(content)));

  var apiBase = "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO +
    "/contents/" + CONFIG_PATH;

  var xhrGet = new XMLHttpRequest();
  xhrGet.open("GET", apiBase + "?ref=" + GITHUB_BRANCH);
  xhrGet.setRequestHeader("Authorization", "Bearer " + pat);
  xhrGet.setRequestHeader("Accept", "application/vnd.github.v3+json");
  xhrGet.onload = function () {
    var sha = "";
    if (xhrGet.status === 200) {
      try { sha = JSON.parse(xhrGet.responseText).sha; } catch (e) {}
    }

    var payload = {
      message: "Update section visibility config",
      content: base64Content,
      branch: GITHUB_BRANCH
    };
    if (sha) payload.sha = sha;

    var xhrPut = new XMLHttpRequest();
    xhrPut.open("PUT", apiBase);
    xhrPut.setRequestHeader("Authorization", "Bearer " + pat);
    xhrPut.setRequestHeader("Accept", "application/vnd.github.v3+json");
    xhrPut.setRequestHeader("Content-Type", "application/json");
    xhrPut.onload = function () {
      if (xhrPut.status === 200 || xhrPut.status === 201) {
        statusEl.textContent = "Saved!";
        statusEl.className = "sv-panel__status sv-panel__status--success";
      } else if (xhrPut.status === 401 || xhrPut.status === 403) {
        statusEl.textContent = "Auth failed. Token cleared — try again.";
        statusEl.className = "sv-panel__status sv-panel__status--error";
        clearPAT();
      } else {
        statusEl.textContent = "Error " + xhrPut.status;
        statusEl.className = "sv-panel__status sv-panel__status--error";
      }
    };
    xhrPut.onerror = function () {
      statusEl.textContent = "Network error.";
      statusEl.className = "sv-panel__status sv-panel__status--error";
    };
    xhrPut.send(JSON.stringify(payload));
  };
  xhrGet.onerror = function () {
    statusEl.textContent = "Network error.";
    statusEl.className = "sv-panel__status sv-panel__status--error";
  };
  xhrGet.send();
}

function buildPanel(config) {
  if (window.innerWidth <= 768) return;

  var pageConfig = config && config[PAGE_KEY] ? config[PAGE_KEY] : {};
  var main = document.querySelector("main");
  if (!main) return;

  var gear = document.createElement("div");
  gear.id = "sv-gear";
  gear.className = "sv-gear";
  gear.innerHTML = "&#9881;";
  gear.title = "Section visibility settings";
  document.body.appendChild(gear);

  var panel = document.createElement("div");
  panel.id = "sv-panel";
  panel.className = "sv-panel";

  var headerHTML = '<div class="sv-panel__header">' +
    '<span class="sv-panel__title">Sections</span>' +
    '<button id="sv-close" class="sv-panel__close">&times;</button>' +
    '</div>';

  var listHTML = '<div class="sv-panel__list">';
  SECTION_ORDER.forEach(function (name) {
    var el = main.querySelector('section[data-section="' + name + '"]');
    if (!el) return;
    var checked = pageConfig[name] !== false ? "checked" : "";
    var label = getSectionLabel(el);
    listHTML += '<label class="sv-toggle">' +
      '<input type="checkbox" data-sv="' + name + '" ' + checked + '>' +
      '<span class="sv-toggle__label">' + label + '</span>' +
      '</label>';
  });
  listHTML += '</div>';

  var footerHTML = '<div class="sv-panel__footer">' +
    '<button id="sv-save" class="sv-panel__save">Save to GitHub</button>' +
    '<div id="sv-status" class="sv-panel__status"></div>' +
    '</div>';

  panel.innerHTML = headerHTML + listHTML + footerHTML;
  document.body.appendChild(panel);

  gear.addEventListener("click", function () {
    panel.classList.toggle("sv-panel--open");
  });

  panel.querySelector("#sv-close").addEventListener("click", function () {
    panel.classList.remove("sv-panel--open");
  });

  panel.querySelectorAll("input[data-sv]").forEach(function (cb) {
    cb.addEventListener("change", function () {
      var secName = cb.getAttribute("data-sv");
      var secEl = main.querySelector('section[data-section="' + secName + '"]');
      if (secEl) {
        secEl.style.display = cb.checked ? "" : "none";
        reorderAndThemeSections();
      }
    });
  });

  panel.querySelector("#sv-save").addEventListener("click", function () {
    saveToGitHub(config);
  });
}

(function () {
  loadConfig(function (config) {
    window._sectionConfig = config || {};
    applyVisibility(window._sectionConfig);
    buildPanel(window._sectionConfig);
  });
})();

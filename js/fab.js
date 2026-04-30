(function () {
  var fab = document.querySelector('.fab');
  if (!fab) return;

  var trigger = fab.querySelector('.fab__trigger');
  var collapseTimer = null;
  var scrollTimer = null;
  var COLLAPSE_DELAY = 5000;
  var SCROLL_RESHOW = 1000;
  var SCROLL_THRESHOLD = 0.7;

  function getScrollPercent() {
    var h = document.documentElement;
    var scrollTop = h.scrollTop || document.body.scrollTop;
    var scrollHeight = h.scrollHeight - h.clientHeight;
    return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  }

  function showIfPastThreshold() {
    if (getScrollPercent() >= SCROLL_THRESHOLD) {
      fab.classList.add('fab--visible');
    }
  }

  function startCollapseTimer() {
    clearTimeout(collapseTimer);
    collapseTimer = setTimeout(function () {
      fab.classList.remove('fab--open');
    }, COLLAPSE_DELAY);
  }

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    clearTimeout(collapseTimer);
    fab.classList.toggle('fab--open');
    if (fab.classList.contains('fab--open')) {
      startCollapseTimer();
    }
  });

  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target)) {
      fab.classList.remove('fab--open');
      clearTimeout(collapseTimer);
    }
  });

  window.addEventListener('scroll', function () {
    fab.classList.remove('fab--open');
    fab.classList.remove('fab--visible');
    clearTimeout(collapseTimer);
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(showIfPastThreshold, SCROLL_RESHOW);
  }, { passive: true });
})();

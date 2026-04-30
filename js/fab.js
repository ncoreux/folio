(function () {
  var fab = document.querySelector('.fab');
  if (!fab) return;

  var trigger = fab.querySelector('.fab__trigger');
  var timer = null;
  var DELAY = 5000;

  function show() {
    fab.classList.add('fab--visible');
  }

  function hide() {
    fab.classList.remove('fab--visible');
    fab.classList.remove('fab--open');
  }

  function resetTimer() {
    hide();
    clearTimeout(timer);
    timer = setTimeout(show, DELAY);
  }

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    fab.classList.toggle('fab--open');
  });

  document.addEventListener('click', function () {
    fab.classList.remove('fab--open');
  });

  ['mousemove', 'scroll', 'keydown', 'touchstart'].forEach(function (evt) {
    document.addEventListener(evt, resetTimer, { passive: true });
  });

  timer = setTimeout(show, DELAY);
})();

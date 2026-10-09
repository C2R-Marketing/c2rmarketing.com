// C2R Marketing draft site — mobile nav toggle only. No tracking, no frameworks.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu when a nav link is chosen (mobile).
  list.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

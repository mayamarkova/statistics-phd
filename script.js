
(function () {
  var menuBtn = document.getElementById('menuBtn');
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('backdrop');

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  if (menuBtn && sidebar && backdrop) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.add('open');
      backdrop.classList.add('open');
    });
    backdrop.addEventListener('click', closeSidebar);
    var navLinks = sidebar.querySelectorAll('a');
    Array.prototype.forEach.call(navLinks, function (link) {
      link.addEventListener('click', closeSidebar);
    });
  }

  var searchInput = document.getElementById('dictionarySearch');
  var cards = document.querySelectorAll('.term-card');
  var empty = document.getElementById('dictionaryEmpty');
  if (searchInput && cards.length) {
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      var visible = 0;
      Array.prototype.forEach.call(cards, function (card) {
        var hay = (card.getAttribute('data-search') || '').toLowerCase();
        var show = !q || hay.indexOf(q) !== -1;
        card.style.display = show ? '' : 'none';
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }
})();

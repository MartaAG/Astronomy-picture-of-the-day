(function () {
  const appEl = document.getElementById("app");

  document.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    appEl.innerHTML = '';
    MyApp.getPlanets(e.target.elements['query'].value)
  })
}())

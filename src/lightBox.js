MyApp.lightBox = function(e) {

  const appEl = document.getElementById("app");

  let img = MyApp.createNode('img');

  img.src = e.target.src;
  img.className = 'lightbox';

  img.addEventListener('click', () => {
    appEl.removeChild(img);
  });

  MyApp.append(appEl, img)
}

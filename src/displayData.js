MyApp.displayData = function(data) {
  // if(!Array.isArray(d)) {
  //   return;
  // }

  const appEl = document.getElementById("app");

  data.forEach(planet => {
    let article = MyApp.createNode("article");
    let h2 = MyApp.createNode('h2');
    let p = MyApp.createNode('p');
    let img;
    let iframe;

    if (planet.media_type === 'video') {
      iframe = MyApp.createNode('iframe');
      iframe.src = planet.url;
    } else {
      img = MyApp.createNode('img');
      img.src = planet.url;
      img.addEventListener('click', MyApp.lightBox);
    }

    h2.innerHTML = `${planet.title}`;
    const content = MyApp.createNode('span');
    content.innerHTML = `${planet.description}`;
    content.className = 'content';

    const more = MyApp.createNode('span');
    more.className = "more";
    more.innerHTML = "More...";
    MyApp.append(p, content);
    MyApp.append(p, more);

    MyApp.append(article, h2);
    MyApp.append(article, p)

    if(planet.media_type !== 'video') {
      MyApp.append(article, img);
    } else {
      MyApp.append(article, iframe);
    }
    MyApp.append(appEl, article);
    MyApp.shortenedText(p);

    let favSpan = MyApp.createNode('span');
    favSpan.innerHTML = "*";
    favSpan.className = "favourite";
    MyApp.append(article, favSpan);

    favSpan.addEventListener('click', favStar);

    function favStar() {
      let locStor = localStorage.getItem(planet.url) === "true" ? true : false;
      locStor = !locStor;
      localStorage.setItem(planet.url, locStor);

      updateStar(locStor);
    }

    function updateStar(state) {
      if (state) {
        favSpan.style.backgroundColor = 'pink';
      } else {
        favSpan.style.backgroundColor = 'green';
      }
    }
    let locStor = localStorage.getItem(planet.url) === "true" ? true : false;
    updateStar(locStor);
  });
}

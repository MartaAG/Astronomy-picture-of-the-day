MyApp.shortenedText = function(text) {
    text.classList.add('short');
    text.addEventListener('click', () => {
      text.classList.remove('short');
    });
}

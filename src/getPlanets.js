MyApp.getPlanets = async function(x) {
  const nasaUrl = "https://apodapi.herokuapp.com/search/?number=5&search_query=";
  let fetchLink = await fetch (nasaUrl + x);
  let data = await fetchLink.json();

  console.log(data);
  MyApp.displayData(data)
}

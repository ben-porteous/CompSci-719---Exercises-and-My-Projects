window.addEventListener("load", function () {
  // TODO Add JavaScript code so that when the user clicks one of the Pokemon buttons,
  // detailed data about that Pokemon will be loaded from your own API, and displayed
  // in the appropriate place on the HTML page (overwriting any data which was already
  // there).

  const pokemonButtons = document.querySelectorAll(".buttons");
  const detailsContainer = document.querySelector("#detailsContainer");

  pokemonButtons.forEach(async function (button) {
    const pokemonString = await fetch(`./api/pokemon/${button.id}`);
    const pokemonJson = await pokemonString.json();
    button.addEventListener("click", function () {
      loadPokemonDetails(pokemonJson);
      clearClass()
      button.classList.add("selected");
    });
  });


  function loadPokemonDetails(pokemonJson) {
    detailsContainer.innerHTML = `
    <h1>Details</h1>
    <img src="${pokemonJson.imageUrl}">
    <h1># ${pokemonJson.dexNumber} ${pokemonJson.name}</h1>
    <p><strong>Types:</strong> ${pokemonJson.types}</p>
    <p><strong>About ${pokemonJson.name}:</strong> ${pokemonJson.dexEntry}</p>
    `
  };

  function clearClass() {
    const selected = document.querySelectorAll(".selected");
    selected.forEach(function(element) {
      element.classList.remove("selected");
    })
  }


});


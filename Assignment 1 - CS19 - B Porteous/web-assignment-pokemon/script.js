window.addEventListener("load", function () {

    //Variables from HTML:
    const lsidebar = document.querySelector("#lsidebar");
    const pokemonDataHeading = document.querySelector("#pokemon-data");
    const pokemonDetailsHeading = document.querySelector("#pokemon-details")
    const content = document.querySelector("#content")
    const pokemonImage = document.querySelector("#pokemon-image")
    const pokemonNumber = document.querySelector("#pokemon-number")
    const pokemonDescription = document.querySelector("#pokemon-description")


    //function to fetch of list of all pokemon and list on website
    async function getAllPokemon() {
        const allPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon`);
        const allPokemonJson = await allPokemonString.json();
        allPokemonJson.forEach(function (pokemon) {
            const pokemonName = pokemon.name;
            lsidebar.innerHTML += `<p>${pokemonName}</p>`
        })
    }

    //function to load & show indiv pokemon's data into the site:
    async function loadPokemonData (pokemon) {
        const specificPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${pokemon}`);
        const specificPokemonJson = await specificPokemonString.json();

        pokemonDataHeading.innerText += ` ${specificPokemonJson.name}`;
        pokemonDetailsHeading.innerText += ` ${specificPokemonJson.name}`;
        pokemonNumber.innerText += ` ${specificPokemonJson.dexNumber}`;
        pokemonDescription.innerText += ` ${specificPokemonJson.dexEntry}`;
        pokemonImage.setAttribute("src", `${specificPokemonJson.imageUrl}`);
    }

    //function to get random pokemon's data - is this needed, or just load once page loaded?????
    async function getRandomPokemon() {
        const randomPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/random`);
        const randomPokemonJson = await randomPokemonString.json();
        const randomDex = await randomPokemonJson.dexNumber;
        loadPokemonData(randomDex);
    }





    getAllPokemon();
    getRandomPokemon();
    // loadPokemonData(123);

});

//
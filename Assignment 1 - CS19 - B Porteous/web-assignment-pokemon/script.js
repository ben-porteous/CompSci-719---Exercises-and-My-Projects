window.addEventListener("load", async function () {

    //Variables from HTML:
    const lsidebar = document.querySelector("#lsidebar");
    const pokemonDataHeading = document.querySelector("#pokemon-data");
    const pokemonDataTypes = document.querySelector("#pokemon-data-types")
    const pokemonDetailsHeading = document.querySelector("#pokemon-details")
    const content = document.querySelector("#content")
    const pokemonImage = document.querySelector("#pokemon-image")
    const pokemonNumber = document.querySelector("#pokemon-number")
    const pokemonDescription = document.querySelector("#pokemon-description")
    // const allPokemonTitle = document.querySelector("#all-pokemon-title")


    // //function to fetch of list of all pokemon and list on website
    // async function getAllPokemon() {
    //     const allPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon`);
    //     const allPokemonJson = await allPokemonString.json();
    //     allPokemonJson.forEach(function (pokemon) {
    //         const pokemonName = pokemon.name;
    //         const newPokemonPara = document.createElement("p")
    //         newPokemonPara.innerText = `${pokemonName}`
    //         newPokemonPara.setAttribute("id", `id-${i}`)
    //         newPokemonPara.classList.add("pokemonList");
    //         allPokemonTitle.appendChild(newPokemonPara);
    //         newPokemonPara.addEventListener("click", async function(){
    //             await loadPokemonData(`${pokemon.dexNumber}`)
    //         })
    //         i++ ;
    //     }) 
    // }


    //function to fetch of list of all pokemon and list on website
    async function getAllPokemon() {
        const allPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon`);
        const allPokemonJson = await allPokemonString.json();
        allPokemonJson.forEach(loadAllPokemon)
    }

    function loadAllPokemon(pokemon) {
        const pokemonName = pokemon.name;
        const newPokemonPara = document.createElement("p")
        newPokemonPara.innerText = pokemonName
        // newPokemonPara.setAttribute("id", `id-${pokemon.dexNumber}`) // potentially remove, unless needed?
        // newPokemonPara.classList.add("pokemonList"); // potentially remove, unless needed?
        lsidebar.appendChild(newPokemonPara);
        newPokemonPara.addEventListener("click", async function () {
            await loadPokemonData(pokemon.dexNumber)
        })
    }






    //function to load & show an individ's pokemon's data into the site:
    async function loadPokemonData(pokemon) {
        const specificPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${pokemon}`);
        const specificPokemonJson = await specificPokemonString.json();
        pokemonDataHeading.innerHTML = `Pokemon Type Data for ${specificPokemonJson.name}`;
        pokemonDetailsHeading.innerText = `Pokemon Details for ${specificPokemonJson.name}`;
        pokemonNumber.innerText = `Pokedex Number: ${specificPokemonJson.dexNumber}`;
        pokemonDescription.innerText = specificPokemonJson.dexEntry;
        pokemonImage.setAttribute("src", specificPokemonJson.imageUrl);
        pokemonDataTypes.innerHTML = specificPokemonJson.types.reduce(function (acc, current) {
            return acc + ", " + current;
        });
    }


    //function to get and load random pokemon's data
    async function getRandomPokemon() {
        const randomPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/random`);
        const randomPokemonJson = await randomPokemonString.json();
        const randomDex = await randomPokemonJson.dexNumber;
        loadPokemonData(randomDex);
    }


    await getAllPokemon();
    await getRandomPokemon();





    //Get Type Data for a pokemon and load it
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${i.types}
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/types/:typeName

});

//
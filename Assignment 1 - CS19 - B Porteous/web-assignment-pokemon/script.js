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
    const offence = document.querySelector("#offence")
    const defence = document.querySelector("#defence")



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
        lsidebar.appendChild(newPokemonPara);
        newPokemonPara.addEventListener("click", async function () {
            await loadPokemonData(pokemon.dexNumber)
        })
    }

    //function to get and load random pokemon's data 
    async function getRandomPokemon() {
        const randomPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/random`);
        const randomPokemonJson = await randomPokemonString.json();
        const randomDex = await randomPokemonJson.dexNumber;
        loadPokemonData(randomDex);
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
        specificPokemonJson.types.forEach(pokemonTypeFunction)
    };





    await getAllPokemon();
    await getRandomPokemon();






    //function to make a table
    function tableCreator(subheading1, subheading2) {
        const table = document.createElement("table")
        const tableRow = document.createElement("tr")
        const tableCell1 = document.createElement("td")
        const tableCell2 = document.createElement("td")
        const tableCell3 = document.createElement("td")
        const tableCell4 = document.createElement("td")

        table.appendChild(tableRow)
        tableRow.appendChild(tableCell1)
        tableRow.appendChild(tableCell2)
        tableCell1.innerHTML = subheading1
        tableCell2.innerHTML = subheading2

    }



    //Get Type Data for a pokemon and load it
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${type}
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/types/${type}

    //https://cs719-a01-pt-server.trex-sandwich.com/api/types/grass

// let t = 0
    async function pokemonTypeFunction(type) {
        offence.innerHTML += tableCreator(`${type} attacks`, `${type} attackers`)
        

    }
        //The headings need to be: "Defending type" "Damage Dealt"

//         pokeTypeDataString = await fetch(`https:cs719-a01-pt-server.trex-sandwich.com/api/types/${type}`) // website for individual types. in site is .offenceM[type].
//         pokeTypeDataJson = await pokeTypeDataString.json()
//         console.log(pokeTypeDataJson)
//         tableData.innerHTML = `${type} type attacks:`
//         //Works up to here//



        // tableData.innerHTML = `
        // <td> ${pokeTypeDataJson}.offenceDamageMultipliers[${t}].type </td>
        // <td> ${pokeTypeDataJson}.offenceDamageMultipliers[${t}].multiplier </td>
        // `

    // };
// });

//add ; to the end of each line

// const li = fragment
//   .appendChild(document.createElement("section"))
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li"));
// li.textContent = "hello world";


// const offenceTable = fragment
// .appendChild(document.createElement("table"))
// .appendChild(document.createElement("tr"))
// .appendChild(document.createElement("td"))
// td.textContent


})
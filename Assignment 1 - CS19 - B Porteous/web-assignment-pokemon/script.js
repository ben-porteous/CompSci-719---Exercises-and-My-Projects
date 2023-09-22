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
    let a = 0


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
        offence.innerHTML = "<p>On Offense:</p>"
        specificPokemonJson.types.forEach(pokemonTypeFunction)
    };





    await getAllPokemon();
    await getRandomPokemon();






    async function pokemonTypeFunction(type) {
        const typeDataString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/types/${type}`)
        const typeDataJson = await typeDataString.json()
        console.log(typeDataJson)
        console.log(type)
        let i = 0
        console.log(typeDataJson.offenseDamageMultipliers)
        const table = createTable(`${type} type attacks`, "Defending Type:", "Damage Dealt:", offence);
        let t = 0
        typeDataJson.offenseDamageMultipliers.forEach(function() {

            table.innerHTML +=
            `<tr>
                <td>${typeDataJson.offenseDamageMultipliers[t].type}</td>
                <td>${typeDataJson.offenseDamageMultipliers[t].multiplier}</td>
            </tr>`
            t++
        })
    }





    

    function createTable(header, subt1, subt2, parent) {
        const table = document.createElement("table")
        table.classList.add("tables")
        const tableHeaderRow = document.createElement("tr")
        const tableHeader = document.createElement("th")
        tableHeader.setAttribute("colspan", 2)
        const tableRow1 = document.createElement("tr")
        const tableCell1 = document.createElement("td")
        const tableCell2 = document.createElement("td")
        const tableRow2 = document.createElement("tr")
        table.setAttribute("id", `table-row-${a}`)


        parent.appendChild(table)
        table.appendChild(tableHeaderRow)
        tableHeaderRow.appendChild(tableHeader)
        table.appendChild(tableRow1)
        tableRow1.appendChild(tableCell1)
        tableRow1.appendChild(tableCell2)
        table.appendChild(tableRow2)

        tableHeader.innerHTML = header;
        tableCell1.innerText = subt1;
        tableCell2.innerText = subt2;



        return table;

    }


    ////////FROM HERE ALL IS WORK IN PROGRESS




    //Get Type Data for a pokemon and load it
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${type}
    //    https://cs719-a01-pt-server.trex-sandwich.com/api/types/${type}

    //https://cs719-a01-pt-server.trex-sandwich.com/api/types/grass

    // let t = 0
    // async function pokemonTypeFunction(type) {
    //     const typeDataString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/types/${type}`)
    //     const typeDataJson = await typeDataString.json()
    //     const table = document.createElement("table")
    //     const tableRow1 = document.createElement("tr")
    //     const tableCell1 = document.createElement("td")
    //     const tableCell2 = document.createElement("td")
    //     const tableRow2 = document.createElement("tr")
    //     const tableHeader = document.createElement("th")
    //     offence.appendChild(table)
    //     table.appendChild(tableHeader)
    //     table.appendChild(tableRow1)
    //     tableRow1.appendChild(tableCell1)
    //     tableRow1.appendChild(tableCell2)
    //     tableHeader.innerHTML = `${type} type attacks`
    //     tableCell1.innerHTML = "Defending Type:"
    //     tableCell2.innerHTML = "Damage Dealt"
    //     table.appendChild(tableRow2)
    //     console.log(typeDataJson)
    //     console.log(typeDataJson.offenseDamageMultipliers)

    //     tableRow2.innerHTML += `<td>${typeDataJson.offenseDamageMultipliers[0].type}</td>` //errors!
    //     tableRow2.innerHTML += `<td>${typeDataJson.offenseDamageMultipliers[0].multiplier}</td>` // errors!
    // }
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

})






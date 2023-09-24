window.addEventListener("load", async function () {

    //Variables from HTML:
    const lsidebar = document.querySelector("#lsidebar");
    const pokemonDataHeading = document.querySelector("#pokemon-data");
    const pokemonDataTypes = document.querySelector("#pokemon-data-types");
    const pokemonDetailsHeading = document.querySelector("#pokemon-details");
    const pokemonImage = document.querySelector("#pokemon-image");
    const pokemonNumber = document.querySelector("#pokemon-number");
    const pokemonDescription = document.querySelector("#pokemon-description");
    const offence = document.querySelector("#offence");
    const defense = document.querySelector("#defense");


    //function to fetch of list of all pokemon and list on website
    async function getAllPokemon() {
        const allPokemonString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon`);
        const allPokemonJson = await allPokemonString.json();
        allPokemonJson.forEach(loadAllPokemon);
    }

    function loadAllPokemon(pokemon) {
        const pokemonName = pokemon.name;
        const newPokemonPara = document.createElement("p");
        newPokemonPara.innerText = pokemonName;
        lsidebar.appendChild(newPokemonPara);
        newPokemonPara.addEventListener("click", async function () {
            await loadPokemonData(pokemon.dexNumber);
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
        offence.innerHTML = "<p>On Offense:</p>";
        defense.innerHTML = "<p>On Defense</p>";
        specificPokemonJson.types.forEach(loadPokemonOffense);
        loadPokemonDefense(pokemon);
    };



    //Function to load defence info and include in a table
    async function loadPokemonOffense(type) {
        const typeDataString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/types/${type}`);
        const typeDataJson = await typeDataString.json();
        const table = createTable(`${type} type attacks`, "Defending Type:", "Damage Dealt:", offence);
        let t = 0;
        typeDataJson.offenseDamageMultipliers.forEach(function () {
            let damage = convertDamageMultipliers(typeDataJson.offenseDamageMultipliers[t].multiplier);
            table.innerHTML +=
                `<tr>
                <td>${typeDataJson.offenseDamageMultipliers[t].type}</td>
                <td>${damage}</td>
            </tr>`
            t++
        })
    }

    async function loadPokemonDefense(pokemon) {
        const defenseString = await fetch(`https://cs719-a01-pt-server.trex-sandwich.com/api/pokemon/${pokemon}/defense-profile`)
        const defenseJson = await defenseString.json();
        const table = createTable(undefined, "Attacking Type", "Damage Received", defense)
        let t = 0
        defenseJson.forEach(function () {
            let damage = convertDamageMultipliers(defenseJson[t].multiplier)
            table.innerHTML +=
                `<tr>
                    <td>${defenseJson[t].type}</td>
                    <td>${damage}</td>
                </tr>`
            t++
        })
    }
    // The code is taking a variable and then 
    function convertDamageMultipliers(item) {
        if (item == 0) {
            damage = "No Damage";
        } else if (item == 0.25) {
            damage = "Quarter Damage";
        } else if (item == 0.5) {
            damage = "Half Damage";
        } else if (item == 1) {
            damage = "Normal Damage";
        } else if (item == 2) {
            damage = "Double Damage";
        } else if (item == 4) {
            damage = "Quadruple Damage";
        }
        return damage;
    }



    //Function to create a table
    function createTable(header, subt1, subt2, parent) {
        const table = document.createElement("table")
        table.classList.add("tables")
        const tableHeaderRow = document.createElement("tr")
        const tableHeader = document.createElement("th")
        tableHeader.setAttribute("colspan", 2)
        const tableRow1 = document.createElement("tr")
        const tableCell1 = document.createElement("th")
        const tableCell2 = document.createElement("th")
        const tableRow2 = document.createElement("tr")
        table.setAttribute("id", `table-row-${a}`)

        parent.appendChild(table)
        table.appendChild(tableHeaderRow)
        tableHeaderRow.appendChild(tableHeader)
        table.appendChild(tableRow1)
        tableRow1.appendChild(tableCell1)
        tableRow1.appendChild(tableCell2)
        table.appendChild(tableRow2)

        tableCell1.innerText = subt1;
        tableCell2.innerText = subt2;

        if (header) {
            tableHeader.innerHTML = header;
        }

        return table;
    }


    await getAllPokemon();
    await getRandomPokemon();

})
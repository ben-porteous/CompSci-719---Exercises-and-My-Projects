window.addEventListener("load", function () {
  // TODO Add JavaScript code so that when the user clicks one of the Pokemon buttons,
  // detailed data about that Pokemon will be loaded from your own API, and displayed
  // in the appropriate place on the HTML page (overwriting any data which was already
  // there).

  const pokemonButtons = document.querySelectorAll(".buttons")
  const detailsContainer = document.querySelector("#detailsContainer")
  let dex = 1

  pokemonButtons.forEach(function(button) {
    button.addEventListener("click", async function(){
     const pokemonString = await fetch(`./api/pokemon/1`)
     const pokemonJson = await pokemonString.json()
      // loadPokemonDetails(pokemonJson)
      console.log(pokemonJson)
    })
    dex++
  })


  function loadPokemonDetails(pokemon){
    console.log("to be completed")
    // detailsContainer.innerHTML = `
    // // <h1>Details</h1>
    // // {{! TODO Display info about a single Pokemon here. }}
    // // <img src="{{openingPokemonImage}}">
    // // <h1>#{{openingPokemonNumber}} {{openingPokemonName}}</h1>
    // // <p><strong>Types:</strong> {{openingPokemonTypes}}</p>
    // // <p><strong>About {{openingPokemonName}}:</strong> {{openingPokemonAbout}}</p>
    // // `
  }
})

//   }

//   // pokemonButtons.addEventListener("click", function() {
//   //   console.log("Your Button Works!")
//   // })

// });

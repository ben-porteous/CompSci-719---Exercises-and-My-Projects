window.addEventListener("load", function () {
  // TODO Add JavaScript code so that when the user clicks one of the Pokemon buttons,
  // detailed data about that Pokemon will be loaded from your own API, and displayed
  // in the appropriate place on the HTML page (overwriting any data which was already
  // there).

  const pokemonButtons = document.querySelectorAll(".buttons")

  pokemonButtons.forEach(function(button) {
    button.addEventListener("click", function(){
      console.log("Button successful")
    })
  })
})

//   }

//   // pokemonButtons.addEventListener("click", function() {
//   //   console.log("Your Button Works!")
//   // })

// });

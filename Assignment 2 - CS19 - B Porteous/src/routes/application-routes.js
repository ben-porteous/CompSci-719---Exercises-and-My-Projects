const express = require("express");
const { getAllPokemon } = require("../db/pokemon-db");
const router = express.Router();

router.get("/", function (req, res) {
  // TODO Add necessary data to res.locals before rendering the "home" page.
  const pokemon = getAllPokemon();

  res.locals.pokemon = pokemon;
  res.locals.openingPokemonImage = pokemon[57].imageUrl;
  res.locals.openingPokemonNumber = pokemon[57].dexNumber;
  res.locals.openingPokemonName = pokemon[57].name;
  res.locals.openingPokemonTypes = pokemon[57].types;
  res.locals.openingPokemonAbout = pokemon[57].dexEntry;

  res.render("home");
});

router.get("/dexSearch", async function(req, res) {
  const dexNumber = req.query.newPokemonDex
  const pokemonString = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNumber}`)
  const pokemonJson = await pokemonString.json()
  const types = []
  pokemonJson.types.forEach(function(type) {
      types.push(type.type.name)
  })
  const requiredPokemonJson = {
    dexNumber: dexNumber,
    name: `${pokemonJson.species.name}`,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${dexNumber}.png`,
    smallImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNumber}.png`,
    types: `${types}`
  }
  
  res.json(requiredPokemonJson)
  //Need to amend route handler to append requiredPokemonJson to pokemon.json file
})

module.exports = router;

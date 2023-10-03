const express = require("express");
const { getAllPokemon } = require("../db/pokemon-db");
const router = express.Router();

router.get("/", function (req, res) {
  // TODO Add necessary data to res.locals before rendering the "home" page.
  const pokemon = getAllPokemon()

  res.locals.pokemon = pokemon
  res.locals.openingPokemonImage = pokemon[57].imageUrl
  res.render("home");
});

module.exports = router;

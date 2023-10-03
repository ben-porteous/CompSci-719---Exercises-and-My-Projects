const express = require("express");
const { getAllPokemon } = require("../db/pokemon-db");
const router = express.Router();

router.get("/", function (req, res) {
  // TODO Add necessary data to res.locals before rendering the "home" page.
  res.locals.pokemon = getAllPokemon() //currently 'object object'

  res.render("home");
});

module.exports = router;

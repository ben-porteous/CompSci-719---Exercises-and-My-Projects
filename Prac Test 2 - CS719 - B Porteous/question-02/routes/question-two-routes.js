// Setup express router
const express = require("express");
const router = express.Router();

// Route handlers
// -------------------------------------------------------------------------

// TODO Your Code Here
router.get("/", function (req, res) {
    res.locals.name = "Home"
    res.locals.homePage = "home"
    res.render("home")
})

router.get("/hillary", function (req, res) {
    res.locals.name = "Edmund Hillary"
    res.render("hillary")
})

router.get("/sheppard", function (req, res) {
    res.locals.name = "Kate Sheppard"
    res.render("sheppard")
})

// -------------------------------------------------------------------------

module.exports = router;
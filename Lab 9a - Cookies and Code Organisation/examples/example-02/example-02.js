// Setup Express
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Setup fs
const fs = require("fs");

// Setup body-parser
app.use(express.urlencoded({ extended: false }));

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Make the "public" folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// When navigating to "/", show the homepage. Also update the hit counter.
app.get("/", function (req, res) {

    // Get the "hitCounter" cookie
    let hitCounter = req.cookies.hitCounter;

    // If it didn't exist, create the initial one.
    if (!hitCounter) {
        hitCounter = { hits: 1 };
    }

    // Otherwise, update the existing one.
    else {
        hitCounter.hits++;
    }

    // Send the updated cookie back to the client in the response
    res.cookie("hitCounter", hitCounter);

    // Also add it to res.locals so we can display the number on the home view
    res.locals.hits = hitCounter.hits;

    res.render("home");
});

// When we GET /resetHitCounter, we delete the hitCounter cookie and return to the homepage.
app.get("/resetHitCounter", function (req, res) {
    res.clearCookie("hitCounter");
    res.redirect("/");
})

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
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
app.use(express.urlencoded({extended: false}));

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Make the "public" folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// TODO For Exercise Six, this would be a good place to require() and use your custom routers and middleware.

// When navigating to "/", show the homepage.
app.get("/", function (req, res) {

    // If there is a "toastMessage" in the query string (e.g. .....?toastMessage="Hi"), then add it to
    // res.locals so it will be available to the home view.
    res.locals.toastMessage = req.query.toastMessage;

    res.render("home");
});

// TODO Handle "add cookie" form submission
app.get("/addCookie", function(req, res) {

});

// TODO Handle "remove cookie" form submission
app.get("/removeCookie", function(req, res) {

});

// TODO Handle "get cookie" form submission
app.get("/getCookie", function(req, res) {

});

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
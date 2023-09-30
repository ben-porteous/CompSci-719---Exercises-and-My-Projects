// Import packages, initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing for "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Set up to use the body parser (allows us to read POSTed form data)
app.use(express.urlencoded({ extended: false }));

// TODO Your code here.
app.post("/form", function (req, res) {
    console.log("server responding")
    const userData = {
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    }

    const userResponses = {
        courseThoughts: req.body.thoughts,
        courseExperience: req.body.experience,
        favAnimal: req.body.mammal,
        additionalComments: req.body.comments
    }


    res.json([userData, userResponses])

})



// Start the server running
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

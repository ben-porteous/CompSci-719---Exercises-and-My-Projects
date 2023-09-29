// Import packages, perform initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing to the "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Whenever a GET request is made to /gimmeJSON, send some JSON back to the client
// representing a person.
app.get("/gimmeJSON", function (req, res) {

    // The JSON object to return
    const person = {
        name: "Walter White",
        address: "308 Negra Arroyo Lane"
    };

    //The Alternative JSON object to return: 
    const person2 = {
        name: "Harold Houdini",
        address: "123 Magician Street",
        phone: "021 012 034"        
    }

    // Send the JSON back to the client
    res.json(person2);
});

app.get("/randomNumber", function (req, res) {
    let RND_NUM = Math.floor(Math.random() * 100)
    console.log(RND_NUM)
    const json = {
        number: RND_NUM
    }
    res.json(json)
})

// Start the webapp running
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
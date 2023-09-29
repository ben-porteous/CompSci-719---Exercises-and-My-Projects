window.addEventListener("load", function () {

    const generateButton = document.querySelector("#generate-random")

    fetchPerson();
    fetchNumber();

    // This function asynchronously fetches our person from our /gimmeJSON endpoint.
    async function fetchPerson() {
        const response = await fetch("./gimmeJSON");
        const json = await response.json();
        displayPerson(json);
    }

    generateButton.addEventListener("click", fetchNumber);

    async function fetchNumber() {
        const response = await fetch("./randomNumber");
        const json = await response.json();
        displayNumber(json);
    }

    // This function displays the given person in our HTML.
    function displayPerson(person) {
        document.querySelector("#person-name").innerHTML = person.name;
        document.querySelector("#person-address").innerHTML = person.address;
        document.querySelector("#phone").innerHTML = person.name;    
    }

    //This function displays the given random number into our HTML
    function displayNumber(number) {
        document.querySelector("#random-number").innerHTML = number.number;
    }


});
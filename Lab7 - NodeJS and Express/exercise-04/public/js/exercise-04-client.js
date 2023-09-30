window.addEventListener("load", function () {

    fetchGreeting();

    async function fetchGreeting() {
        const response = await fetch("./getGreeting?name=Andrew&age=27");
        const json = await response.json();
        displayGreeting(json);
    }

    function displayGreeting(greeting) {
        document.querySelector("#fetch-result").innerHTML = greeting.message;
    }

    ///MY CODE: 
    // async function fetchUserDetails() {
    //     stringData = await fetch("./") 

    // }



});
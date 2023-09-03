window.addEventListener("load", function () {

    // Gets the #calculate button
    const button = document.querySelector("#calculate");

    // This code is run when the #calculate button is clicked.
    button.addEventListener("click", function (event) {

        // This code gets the value the user enters, as an integer.
        const input = document.querySelector("#txtYear");
        const year = parseInt(input.value);

        // TODO Your code for Exercise Seven here.
        console.log(year);
        result = document.querySelector("#result")

        if (year % 4 != 0) {
          result.innerText = `${year} is not a leap year`;
        }
        else if (year % 100 != 0) {
            result.innerText = `${year} is a leap year! How Exciting!`;        
        }
        else if (year % 400 != 0) {
            result.innerText = `${year} is not a leap year!`;
        }
        else {
            result.innerText = `${year} is a leap year! How Exciting!`;  
        }
    });

});


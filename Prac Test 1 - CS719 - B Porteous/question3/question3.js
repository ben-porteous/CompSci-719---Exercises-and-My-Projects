window.addEventListener("load", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (city) {
        city.addEventListener("click", function () {
            city.classList.toggle("pink-cards")
        })
    })

    button = document.querySelector("#button")

    button.addEventListener("click", function () {
        cards.forEach(function (card) {
            card.classList.remove("pink-cards");
        })
    })

})

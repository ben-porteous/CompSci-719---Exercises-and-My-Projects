window.addEventListener("load", function () {

    // TODO Your code here.
    const bauble = document.querySelectorAll(".bauble");

    console.log(bauble);

    bauble.forEach (function(ball) {
        ball.addEventListener("click", function() {
            console.log(event.target);
            ball.classList.toggle("animated");

        })
    })

});
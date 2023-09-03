window.addEventListener("load", function () {

    // TODO Your code here.
    const bauble = document.querySelectorAll(".bauble");

    console.log(bauble);

    bauble.forEach (function(ball) {
        ball.addEventListener("click", function() {
  
            ball.classList.toggle("animated");

        })
    })

});
window.addEventListener("load", function () {

    // TODO part 1: Create your to-do list here with some initial items.
    const toDoList = ["Eat Breakfast", "Eat Lunch", "Eat Dinner", "Eat Dessert", "Eat Midnight Snack"];

    // Get page elements where we write out the result
    const span = document.querySelector("#count");
    const ol = document.querySelector("#list");

    // TODO part 2:  Dispay the length of the toDoList in the span.
    span.innerText = toDoList.length;

    // TODO part 3:  Iterate through the toDoList and add each as a list item.
    toDoList.forEach (function(listItem) {
       console.log(listItem);
       ol.innerHTML += `<li type="a">${listItem}</li>`;
    })


});

window.addEventListener("load", function () {

    // TODO 1) Create a JSON shopping list with the following information:
    // 3 Puppies
    // 8 Kittens
    // 2 Pikachu
    // 4 T-Rex
    const shoppingList = [
        {item: "Puppies", amount: 3}, 
        {item: "Kittens", amount: 8}, 
        {item: "Pikachu", amount: 2}, 
        {item: "TRex", amount: 4} 
    ]

    const tbody = document.querySelector("#table-body");

    // TODO 2) Iterate through the shoppingList, and populate the #table-body <tbody> with the data.
    shoppingList.forEach(function(value) {
        console.log(value)

        tbody.innerHTML += `
            <tr>
                <td>${value.item}</td>
                <td>${value.amount}</td>
            </tr>`

    })

});

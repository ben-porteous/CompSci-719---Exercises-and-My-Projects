window.addEventListener("load", function () {

    /**
     * This array represents a shopping list. The even-numbered indices are the items, and the odd-numbered indices are
     * the amounts required.
     *
     * This shopping list is for:
     * 3x Puppies
     * 8x Kittens
     * 2x Pikachus
     * 4x T-Rexes.
     */
    const shoppingList = [
        "Puppies", 3,
        "Kittens", 8,
        "Pikachu", 2,
        "T-Rex", 4
    ];

    // TODO Your code here.

    const tBody = document.querySelector("#table-body")


    for (let i = 0; i < shoppingList.length; i += 2) {
        console.log(shoppingList);
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        cell1.innerText = `${shoppingList[i]}`
        cell2.innerText = `${shoppingList[i + 1]}`
        tBody.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cell2);
    }
});

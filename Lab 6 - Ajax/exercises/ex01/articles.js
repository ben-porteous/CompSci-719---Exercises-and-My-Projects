window.addEventListener("load", function () {

    async function displayArticles() {
        let articlesResponseObj = await fetch(`https://article.trex-sandwich.com/articles`);
        let articleArray = await articlesResponseObj.json();
        displayJSONString(articleArray);
        for (let i = 0; i < articleArray.length; i++) {
            displayPartialArticleOnPage(articleArray[i]);
        }
    }

    function displayPartialArticleOnPage(articleObj) {
        let articleDivElement = document.createElement("div");

        articleDivElement.innerHTML = `
            <h3 class="article-title">${articleObj.title}</h3>
            <p class="article-body">${articleObj.content}</p>
        `;

        let articlesDiv = document.querySelector("#articles-inner");
        articlesDiv.appendChild(articleDivElement);
    }

    // Extra function to display JSON string in DOM so that you can view it
    function displayJSONString(jsonArray) {
        let jsonString = JSON.stringify(jsonArray);
        let jsonDiv = document.querySelector("#json-string");
        jsonDiv.innerText = jsonString;
    }

    displayArticles();



    /// BREAK BETWEEEN PRE-ADDED AND MY CODE ///


    //Code to add ID & Author to the Webpage
    const idAuthorDiv = document.createElement("div");
    const titleForIdAuthor = document.createElement("h2");
    titleForIdAuthor.innerText = "Items and their Authors:";
    const container = document.querySelector(".container");
    container.appendChild(titleForIdAuthor);
    container.appendChild(idAuthorDiv)

    async function grabData() {
        let fullWebDataStr = await fetch(`https://article.trex-sandwich.com/articles`);
        let fullWebDataJSON = await fullWebDataStr.json();

        fullWebDataJSON.forEach(item => {
            idAuthorDiv.innerHTML += `<h4>Item Number: ${item.id} </h4> <p>Author: ${item.author_id}</p>`;
        });
    }

    
    grabData();


});


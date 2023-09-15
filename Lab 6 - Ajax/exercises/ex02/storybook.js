window.addEventListener("load", function () {

    const turnLeft = document.querySelector("#turn-left");
    turnLeft.addEventListener("click", previousPage);

    const turnRight = document.querySelector("#turn-right");
    turnRight.addEventListener("click", nextPage);

    const pageTotal = document.querySelector("#total-page");
    const pageCurrent = document.querySelector("#current-page");

    const pageRight = document.querySelector("#page-right");
    const pageLeft = document.querySelector("#page-left");
    const pageRightText = document.querySelector("#page-right-text");


    // Use this variable to hold the endpoint response for the current page
    let currentPageInfo;

    // Variable for total page count here so it can be accessed by multiple functions
    let totalPageCount;

    // TODO: add click event listeners

    initialisePage();

    async function initialisePage() {

        // TODO: Use a request to the first endpoint to get the information about the pages in the storybook
        const pageInfo = await fetch(`https://story.trex-sandwich.com/`);
        // TODO: Get a JSON object from the response
        const pageInfoJSON = await pageInfo.json();
        // TODO: Set the totalPageCount variable to the total number of pages in the endpoint
        totalPageCount = pageInfoJSON.length;
        // TODO: Call the loadPage function and pass in the URL for the first page as a parameter
        loadPage(`https://story.trex-sandwich.com/?page=1`);

    }

    async function loadPage(pageUrlToFetch) {
        // TODO: Use the fetch API to create a request to the story endpoint
        const pageInfo = await fetch(pageUrlToFetch);
        // TODO: Use the response.json() method to get a JSON Obj from the response and store the JSON in the global variable currentPageInfo
        // the currentPageInfo variable will be used by other functions
        currentPageInfo = await pageInfo.json();
        // TODO: Call the updatePageDisplay function
        updatePageDisplay();
    }

    function updatePageDisplay() {
        // TODO: Update the span element that displays the total page count to display the total page count
        pageTotal.innerText = totalPageCount;
        // TODO: Update the span element that displays the current page number to display the current page number
        pageCurrent.innerText = currentPageInfo.page_number;

        // TODO: Update the div element for the right hand page div to display the content for the current page
        // Have a look at the structure of the data in the endpoint response to see the content property
        pageRight.innerHTML = currentPageInfo.content;

        // TODO: Create an image element, set the src attribute to the image property of the currentPageInfo JSONObject
        const pageImage = document.createElement("img");
        pageImage.setAttribute("src", currentPageInfo.image);
        // TODO: Remove any existing HTML elements from the left hand page div
        pageLeft.innerHTML = "";
        // TODO: Append the image element to the left hand page div
        pageLeft.appendChild(pageImage);
    }

    // This function will control what happens then we want to load the previous page
    function previousPage() {
        if (currentPageInfo.previous_page == undefined) {
            loadPage(`https://story.trex-sandwich.com/?page=${totalPageCount}`)
            return;
        }

        prevPage = currentPageInfo.previous_page;
        loadPage(prevPage);
    }

    // This function will control what happens then we want to load the next page
    function nextPage() {
        if (currentPageInfo.page_number < totalPageCount) {
            nextPageToRead = currentPageInfo.next_page;
            loadPage(nextPageToRead)
        } else {
            nextPageToRead = `https://story.trex-sandwich.com/?page=1`;
            loadPage(nextPageToRead)
        }
    }

});


/* 
if (currentPageInfo.next_page = undefined) {
    console.log("Testing error catch")
*/

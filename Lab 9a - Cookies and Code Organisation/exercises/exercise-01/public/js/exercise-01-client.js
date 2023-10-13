window.addEventListener("load", function () {

    // All the HTML elements you'll need to access for this exercise
    const txtNewCookieName = document.querySelector("#txtNewCookieName");
    const txtNewCookieValue = document.querySelector("#txtNewCookieValue");
    const spanAddCookieResult = document.querySelector("#addCookieResult");
    const txtRemoveCookieName = document.querySelector("#txtRemoveCookieName");
    const spanRemoveCookieResult = document.querySelector("#removeCookieResult");
    const txtGetCookieName = document.querySelector("#txtGetCookieName");
    const spanGetCookieResult = document.querySelector("#getCookieResult");

    // Handle adding cookies here
    document.querySelector("#btnAddCookie").addEventListener("click", function () {
        const cookieName = txtNewCookieName.value;
        const cookieValue = txtNewCookieValue.value;

        // TODO Use the appropriate function in client-cookie-helper.js to add a cookie with
        // the given name and value, with an expiry time of one day. Then, report a success message
        // in the #spanAddCookieResult <span>.

    });

    // Handle removing cookies here
    document.querySelector("#btnRemoveCookie").addEventListener("click", function () {
        const cookieName = txtRemoveCookieName.value;

        // TODO Use the appropriate function in client-cookie-helper.js to remove a cookie with
        // the given name. Then, report a success message in the #spanRemoveCookieResult <span>.

    });

    // Handle getting cookies here
    document.querySelector("#btnGetCookie").addEventListener("click", function () {
        const cookieName = txtGetCookieName.value;

        // TODO Use the appropriate function in client-cookie-helper.js to get the value of a cookie
        // with the given name. Then, report a success or failure message in the #spanGetCookieResult
        // <span>. The operation is considered to have "failed" if no cookie with that name was found.
        // If a cookie was found, then the success message should include that cookie's value.

    });

});
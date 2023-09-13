window.addEventListener("load", function () {

    // 5) TODO Call the createThumbnails() function to create all the thumbnails.
    

    // TODO 2) Call the loadRandomImage() function to display some initial data.
    

    // TODO 3) Add an event listener to the #featuredImage image. When clicked, the loadRandomIamge function should be called.
    

    // TODO 1) Complete this function so that the page displays information about the given galleryItem.
    // Specifically, the function should:
    // - Change the #featuredImage src to the item's fileName (remember to append ./assets/)
    // - Change the #descriptionText content to the item's description
    // - Change the #featuredImage title and alt to the chosen gallery item's tooltip
    function changeImage(galleryItem) {

        const featuredImage = document.querySelector("#featuredImage");
        const descriptionText = document.querySelector("#descriptionText");

        // TODO Complete this.

    }

    // This function chooses a random index into the gallery array, and calls the changeImage() function with the gallery item at that index.
    // i.e. this function displays a random image.
    function loadRandomImage() {
        // Generate the random index into the array of images:
        // Math.random returns a random decimal point number between 0 and 1
        // We want a *whole* number (int) between 0 inclusive and the number of images in gallery exclusive
        // To get a whole number, use Math.floor() to round down.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        const index = Math.floor(Math.random() * (gallery.length)); // generates a number between 0 and upto but not including 11: [0, 11).

        // Now we know number of the random image we want to show, so change the featured image using this:
        changeImage(gallery[index]);
    }

    // TODO 4) Complete the createThumbnails() function so that it loops through the gallery array. For each element in that array, it should:
    // - Create a <div> with the thumb-holder CSS class
    // - Inside that <div>, create an <img> whose src is equal to ./assets/thumbs/ plus the current gallery item's thumbnailName
    // - Make sure the <img> is appended to the <div>, and the <div> is appended to the #thumbview div.
    // - Add a click event handler to your newly added <div>.
    //    - When clicked, the changeImage() function should be invoked, supplying the current gallery item as a parameter.
    //
    // NOTE: Use of the forEach() function to loop through the array is highly recommended (though you should be able to get it to
    // work with any looping method).
    function createThumbnails() {
        
        // TODO Your code here.

    }

});

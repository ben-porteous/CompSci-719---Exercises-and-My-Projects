window.addEventListener("load", function () {

  // references for all elements used in examples:
  const bookDisplayDiv = document.querySelector("#book-display");
  const displayAllBooksButton = document.querySelector("#display-all-books");
  const displayPriceUnderButton = document.querySelector("#display-price-under");
  const priceUnderInput = document.querySelector("#price-under-input");
  const averageButton = document.querySelector("#calculate-average-price");
  const averageDisplay = document.querySelector("#average-display");
  const convertPoundsButton = document.querySelector("#convert-to-pounds");

  // references for all elements used in tasks to complete
  const displayRatingsOverButton = document.querySelector("#display-ratings-over");
  const ratingOverInput = document.querySelector("#rating-over-input");
  const averageRatingButton = document.querySelector("#calculate-average-rating");
  const averageRatingDisplay = document.querySelector("#average-rating-display");
  const convertRatingsButton = document.querySelector("#convert-rating");

  // TODO: Complete the required contents of the functions indicated by the TODO comments below; make sure to examine the code in the examples first in order to understand how .map, .filter and .reduce methods work.

  displayRatingsOverButton.addEventListener("click", displayRatingsOver);
  function displayRatingsOver(item){
     const input = document.querySelector("#rating-over-input").value
    const booksOverX = bookData.filter(item => item.rating > input)
    console.log(booksOverX);
  }

  averageRatingButton.addEventListener("click", calculateAverageRating);
  function calculateAverageRating(){
    const totalValue = bookData.reduce((accumulator, rating) => {
      const sum = rating.rating + accumulator; 
      return sum
    }, 0)
    const averageValue = totalValue/bookData.length;
    average = document.querySelector("#average-rating-display")
    average.innerText += averageValue;
  }

  // CONVERT RATINGS TO PERCENTAGES:
  convertRatingsButton.addEventListener("click", convertRatings);
  function convertRatings(){
    // TODO: implement functionality to convert ratings to a percentage and display all books with converted ratings
    // Note: you should use the .map method in your solution; view the example that uses the .map method if you're unsure how to do this
    const ratingToPercent = bookData.map(item => (item.rating * 10) + "%")
    const 
  }


  // EXAMPLES: Please examine these examples as they are very structurally similar to the tasks you will complete

  // DIPLAY ALL BOOKS:
  // Add event listener to displayAllBooks button:
  displayAllBooksButton.addEventListener("click", displayAllBooks);
  // Function to be called when displayAllBooks button is clicked:
  function displayAllBooks() {
    // Call displayBooks function using full bookData array:
    displayBooks(bookData);
  }

  // DISPLAY PRICE UNDER:    
  displayPriceUnderButton.addEventListener("click", displayPriceUnder);
  // Function used to filter & display books under given price:
  function displayPriceUnder() {
    // Value from price input parsed to number and stored in variable
    const priceUnderValue = parseFloat(priceUnderInput.value);
    // Filter method used to filter only books under chosen price
    const filteredBooks = bookData.filter(book => book.price < priceUnderValue);
    console.log(filteredBooks);
    displayBooks(filteredBooks);
  }

  // DISPLAY AVERAGE PRICE:
  // Add event listener to averageButton:
  averageButton.addEventListener("click", calculateAverage);
  // Function used to calculate and display average price:
  function calculateAverage() {
    const initialValue = 0;
    // Reduce method used to get sum of all book prices
    const totalPrice = bookData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price, initialValue
    );
    average = (totalPrice / bookData.length).toFixed(2);
    averageDisplay.innerText = average;
  }

  // DISPLAY AVERAGE PRICE IN POUNDS:
  // Add event listener to averagePoundsButton:
  convertPoundsButton.addEventListener("click", convertToPounds);

  function convertToPounds() {
    // Map method used to create a new array containing book prices in pounds
    const pricesInPoundsArray = bookData.map(book => {
      return { ...book, price: `£${(book.price * 0.77).toFixed(2)}`};
    });
    displayBooks(pricesInPoundsArray);
  }

  function displayBooks(booksArray) {
    bookDisplayDiv.innerHTML = "";
    booksArray.forEach(book => {
      bookDisplayDiv.innerHTML += `
                <h2>${book.title}</h2>
                <ul>
                    <li>Author: ${book.author}</li>
                    <li>Genre: ${book.genre}</li>
                    <li>Publication year: ${book.publication_year}</li>
                    <li>Rating: ${book.rating}</li>
                    <li>Price: ${book.price}</li>
                </ul>
            `;
    });
  }

});


const bookData = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publication_year: 1988,
    rating: 4.3,
    price: 11.99
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publication_year: 1997,
    rating: 4.8,
    price: 14.50
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    publication_year: 1813,
    rating: 4.5,
    price: 9.99
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publication_year: 1925,
    rating: 4.2,
    price: 10.25
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publication_year: 1960,
    rating: 4.6,
    price: 12.75
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publication_year: 1965,
    rating: 4.4,
    price: 13.49
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publication_year: 1954,
    rating: 4.9,
    price: 15.99
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publication_year: 1932,
    rating: 4.1,
    price: 11.25
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    publication_year: 1979,
    rating: 4.7,
    price: 9.95
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    publication_year: 2005,
    rating: 4.5,
    price: 10.99
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publication_year: 1937,
    rating: 4.6,
    price: 12.50
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    publication_year: 2003,
    rating: 4.0,
    price: 11.50
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publication_year: 1951,
    rating: 4.2,
    price: 12.99
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Science Fiction",
    publication_year: 2008,
    rating: 4.3,
    price: 11.25
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    publication_year: 1977,
    rating: 4.4,
    price: 10.99
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publication_year: 1851,
    rating: 4.1,
    price: 13.75
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publication_year: 1953,
    rating: 4.3,
    price: 9.99
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Classic",
    publication_year: 1890,
    rating: 4.7,
    price: 10.25
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Adventure",
    publication_year: 1884,
    rating: 4.5,
    price: 11.50
  },
  {
    title: "The War of the Worlds",
    author: "H.G. Wells",
    genre: "Science Fiction",
    publication_year: 1898,
    rating: 4.0,
    price: 8.99
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    genre: "Children's Literature",
    publication_year: 1911,
    rating: 4.2,
    price: 9.50
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: "Adventure",
    publication_year: 1844,
    rating: 4.6,
    price: 14.25
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Classic",
    publication_year: 1847,
    rating: 4.4,
    price: 11.99
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
    author: "C.S. Lewis",
    genre: "Fantasy",
    publication_year: 1950,
    rating: 4.7,
    price: 12.50
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Satire",
    publication_year: 1945,
    rating: 4.3,
    price: 9.99
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    genre: "Historical Fiction",
    publication_year: 1939,
    rating: 4.1,
    price: 10.25
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic",
    publication_year: 1818,
    rating: 4.5,
    price: 9.50
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    publication_year: 2003,
    rating: 4.7,
    price: 11.99
  }
];  
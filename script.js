"use strict";

// array of book objects
const myLibrary = [];

// book constructor
function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.uid = crypto.randomUUID();

}

// function to create a book object using book constructor and push it to array of books
function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
}

// function that loops through array of objects to display book objects in cards
function displayBooks() {
    const cardsContainer = document.querySelector(".cards-container");
    
    // loops through book object elements
    for (let i = 0; i < myLibrary.length; i++) {

        //create card content container
        let card = document.createElement("div");
        card.classList.toggle("card");
        cardsContainer.appendChild(card)

        let title = document.createElement("div");
        title.textContent =  `Title: ${myLibrary[i].title}`;
        card.appendChild(title);
        
        let author = document.createElement("div");
        author.textContent =  `Author: ${myLibrary[i].author}`;
        card.appendChild(author);

        let pages = document.createElement("div");
        pages.textContent =  `Pages: ${myLibrary[i].pages}`;
        card.appendChild(pages);

        let uid = document.createElement("div");
        uid.textContent =  `UID: ${myLibrary[i].uid}`;
        card.appendChild(uid);
    }
}

// testing adding books to array of objects
addBookToLibrary("My Hero Academia Vol. 1", "Kohei Horikoshi", 192, "read");
addBookToLibrary("My Hero Academia Vol. 1", "Kohei Horikoshi", 192, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");

// testing the display books function
displayBooks();

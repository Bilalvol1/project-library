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
    // cards container
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.textContent = '';
    
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

        let readStatus = document.createElement("div");
        readStatus.textContent = `Status: ${myLibrary[i].status}`
        card.appendChild(readStatus)

        let uid = document.createElement("div");
        uid.textContent =  `UID: ${myLibrary[i].uid}`;
        card.appendChild(uid);

        const remove = document.createElement("button");
        remove.textContent = 'delete';
        card.appendChild(remove);
        remove.addEventListener("click", () => {
            removeBtn(myLibrary[i].uid);
        });
        
        card.setAttribute("data-uid", myLibrary[i].uid);

        // change read status
        const changeStatus = document.createElement("button");
        changeStatus.textContent = "change status";
        card.appendChild(changeStatus);
        changeStatus.setAttribute('id', 'change');
        changeStatus.addEventListener("click", () => {
            changeRead(myLibrary[i].uid);
        })
    }
}


// code to change read status
function changeRead(arrayCard) {
    let index = 0;

    const displayedCards = document.querySelectorAll(".card");
    
    displayedCards.forEach(card => {
        const displayCard = card.getAttribute('data-uid');
    
        if (displayCard === arrayCard) {
            myLibrary.forEach(obj => {
            if (obj.uid === arrayCard) {
                if (obj.status == "read") {
                    obj.status = "to be read";
                }
                else {
                    obj.status = "read";
                }
                displayBooks();
            }
            else {
                index++;
            }
        })
        }
    })
}



// function to remove books from the display and the array
function removeBtn(arrayCard) {
    let index = 0;

    const displayedCards = document.querySelectorAll(".card");
    
    displayedCards.forEach(card => {
        const displayCard = card.getAttribute('data-uid');
    
        if (displayCard === arrayCard) {
            myLibrary.forEach(obj => {
            if (obj.uid === arrayCard) {
                myLibrary.splice(index, 1);
                displayBooks();
            }
            else {
                index++;
            }
        })
        }
    })
}




//adding books through user input
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("button");
const submitBtn = document.querySelector("#submitBtn");

const book = document.getElementById("book");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("status");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (event) => {
    addBookToLibrary(book.value, author.value, pages.value, read.value);
    displayBooks();
    event.preventDefault();
    dialog.close();
});


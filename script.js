let myLibrary = [];

function updateLibrary() {
    // updates the HTML based on the current state of the array
};

function Book(title, author, pages, read, insertionDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.insertionDate = insertionDate;
};

Book.prototype.info = function () {
    if (this.read) {
        return `${this.title} by ${this.author} , ${this.pages} pages, has been read`;
    }

    else {
        return `${this.title} by ${this.author} , ${this.pages} pages, not read yet`;
    }
};

Book.prototype.changeRead = function () {
    // change a book's read status
    // probably use getter/setter
};

Book.prototype.remove = function () {
    // remove book from array when click X button
    // calls updateArray
};

function addBook() {
    // adds a new book to the array when
    // checks form fields
    // calls updateArray
};

const addButton = document.getElementById('add-button');
const closeButton = document.getElementById('close-button');
const form = document.getElementById('add-form');

let formState = false;

addButton.addEventListener('click', () => {
    if (formState) {
        return;
    }

    else {
        form.classList.remove(formState);

        formState = !formState;
        form.classList.add(formState);
    }
});

closeButton.addEventListener('click', () => {
    if (formState) {
        form.classList.remove(formState);

        formState = !formState;
        form.classList.add(formState);
    }

    else {
        return;
    }
});

// Add local storage functionality
// Manage title length (actually kinds of input)
// Library log
// Dark mode
// Order by
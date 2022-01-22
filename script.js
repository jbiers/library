const library = document.getElementById('library');

let libraryArray = [new Book('Harry Potter', 'J.K. Rowling', 300, true, '22/01/2022')];
let book;

function updateLibrary() {
    // updates the HTML based on the current state of the array
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    };

    for (let i = 0; i < libraryArray.length; i++) {

        book = document.createElement('div');
        book.classList.add('book');
        book.innerHTML = `<button class="remove-button ${i}">x</button>
        <p class="title">${libraryArray[i].title}</p>

        <p>by <span class="author">${libraryArray[i].author}</span></p>

        <p><span class="pages">${libraryArray[i].pages}</span> pages</p>

        <p>Added <span class="date-added">${libraryArray[i].insertionDate}</span></p>

        <p class="read">${(libraryArray[i].read) ? "Read" : "Not Read"}</p>`


        library.appendChild(book);
    };
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
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('add-form-div');

let titleInput, authorInput, pagesInput, dateAdded;


let formState = false;

function submitFunction() {
    /*
    *
        TEST FOR INPUT CORRECTNESS
    *
    */
    // GET VALUES FROM FORM
    titleInput = document.getElementById('title-input').value;
    authorInput = document.getElementById('author-input').value;
    pagesInput = document.getElementById('page-count-input').value;
    dateAdded = document.getElementById('date-added-input').value;

    console.log(titleInput + authorInput + pagesInput);
    // CREATE OBJECT WITH THESE VALUES AND PUSH TO ARRAY

    updateLibrary();

    if (formState) {
        form.classList.remove(formState);

        formState = !formState;
        form.classList.add(formState);
    }

    else {
        return;
    }
};

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

const removeButtons = Array.from(document.getElementsByClassName('remove-button'));

removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        /*
        **
        ARE YOU SURE YOU WANT TO REMOVE??
        **
        */

        libraryArray.splice(button.classList[1], 1);

        updateLibrary();
    });
});

// Add local storage functionality
// Manage title length (actually kinds of input)
// Library log
// Dark mode
// Order by
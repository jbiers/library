let libraryArray = [];

function getCurrentDate() {
    let now = new Date();

    return `${now.getDate()}/${(now.getMonth() < 9) ? ('0' + (now.getMonth() + 1)) : now.getMonth() + 1}/${now.getFullYear()}`
};

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.dateAdded = getCurrentDate();
};

Book.prototype.remove = function (index) {
    libraryArray.splice(index, 1);

    renderLibrary();
};

const openFormButton = document.getElementById('open-form-button');
const closeFormButton = document.getElementById('close-form-button');
const submitFormButton = document.getElementById('submit-form-button');
const formDiv = document.getElementById('form-div');

let formState = false;

function openForm() {
    if (formState) {
        return;
    }

    else {
        formState = !formState;

        formDiv.classList.remove('false');
        formDiv.classList.add('true');
    }
};

function closeForm() {
    if (formState) {
        formState = !formState;

        formDiv.classList.remove('true');
        formDiv.classList.add('false');
    }

    else {
        return;
    }
};

let newTitle, newAuthor, newPages, newReadStatus;
let form = document.forms[0];

function submitForm() {
    newTitle = form['title-input'].value; // exist
    newAuthor = form['author-input'].value; // exist
    newPages = form['pages-input'].value; // exist, be number
    newReadStatus = form['read-status-input'].value;

    libraryArray.push(new Book(newTitle, newAuthor, newPages, newReadStatus));

    form.reset();
};

openFormButton.addEventListener('click', () => {
    openForm();
});

closeFormButton.addEventListener('click', () => {
    closeForm();
});

submitFormButton.addEventListener('click', () => {
    submitForm();
    closeForm();
    renderLibrary();
});

const library = document.getElementById('library');

let bookDiv, removeBookButton, title, author, pages, dateAdded, readStatus;

function renderLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    };

    for (let i = 0; i < libraryArray.length; i++) {
        bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        removeBookButton = document.createElement('button');
        removeBookButton.innerHTML = 'X'
        removeBookButton.classList.add('remove-book-button');
        removeBookButton.classList.add(i);

        removeBookButton.addEventListener('click', () => {
            console.log("click");
            libraryArray[i].remove(i);
        });

        title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = libraryArray[i].title;

        author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = `by ${libraryArray[i].author}`;

        pages = document.createElement('p');
        pages.classList.add('pages');
        pages.innerHTML = `${libraryArray[i].pages} pages`;

        dateAdded = document.createElement('p');
        dateAdded.classList.add('date-added');
        dateAdded.innerHTML = `Added ${libraryArray[i].dateAdded}`;

        readStatus = document.createElement('p');
        readStatus.classList.add('read-status');
        readStatus.innerHTML = `${(libraryArray[i].readStatus) ? 'Read' : 'Not Read'}`;


        bookDiv.append(removeBookButton, title, author, pages, dateAdded, readStatus);
        library.appendChild(bookDiv);
    };
};
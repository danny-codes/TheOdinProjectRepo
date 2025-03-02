const myLibrary = [];

const body = document.body;
const container = document.querySelector('.container');
const newBookBtn = document.querySelector('#new-book');
const bookForm = document.querySelector('#book-form');
const addBookBtn = document.querySelector('#add-book');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // displayBooks(newBook);
    displayBooks();
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);

function displayBooks(book) {
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        let card = document.createElement("div");
        card.classList.add("book-card");
        container.appendChild(card);
        // card.setAttribute('data-index', myLibrary[i])

        let header = document.createElement("h3");
        header.textContent = book.title;
        card.appendChild(header);

        let authorP = document.createElement("p");
        authorP.textContent = `Author: ${book.author}`;
        card.appendChild(authorP);

        let pagesP = document.createElement("p");
        pagesP.textContent = `${book.pages} pages`;
        card.appendChild(pagesP);

        let readStatus = document.createElement("p");
        readStatus.textContent = book.read ? "Read" : "Not read yet";
        card.appendChild(readStatus);
    });
}

newBookBtn.addEventListener('click', () => {
    bookForm.style.display = 'block';
});

function addInputToArray() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const isReadInput = document.getElementById('read');

    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const pagesValue = parseInt(pagesInput.value);
    const isReadValue = isReadInput.checked;
    console.log(isReadValue);

    if (titleValue && authorValue &&
        pagesValue && isReadValue) {
            myLibrary.push({title: titleValue, author: authorValue,
                pages: pagesValue, read: isReadValue
            });
        titleInput.value = '';
        authorInput.value = '';
        pagesValue.value = '';
        isReadInput.checked = false;
        console.table(myLibrary);
        }
    else {
        alert('Please fill in all fields.');
    }
}

addBookBtn.addEventListener('click', (e) => {
    bookForm.style.display = 'none';
    e.preventDefault();
});

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
//     console.log('for loop working');
// }
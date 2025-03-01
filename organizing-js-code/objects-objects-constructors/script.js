function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    }
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName();
player2.sayName();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

const theHobbit = new Book('The hobbit', 'J.R.R. Tolkien', '295', false);
console.log(theHobbit.info());
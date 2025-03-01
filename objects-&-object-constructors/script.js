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

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// let hero1 = new Hero('A', 1);
// Object.getPrototypeOf(hero1);

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Warrior.prototype);

function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function.');
    }
    this.brand = brand;
}
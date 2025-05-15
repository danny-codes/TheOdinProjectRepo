let user = {
    name: 'John',
    surname: 'Smith',

    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short, need at least 4 characters');
            return;
        }
        this._name = value;
    }
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName);
for (let key in user) console.log(key);

user.name = 'Pete'
console.log(user.name);
user.name = ''

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User('John', new Date(1999, 1, 1));
console.log(john.birthday);
console.log(john.age);

class Person {
    constructor(name){
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
let david = new Person('David');
david.sayHi();
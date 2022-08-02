// Extends, Super, and Subclasses
// *******************************************************
// class Cat {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     meow(){
//         return 'MEOWWWW!';
//     }
// };

// class Dog extends Pet {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     bark() {
//         return 'WHOOF!'
//     } 
// };
// Constructor and the method 'eat' have been duplicated. To fix that
// extends can be used.
// Extends is used to inherit the properties of the class being extended.
// ***********************************************************************

class Pet {
    constructor (name, age) {
        console.log('IN PET CONSTRUCTOR'); // This will be executed when
        // super in class Cat is called.
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor (name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR');
        // super is used to reference the class we are extending from
        // and therefore, avoid duplicating --->  this.name = name;
        //this.age = age;
        super(name, age); // super will call the class we are extending 'Pet'.
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWWW!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WHOOF!'
    }
    // this 'eat' method will overrride the 'eat' method in class Pet
    eat() {
        return `${this.name} scarfs his food!`;
    }
}

const rex = new Dog('Rex', 3);
const monty = new Cat('Monty', 9);

console.log(monty.meow());
console.log(rex.eat());
console.log(monty.eat()); 

//Using THIS in methods
// function sayHi(){
//     console.log('Hi')
//     //this refers to the window (global scope of the browser)
//     console.log(this);
// }
// sayHi();

//1.
// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName(){
//         console.log(this.first)
//     }
// }

//2. 
// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName(){
//         console.log(`${this.first} ${this.last} AKA ${this.nickName}`)
//     }
// }

//3.
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName(){
        const {first, last, nickName} = this;
        return `${first} ${last} AKA ${nickName}`
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);
    }
}
console.log(person.printBio())
//Adding methods to objects
const math = {
    numbers: [1,2,3,4,5],
    add: function (x, y) {
        return x+y;
    },
    multiply: (x, y) => {
        return x*y;
    }
}

//Shorthand syntax
const math2 = {
    numbers: [1,2,3,4,5],
    add(x, y) {
        return x+y;
    },
    multiply(x, y) {
        return x*y;
    }
}
console.log(math.multiply(2,4));
console.log(math2.add(2,4));
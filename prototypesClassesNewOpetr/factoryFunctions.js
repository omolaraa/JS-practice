// function rgb(r, g, b){
//   console.log(`rgb(${r}, ${g}, ${b})`); 
// }
// rgb(255, 255, 12);

// function hex(r, g, b){
//     console.log('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }
// hex(255, 255, 12);
// **********************************************************************************
// Using Factory functions, we don't have to pass in arguments every time
// we want to call rgb() and hex()

function makeColor(r, g, b){
    const color = {};
    // assign the arguments that will be passed to keys created in the color object
    color.r = r;
    color.g = g;
    color.b = b;
    // create a method for color
    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function() {
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
const secondColor = makeColor(255, 255, 0);
// call your new method(s) on the function
console.log(firstColor.rgb());
console.log(firstColor.hex());
console.log(firstColor.hex === secondColor.hex);

// firstColor === secondColor is false because the methods are duplicated
// the methods should be unique and refer to one object
// when this is done, firstColor === secondColor will be true

// Constructor functions next
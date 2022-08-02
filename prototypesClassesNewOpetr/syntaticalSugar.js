// methods are added to prototype automatically with 'class' and 'constructor',
// hence, no need for  Color.Prototype.hex.
class Color {
    constructor (r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB = function(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb = function(){
        return `rgb(${this.innerRGB()})`; // access the innnerRGB from the
        // object created. 'this' refers to the object created by the
        // 'new' keyword.
    };
    rgba = function(a = 1.0) {
        const {r, g, b} = this;
        return `rgb(${this.innerRGB()}, ${a})`;
    };
    hex =  function() {
        const {r, g, b} = this;
            return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    };
   
};

const red = new Color (255, 67, 89, 'tomato');
const white = new Color (255, 255, 255, 'white');

console.log(red.rgba(0.5));

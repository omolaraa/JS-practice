// This method creates only copy of the Color prototype rgb, hex, and rgba.
// So there is only one copy of them across all instances of the Color prototype.
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
// When this function is created and the keyword 'new' is added to it
// when it is being called, an object is created like the object color 
//from factory functions.

// 'this' refers/ references the object that is created when the 'new' 
// is added to the Color function.

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function() {
    const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));

};
Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(255, 255, 34);
const color2 = new Color(255, 0, 34);

console.log(color1.rgba(0.4));
console.log(color1.hex === color2.hex);
console.log(document.body.style.backgroundColor = color1.rgba(0.4));

// A better way to write this and keep the codes together and neat
// Syntatical sugar next.

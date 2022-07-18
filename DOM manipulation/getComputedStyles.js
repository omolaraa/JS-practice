//contains CSS current values
const li = document.querySelector('li')
getComputedStyle(li);

const h1 = document.querySelector('h1');
const compStyles = getComputedStyle(h1);
// the compured CSS values for color and font size change when h1 is hovered
compStyles.color
compStyles.fontSize
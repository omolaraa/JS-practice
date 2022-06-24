//contains CSS current values
const li = document.querySelector('li')
getComputedStyle(li);

const h1 = document.querySelector('h1');
const compStyles = getComputedStyle(h1);
compStyles.color
compStyles.fontSize
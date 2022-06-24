//href, src, value,etc.
const img = document.querySelector('img')
console.log(img.src);

const inputs = document.querySelectorAll('input')
inputs[0].value
inputs[2].checked
inputs[3].value

const password = document.querySelector('input[type="password"]')
console.log(password.value);

const a = document.querySelector('a')
a.href

//#############################################################################

//getting and setting attributes
const range = document.querySelector('input[type="range"]')
console.log(range.getAttribute('min'));
console.log(range.getAttribute('max'));
console.log(range.getAttribute('type'));

range.setAttribute('min', '-500')
range.value

range.setAttribute('type', 'radio')
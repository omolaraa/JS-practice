const firstLi = document.querySelector('li')
console.log(firstLi.parentElement);

// const ul = document.querySelector('ul')
console.log(ul.children);
console.log(ul.children[0].innerText);

console.log(firstLi.nextElementSibling);
const thirdLi = firstLi.nextElementSibling.nextElementSibling
console.log(thirdLi);
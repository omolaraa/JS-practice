const newh2 = document.createElement('h2')
newh2.classList.add('special')
newh2.innerText = 'haha'

const section = document.querySelector('section')
section.appendChild(newh2)

const link = document.createElement('a')
link.innerText = 'click meeee'
link.href = 'https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17022908#overview'
const p = document.querySelector('p')
p.appendChild(link)

//Insert a new element using insertBefore

const parentUl = document.querySelector('ul')
// const secondLi = document.querySelectorAll('li')[1]
const liTodos = document.querySelectorAll('li.todo')

const newLi = document.createElement('li')
newLi.innerText = 'I am a new LI'

// parentUl.insertBefore(newLi, secondLi)
parentUl.insertBefore(newLi, liTodos[1])


//insert elements using:
const iTag = document.createElement('i')
iTag.innerText = 'I am Italics'
p.insertAdjacentElement('beforebegin', iTag)

const iTag2 = document.createElement('i')
iTag2.innerText = 'I am Italics 2'
p.insertAdjacentElement('beforeend', iTag2)

const iTag3 = document.createElement('i')
iTag3.innerText = 'I am Italics 3 ' 
p.insertAdjacentElement('afterbegin', iTag3)

const iTag4 = document.createElement('i')
iTag4.innerText = 'I am Italics 4'
p.insertAdjacentElement('afterend', iTag4)

//#########################################################
//Append and prepend
const newP = document.createElement('p')
newP.innerText = 'New paragraph'

const newP2 = document.createElement('p')
newP2.innerText = 'Second new paragraph'

//Append two new elements in an existing paragraph

p.append(newP, newP2)

//prepend - add elements before existing paragraph
p.prepend(newP, newP2)
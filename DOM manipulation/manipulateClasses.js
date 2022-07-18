const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'

todo.getAttribute('class')
//this replaces the previous class property (todo) which is not ideal.
todo.setAttribute('class', 'done')
//still not ideal
todo.setAttribute('class', 'todo done')

//apply or remove classes - to change or add multiple styles to elements
todo.classList.remove('done')
todo.classList.add('done')
todo.classList.toggle('done')
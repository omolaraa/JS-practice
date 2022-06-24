//Inner Text and Text Content, innerHTML
// Inner text gets whats on the webpage
 const h1 = document.querySelector('h1')
console.log( h1.innerText = "I'm hungry");
 console.log(document.body.innerText);


 const secUl = document.querySelector('section ul')
 console.log( secUl.innerText);

// Inner text gets whats on the webpage
 //  const ul = document.querySelector('ul')
 console.log( ul.innerText);

 //text content gets the text directly from the html file.
 console.log( ul.textContent);

 //##########################################################################

 //innerHTML- prints out HTMLtags
 console.log( secUl.innerHTML);

 //innerHTML - can be used to update HTML on the webpage.
 console.log( h1.innerHTML += ' <b>is cool !!! </b>');
 // innerText does not treat <b> as an element but prints it as a string
 // on the webpage.
 console.log( h1.innerText += ' <b>is cool !!!</b>');

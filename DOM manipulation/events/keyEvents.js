const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
    console.log('key down');
})
input.addEventListener('keyup', function(e) {
    console.log('key up');
})
// activates when characters are inputted into the form.
input.addEventListener('keypress', function(e) {
    console.log('key press');
    console.log(e);
})

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        if (!this.value) return;
        const newItemText = this.value;
        const newItemLi = document.createElement('li');
        newItemLi.innerText = newItemText;
        itemsUl.appendChild(newItemLi)
        this.value = '';
    }
})
const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsInput = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Credit Card Input', creditCardInput.value);
    console.log('Terms Input', termsInput.checked);
    console.log('Veggie Select', veggieSelect.value );
});


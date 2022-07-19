const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//     console.log('credit card', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('Veggie', e);
//     formData['veggie'] = e.target.value;
// });

// termsInput.addEventListener('input', (e) => {
//     console.log('Terms', e);
//     formData['terms'] = e.target.checked;
// });
// ####################################################################
// for(let input of [creditCardInput, termsInput, veggieSelect]) {
//     input.addEventListener('input', (e) => {
//         formData[e.target.name] = e.target.value;
//         // there is no value for checkbox
//     })
// }

// for(let input of [creditCardInput, termsInput, veggieSelect]) {
//         input.addEventListener('input', ({target}) => {
//             const { name, type, value, checked } = target;
//             formData[name] = type === 'checkbox' ? checked : value;
//         });
//     }


// change - does not return a value for input form until it's out of focus.
for(let input of [creditCardInput, termsInput, veggieSelect]) {
        input.addEventListener('change', ({target}) => {
            const { name, type, value, checked } = target;
            formData[name] = type === 'checkbox' ? checked : value;
            console.log(formData);
        });
    }

async function greet(){
    return 'HELLO';
};

greet() 
.then((val) => {
    console.log('PROMISE RESOLVED WITH: ', val);
});
// *****************************************************************
// async function add(x, y){
//     if (typeof x!=='number' || typeof y !== 'number') {
//         throw 'X and Y must be numbers!';
//     }
//     return x + y;
// }; 

// add(1, 5)
// .then((val) => {
//     console.log('Promise resolved with: ', val);
// })
// .catch((err) => {
//     console.log('Promise rejected with: ', err);
// });

// *****************************************************************88
// Without Async and with Promises:

function add(x, y){
    return new Promise((resolve, reject) => {
    if (typeof x!=='number' || typeof y !== 'number') {
        reject ('X and Y must be numbers!');
    }
    resolve (x + y);
});
}; 


add(1, 5)
.then((val) => {
    console.log('Promise resolved with: ', val);
})
.catch((err) => {
    console.log('Promise rejected with: ', err);
});
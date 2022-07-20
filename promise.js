// const getDog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     }else{
//         reject();
//     }
// });
// getDog.then(() =>{
//     console.log('WE GOT A DOG');
// });
// getDog.catch(() => {
//     console.log(':( NO DOG');
// });


// return Promise from a function
const makePromise = () => {
    return new Promise((resolve, reject) => {
        // execute function after 5 seconds
        setTimeout(() => {
         const rand = Math.random();
         if(rand < 0.5){
             resolve();
         }else{
             reject();
         }
        }, 5000);
     });
};

makePromise()
.then(() =>{
    console.log('WE GOT A DOG');
})
.catch(() => {
    console.log(':( NO DOG');
});
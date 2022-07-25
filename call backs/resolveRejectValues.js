// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         // execute function after 5 seconds
//         setTimeout(() => {
//          const rand = Math.random();
//          if(rand < 0.3){
//              resolve({status: 200});
//          }else{
//              reject({status: 404});
//          }
//         }, 1000);
//      });
// };

// makePromise()
// .then((res) =>{
//     console.log(res.status);
//     console.log('WE GOT A DOG');
// })
// .catch((rej) => {
//     console.log(rej.status);
//     console.log(':( NO DOG');
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const pages = {
            '/users' : [
                {id: 1, username: 'Bilbo'},
                {id: 2, username: 'Esmerelda'}
            ],
            '/about': 'This is the about page!'
        };
        const data = pages[url];
        if(data) {
            resolve({status: 200, data});
        }else{
            reject({status: 404});
        }
        }, 1000);
     });
};

fakeRequest('/about')
.then((res) =>{
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED');
})
.catch((rej) => {
    console.log('Status Code', rej.status);
    console.log('REQUEST FAILED');
});

fakeRequest('/users')
.then((res) =>{
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED');
})
.catch((rej) => {
    console.log('Status Code', rej.status);
    console.log('REQUEST FAILED');
});


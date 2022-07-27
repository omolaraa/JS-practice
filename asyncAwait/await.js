// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets()
// .then((res) => {
//     console.log(res.data);
// });

// *********************************************************88
// With Await inside an asyn function:

// async function getPlanets() {
//     // waits for request to be resolved
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data); // only runs once the previous line is complete
//     // (the axios promise is resolved)
// }
// getPlanets()
// // one way to catch error in asyn functions
// .catch((err) => {
//     console.log('In catch!!!', err);
// });

// *************************************************
// second way to catch error in async function using try and catch
async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data); 
    }
    catch (e) {
        console.log('In Catch', e);
    }
   
}
getPlanets();



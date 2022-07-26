// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     if(!response.ok)
//        throw new Error(`Status Code Error: ${response.status}`);

//     return response.json()
// })
// .then((data) => {
//     console.log(data);
//     console.log('Fetched all planets (first 10)');
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
// })
// .then((response) => {
//     if(!response.ok)
//        throw new Error(`Status Code Error: ${response.status}`);

//     return response.json()
// })
// .then((data) => {
//     console.log('Fetched first film, based off of first planet');
//     console.log(data.title);
// })
// .catch((err) => {
//     console.log('something went wrong');
//     console.log(err);
// });

// ******************************************************************
// Refactoring the code

// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     if(!response.ok)
//        throw new Error(`Status Code Error: ${response.status}`);

//     return response.json()
// })
// .then((data) => {
//     console.log(data);
//     console.log('Fetched all planets (first 10)');
//     for (let planet of data.results){
//         console.log(planet.name);
//     }
//     const nextURL = data.next;
//     return fetch(nextURL);
// })
// .then((response) => {
//     if(!response.ok)
//        throw new Error(`Status Code Error: ${response.status}`);

//     return response.json()
// })
// .then((data) => {
//     console.log('Fetched next 10 planets');
//     for (let planet of data.results){
//         console.log(planet.name);
//     }
// })
// .catch((err) => {
//     console.log('something went wrong');
//     console.log(err);
// });
// *****************************************************************************8

const checkStatusAndParse = (response) => {
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`);

 return response.json()
};

const printPlanets = (data) => {
    console.log(data);
    console.log('Loaded 10 more planets...');
    for (let planet of data.results){
        console.log(planet.name);
    }
    // return Promise.resolve(data);
    return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
};
// const fetchNextPlanets = (data) => {
//     const nextURL = data.next;
//     return fetch(nextURL);
// };

fetch('https://swapi.dev/api/planets/')
// fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err) => {
    console.log('something went wrong');
    console.log(err);
});
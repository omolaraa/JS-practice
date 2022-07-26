// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//         for (let planet of data.results){
//             console.log(planet.name);
//         }
//     });
// })
// // fetch will not catch an error unless there is no internet connection
// // resolve in promises will run regardless of the presence of an error.
// .catch((err) => {
//     console.log(err);
// });

// **************************************************************************************
// catch errors in fetch:
// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     if(!response.ok) {
//         console.log('error not status: 200', response.status);
//     }
//     else{
//         console.log(response);
//         response.json()
//     .then((data) => {
//         console.log(data);
//         for (let planet of data.results){
//             console.log(planet.name);
//         }
//     });
//     }
    
// });
// **********************************************************************

// how to make catch run when there is an error:
fetch('https://swapi.dev/api/planetssdeg/')
.then((response) => {
    if(!response.ok)
       throw new Error(`Status Code Error: ${response.status}`);

    console.log(response);
    response.json().then((data) => {
        console.log(data);
        for (let planet of data.results){
            console.log(planet.name);
        }
    });
})
.catch((err) => {
    console.log('something went wrong');
    console.log(err);
});
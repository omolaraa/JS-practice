// axios.get('https://swapi.dev/api/planets/')
// .then((response) => {
//     // with axios there's no need to parse the data to JSON
//     console.log(response.data);
// })
// // axios will catch an error if the url is wrong unlike fetch
// // and axios will run resolve without internet connection unlike fetch
// .catch((err) => {
//     console.log('In Catch Callback');
//     console.log(err);
// });
// *********************************************************************
// chainig axios
// axios.get('https://swapi.dev/api/planets/')
// // destructure response to get data
// .then(({data}) => {
//     console.log(data);
//     for(let planet of data.results){
//         console.log(planet.name);
//     }
//     return axios.get(data.next);
// })
// .then(({data}) => {
//     console.log(data);
//     for(let planet of data.results){
//         console.log(planet.name);
//     }
// })
// .catch((err) => {
//     console.log('In Catch Callback');
//     console.log(err);
// });
// ********************************************************************
// refactor code

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url);
};
const printPlanets = ({data}) => {
    console.log(data);
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);

}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
    console.log('In Catch Callback');
    console.log(err);
});
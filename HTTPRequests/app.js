//XMLHttpRequest syntax:

// function reqListener () {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", " https://swapi.dev/api/planets/1/");
// oReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log('It worked!!!');
    const data = JSON.parse(this.responseText);
    for(let planet of data.results){
        console.log(planet.name);
    }
});

firstReq.addEventListener('error', () => {
    console.log('ERROR!!!');
});

firstReq.open('GET', ' https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request sent');

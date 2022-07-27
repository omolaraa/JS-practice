// // Sequential Requests
//  async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);       
//     console.log(poke2.data);
//     console.log(poke3.data);    
//  }
//  get3Pokemon();

// Parallel Requests
async function get3Pokemon() {
    // requests do not need to wait on previous ones to run
    // they all run/ resolve at the same time 
    // this can be used when a request is not dependent on another to be
    // resolved before it runs.
    const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(poke1.data);       
    console.log(poke2.data);
    console.log(poke3.data);    
 }
 get3Pokemon();

 // ****************************************************************
 // real-time example


 function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
 }
// Sequential requests
// waits for previous requests to run

// async function lightShow() {
//     await changeBodyColor('teal', 1000);
//     await changeBodyColor('pink', 1000);
//     await changeBodyColor('indigo', 1000);
//     await changeBodyColor('violet', 1000);
// }

// lightShow();
 
// *************************************************
// Parallel Requests
// runs at the same time

async function lightShow() {
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('indigo', 1000);
    const p4 = changeBodyColor('violet', 1000);
    await p1;
    await p2;
    await p3;
    await p4;
}

lightShow();
 
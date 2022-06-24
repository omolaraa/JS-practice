const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {};
team[role] = person;
team[role2] = person2;
console.log(team);

const team2 = {
    [role]: person,
    [role2]: person2,
    [1+6+9]: 'sixteen'
}
console.log(team2);

// Add a property to an object
// function addProp(obj,k,v){}
const addProp = (obj, k, v) =>{
    const copy = {
        ...obj
    };
    copy[k] = v; 
    return copy;
}

//Using computed properties
const addProp2 = (obj,k,v) =>{
    return {...obj, [k]:v}
}

//Implicit return arrow function
// const addProp2 = (obj,k,v) => {{...obj, [k]:v}};

const res = addProp2(team, 'happy', ':)');
console.log(res);

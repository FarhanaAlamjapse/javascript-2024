'use strict';
// function calcAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     const output = `${firstName},you are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'afif'; //it will print.js tries to look up current scope first
//       const str = `oh,you are a millenial,${firstName}`;
//       console.log(str); //accessible look up parent scope and get firstName variable
//     }
//     //console.log(str);  ...not defined cause const let is block scoped.not accessible from outer scope
//     console.log(millenial); //accesible cause var is function scoped
//   }

//   printAge();

//   return age;
// }
// const firstName = 'japse';
// calcAge(1996);

//hoisting
console.log(x);
//console.log(y);
//console.log(z);

var x = 'japse';
let y = 'afif'; //get reference error tdz
const z = 'arafat'; //get reference error because of tdz

//function
console.log(addDec(2, 3));
//console.log(addExp(2, 3));
console.log(addArrow(2, 3));

//function declaration
function addDec(a, b) {
  return a + b;
}

//function expression
const addExp = function (a, b) {
  return a + b;
};

//arrow function
const addArrow = (a, b) => a + b;

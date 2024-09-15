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

/*
//hoisting
console.log(x);
console.log(y);
console.log(z);

var x = 'japse';
let y = 'afif'; //get reference error tdz
const z = 'arafat'; //get reference error because of tdz

//function
console.log(addDec(2, 3));
console.log(addExp(2, 3));
console.log(addArrow(2, 3));

//function declaration
function addDec(a, b) {
  return a + b;
}

//function expression get ref error
const addExp = function (a, b) {
  return a + b;
};

//arrow function get ref error
const addArrow = (a, b) => a + b;*/

//this keyword
console.log(this); //global object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //this keyword undefined for regular function only in strict mode otherwise global obj
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //dont own this,it points to parent scope,here global obj
};
calcAgeArrow(1990);

const japse = {
  year: 1996,
  calcAge: function () {
    console.log(2023 - this.year);
    console.log(this); //as it is a method and regular function,points to japse(owner) obj because japse is calling the method
  },
};
japse.calcAge();

const afif = {
  year: 2014,
};
afif.calcAge = japse.calcAge; //method borrowing
afif.calcAge(); //points to the the object that is calling the method.here this points to afif

const f = japse.calcAge;
f();

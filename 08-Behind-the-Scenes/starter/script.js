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

/*
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
f();//undefined because f() is a regular function here.there is no owner of f*/

/*
//Regular function vs arrow function

//var firstName = 'afif';
const japse = {
  firstName: 'japse',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //   //when another regular function inside method this keyword undefined.to solve this declare self variable and set this
    //   //solution 1
    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //undefined,arrow function don't own this keyword,points to global.but if we use var it will take var value
};
japse.greet();
japse.calcAge();
console.log(this); //don't get error.undefined.when we try to access a property that doesn't exist-undefined

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);*/

//primitive vs. objects(primitive vs. reference types)

//primitive
let lastName = 'japse';
let oldLastName = lastName;
lastName = 'faru'; //differnt memory addr in stack
console.log(lastName, oldLastName);

//reference type
const japse = {
  firstName: 'Farhana',
  lastName: 'alam',
  age: 27,
};
const marriedJapse = japse; //same address in heap.
marriedJapse.lastName = 'ali'; //change the property of obj
console.log('before marriage', japse);
console.log('after marriage', marriedJapse);

//copying objects
const japse2 = {
  firstName: 'Farhana',
  lastName: 'alam',
  age: 27,
  family: ['x', 'y'],
};

const japseCopy = Object.assign({}, japse2); //complete new obj
japseCopy.lastName = 'ali';
japseCopy.family.push('a');
japseCopy.family.push('b');

console.log('before marriage', japse2);
console.log('after marriage', japseCopy);

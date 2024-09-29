'use strict';
//function constructor
//arrow func will not work as function constructor.as its dont have own this keyword
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never use this..
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const jonas = new Person('jonas', 1991);
console.log(jonas); //Person {firstName: 'jonas', birthYear: 1991, calcAge: ƒ}

//new {} is created
//function is called,this={}
//{} is linked to prototype
//function automatically return {}

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack); //Person {firstName: 'matilda', birthYear: 2017, calcAge: ƒ} Person {firstName: 'jack', birthYear: 1975, calcAge: ƒ}

console.log(jonas instanceof Person);

'use strict';
//function constructor
//arrow func will not work as function constructor.as its dont have own this keyword
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never use this..
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
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

console.log(jonas instanceof Person); //true

//prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); //46 we get result
matilda.calcAge(); //20
console.log(jonas.__proto__); //{calcAge: ƒ} prototype of jonas,we see functn so jonas is able to use this
console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//prototypeOfLinkedObjects
//we can set property in prototype.those arent directly instead found in prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas); //in prototype..its not own property

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false.not own.but has access because of prototype

console.log(jonas.__proto__); //{species: 'Homo Sapiens', calcAge: ƒ}

//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__); //constructor,hasownproperty
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor); //point back to person itself
console.dir(Person.prototype.constructor); //if we want to inspect func use dir

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__); //all methods.each arr will inherit these method from its prototype
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__); //constructor

//dont use this all time
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique);

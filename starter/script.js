/*
let js = "amazing";
if (js === "amazing") alert("js is fun");
console.log(40 + 8 + 23 - 10);

console.log("Alam");
console.log(11);

let firstName = "japse";
console.log(firstName);
console.log(firstName);
console.log(firstName);*/

/*
//Boolean
let javascriptIsFun = true; //can be stored in a variable also
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "japse");

//string
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//undefined:empty value
let year;
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

//null
console.log(typeof null);*/

/*
//let,const,var
let age = 30;
age = 32;

const birhtyear = 1990;
birhtyear = 1996;//error

var job = "programmer";
job = "teacher";*/

//basic operators
// math operators
const now = 2024;
const ageAfif = now - 2014;
const ageSakib = now - 2000;

console.log(ageAfif, ageSakib);
console.log(ageAfif * 2, ageSakib / 20, 2 ** 3);

const firstName = "sadman";
const lastName = "Alam";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 5; //x=x+5
x *= 2; //x-x*2
x++; //x+1
x--; //x-1
x--;
console.log(x);

//comparison operators :reply with boolean
console.log(ageSakib > ageAfif); //>,<,>=,<=
console.log(ageAfif >= 10);

const isFullAge = ageAfif >= 10;

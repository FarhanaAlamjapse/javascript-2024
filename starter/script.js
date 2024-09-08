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

/*
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

const isFullAge = ageAfif >= 10;*/

/*
//operator precedence
let x, y;
x = y = 25 - 10 - 5; //x=y=10,x=10
console.log(x, y);

const now = 2024;
const ageAfif = now - 2014;
const ageSakib = now - 2000;

const averageAge = (ageAfif + ageSakib) / 2;
console.log(ageAfif, ageSakib, averageAge);*/

/*
//Strings and template literals

const firstName = "japse";
const job = "learner";
const birthYear = 1996;
const year = 2024;

const japse =
  "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + "!";
console.log(japse); //painful to use

const japseNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(japseNew); //using es6

console.log(`just a regular string....`); //in console

//multiline before es6
console.log(
  "string\n\
    multiline\n\
    lines"
);

//using template/es6:more easier
console.log(`string
    multiline 
    lines`);*/

/*
    //if/else statement
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving😍");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
  console.log(century);
} else {
  century = 21;
  console.log(century);
}*/

//Type Conversion and Coercion
//type conversion:manually
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("japse"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion:automatically
console.log("i am" + 23 + "years old");
console.log("20" - "20" - 25);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

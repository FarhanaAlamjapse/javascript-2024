'use strict';
//IIFE
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})(); //to immediately call it use ()

//IIFE also work on arrow function
(() => console.log('this will also never run again'))();
{
  const isPrivate = 23;
  var notPrivate = 50;
}
console.log(notPrivate);

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(189, 'farhana japse');
lufthansa.book(209, 'nabhan alam');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//book(23,'sarah') not work because its a reg function.this points to undefined
//call method
book.call(eurowings, 23, 'sarah william');
console.log(eurowings);

book.call(lufthansa, 300, 'arafat ali');
console.log(lufthansa);

const swiss = {
  airline: 'swiss air line',
  iataCode: 'SW',
  bookings: [],
};
book.call(swiss, 500, 'Romana akter');
console.log(swiss);

//apply method
const flightData = [500, 'Jahangir alam'];
book.apply(swiss, flightData);
console.log(swiss);
//same as apply
book.call(swiss, ...flightData);
//bind
const bookEW = book.bind(eurowings); //bookEW already has this keyword set in stone
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven williams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('farhana alam');
bookEW23('sadman');

//with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //this will point to where event attached to means button
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane()//now this will point to lufthansa
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //bind will return a function.this will point to lufthansa

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //first arg is this keyword.here it doesnt need,preset (0.23)is first arg from addTax
//addVAT=value=>value+value*0.23   exactly same as prev line
console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//function returning function
const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax1(0.23);
console.log(addVAT2(100));

/*
//function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeting = greet('hi'); //greeting variable is actually a function
greeting('japse'); //hi japse
greeting('afif'); //hi afif ...it works because of closure
greet('hello')('arafat'); //this gonna work in one line

//same function using arrow
const greet1 = greeting => name => console.log(`${greeting} ${name}`);
greet1('hi')('abbu');
/*
//function accepting other function(callback) as input
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //javascriptisthebest
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//higher order function
const transformer = function (str, fn) {
  console.log(`original string:${str}`); //original string:javascript is the best
  console.log(`transformed string:${fn(str)}`); //transformed string:JAVASCRIPT is the best
  console.log(` transformed by:${fn.name}`); //function has also property besides method.transformed by:upperFirstWord
};
transformer('javascript is the best', upperFirstWord);
transformer('javascript is the best', oneWord);

//js uses callback all the time
const high5 = function () {
  console.log('heeyyyyyyy');
};
document.body.addEventListener('click', high5);
['japse', 'afif', 'sakib'].forEach(high5);//3 heeyyyyyyy


/*how passing arg works in function
const flight = 'LH234';
const japse = {
  name: 'japse',
  passport: 6363656531,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //shouldnt change .just to understand
  passenger.name = 'Mrs ' + passenger.name;

  if (passenger.passport === 6363656531) {
    alert('check in ');
  } else {
    alert('passport is incorrect');
  }
};
checkIn(flight, japse);
console.log(flight); //LH234,doesn't change.
console.log(japse); //changed to mrs cause object

const namPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000); //changes the original one
};
namPassport(japse);
checkIn(flight, japse); //incorrect,2 functions manipulating the same object

//default parameter in function
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   //es5 default
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum, //object literal
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123'); //default
createBooking('LH123', 2, 800); //default will not evaluate;
createBooking('LH123', 3); //calculted from default
createBooking('LH123', undefined, 100); //if u want to leave the 2nd arg*/

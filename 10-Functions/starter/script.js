'use strict';

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

book.call(swiss, ...flightData);

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

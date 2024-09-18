'use strict';
//how passing arg works in function
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
  person.passport = Math.trunc(Math.random() * 100000000);
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
createBooking('LH123', undefined, 100); //if u want to leave the 2nd arg

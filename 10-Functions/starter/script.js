'use strict';
/*
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

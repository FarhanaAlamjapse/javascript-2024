'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 2,
    time = 3,
    address = 'ctg',
    mainIndex = 0,
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}}`
    );
  },
};
restaurant.orderDelivery({
  time: '8',
  address: 'pekua',
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 2,
});
//destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//new variable name helpful dealing with 3rd party data
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting a default value in object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 6, b: 3, c: 9 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  //   fri: { open, close },
  // } = openingHours;
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
//destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories; //skip the 2nd element
console.log(main, secondary);

// //switch normally
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switch using destructuring a lot easier
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values when we dont know the length of array
//const [p, q, r] = [8.9];
console.log(p, q, r); //r is undefined
//to solve this:
const [p=1, q=1, r=1] = [8.9];
console.log(p, q, r);  //r=1*/

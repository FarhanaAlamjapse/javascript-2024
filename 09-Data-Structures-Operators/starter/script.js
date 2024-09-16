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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
//short circuiting
//or operator:use any data type,return any data type,short circuiting
console.log(3 || 'japse'); //get 1st truthy and return it
console.log('' || 'japse'); //japse cause 1st one is falsy
console.log(true || 0);
console.log(undefined || null); //both falsy but return last one
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numbGuests = 23;
const guest1 = restaurant.numbGuests ? restaurant.numbGuests : 10;
console.log(guest1);
const guest2 = restaurant.numbGuests || 10; //do short circuiting
console.log(guest2);

//and operator
console.log(0 && 'jonas');
console.log(7 && 'japse');
console.log('Hello' && 23 && null && 'japse');

if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('chick', 'cheese');

/*
//rest operator
//destructuring
//spread because of right side of =
const arr = [1, 2, ...[3, 4]];

//rest because of left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//spread and rest at same time
const [pizza, coke, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, coke, otherFood);

//objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//function
const add = function (...numbers) {
  //all pack
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 6, 7, 8);
add(1, 2, 3, 4, 5, 6, 7);

const x = [5, 6, 7];
add(...x); //spread,unpacking

restaurant.orderPizza('mushroom', 'chicken', 'cheese', 'olives');
restaurant.orderPizza('mushroom');
/*
// spread operator
//before
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9); //same as prior line

const newMenu = [...restaurant.mainMenu, 'bangla food'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy like obj.assign

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterable:arrays,strings,maps,sets.not objects
const str = 'japse';
const letters = [...str, 'f'];
console.log(letters);
console.log(...str);

//passing into function
const ingredients = [
  prompt("Let's make pasta with ingredient1?"),
  prompt('ingredient2?'),
  prompt('ingredient3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //same as prior line but its easy

//es 2018 ,spread operator works on objects
const newRestaurant = { foundedIn: '2014', ...restaurant, founder: 'japse' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'bd';
console.log(restaurantCopy.name, restaurant.name);

/*
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

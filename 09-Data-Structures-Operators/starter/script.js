'use strict';

//working with strings 3
//split and join
console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Farhana Alam'.split(' ')); //['Farhana', 'Alam']

const [firstName, lastName] = 'Farhana Alam'.split(' ');
console.log("'f:'firstName, 'l:'lastName");

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' '); //Mrs. Farhana ALAM
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' '); //array so we can loop over
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); //Japse And Afif
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //alternative way
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('japse and afif');
capitalizeName('farhana alam');

//padding
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+')); //++++++++++++go to gate 23+++++
console.log('japse'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //converted number to string
  const last = str.slice(-4);
  return last.padStart(str.length, '+');
};
console.log(maskCreditCard(5654865874)); //++++++5874
console.log(maskCreditCard('67425753657348658')); //+++++++++++++8658
//repeat
const message2 = 'Bad weather ';
console.log(message2.repeat(5));

const planeInline = function (n) {
  console.log(`there are ${n} planes waiting in line ${'$'.repeat(n)}`);
};
planeInline(4); //there are 4 planes waiting in line $$$$
planeInline(6);
/*
//working with strings 2
const airline = 'Bangladesh Biman'; 
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'jApSe';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@japse.com';
const loginEmail = ' Hello@Japse.com \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //remove whitespace \n
console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim(); //can do it one line
console.log(normalizeEmail);

if (email === trimmedEmail) console.log('You are logged in');
else console.log('your email is incorrect');

//replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23.Boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A32'));
console.log(plane1.includes('boing'));
console.log(plane1.startsWith('A32'));

if (plane1.startsWith('Airbus') || plane1.endsWith('neo')) {
  console.log('Part of new airbus family');
}
//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();//convert everything to lowercase first to compare
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('your are not allowed');
  } else console.log('You welcome');
};

checkBaggage('I have a laptop,some food and pocket Knife');
checkBaggage('socks and camera');
checkBaggage('got some snacks and a gun for protection');
/*
console.log(plane[0]);
console.log(plane[1]);

console.log(plane[2]);
console.log('B368'[0]);

console.log(airline.length);
console.log('B368'.length);
console.log(airline.indexOf('g')); //first index
console.log(airline.lastIndexOf('a')); //14.last one index.space counted
console.log(airline.indexOf('Biman')); //11.entire word index
console.log(airline.indexOf('biman')); //-1 as biman not found.string is case sensitive

console.log(airline.slice(4)); //ladesh Biman--including 4(extraction will start from 4)
console.log(airline.slice(4, 7)); //lad.size=(7-4).doesnt include 7

//without hard coded like indexOf('a')..
console.log(airline.slice(0, airline.indexOf(' '))); //Bangladesh
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //biman..added +1 to remove space

console.log(airline.slice(-2)); //an
console.log(airline.slice(1, -1)); //angladesh Bima

//example
const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you are in middle seat');
  else console.log('you got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('japse'));
console.log(typeof new String('japse')); //object
console.log(typeof new String('japse').slice(1)); //string ..after operation done

/*
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
function printGoals(...players) {
  console.log(`${players.length} goals were scored `);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('davis', 'japse');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
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
};
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
  openingHours,
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
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
/*
//map without set
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours)); //array of arrays
const hours = new Map(Object.entries(openingHours));
console.log(hours);

//quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*
//map
const rest = new Map();
rest.set('name', 'rio-coffee');
rest.set(1, 'dhaka,bd'); //we can add diff type
console.log(rest.set(2, 'delhi,India'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open:D')
  .set(false, 'we are close:(');

console.log(rest.get('name')); //string
console.log(rest.get(true)); //boolean
console.log(rest.get('1')); //undefined

//dont overuse this
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
console.log(rest.has('categories'));

const arr = [1, 2];
rest.set(arr, 'test');

console.log(rest);
console.log(rest.size);
//rest.clear()
rest.delete(2);
console.log(rest);
console.log(rest.get(arr));

/*
//sets
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'Risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet); //all duplicates gone
console.log(new Set('japse')); //string is also iterable.j a p s e
console.log(orderSet.size); //3
console.log(orderSet.has('pizza')); //true..similar to include in array
console.log(orderSet.has('bread')); //false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); //1 will add
orderSet.delete('Risotto');
//orderSet.clear(); //delete all
console.log(orderSet);
//sets are iterable.we can loop over them
for (const set of orderSet) console.log(set);
//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//const staffUnique = new Set(staff);//it comes out set
const staffUnique = [...new Set(staff)]; //to make array use spread.we will unpack by ... and put them in newly constructed array []
console.log(staffUnique);
//using string to see size
console.log(new Set('japsee').size); //5
//you can also check like this
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

/*
//looping objects
//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day}`;
}
console.log(openStr);
//property values
const values = Object.values(openingHours);
console.log(values);
//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);
//key,value:key=day,value destructure {open,close}
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} We are open at ${open} and close at ${close}  `);
}

/*
//without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon.open);error

//with optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day},we open at ${open}`);
}
//methods
console.log(restaurant.order?.(0, 1) ?? "method doesn't not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

//Arrays
const users = [{ name: 'Japse', email: 'hello@jonas.io' }];
//using optional chaining
console.log(users[0]?.name ?? 'user array empty');
//without optional chaining a lot of work
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/*
//for-of-loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
console.log(menu.entries());

//logical assignment operators
const rest1 = {
  name: 'rio-coffee',
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'boat-club',
  owner: 'chairman',
};
/*
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//or assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10; //falsy,so assigned to 10
// console.log(rest1, rest2);

//nullish(null,undefined) assignment operator
rest1.numGuests ??= 10; //0 so that not null return it
rest2.numGuests ??= 10; //undefined so that assign 10
console.log(rest1, rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//and assignment operator
rest1.owner &&= '<ANONYMOUS>'; //result is better than before
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);

/*
//nullish coalescing
restaurant.numbGuests = 0;
const guest2 = restaurant.numbGuests || 10; //do short circuiting.return 10 as falsy value
console.log(guest2);
//to solve this coalescing
const guestCorrect = restaurant.numbGuests ?? 10; //now return 0..fix error
console.log(guestCorrect);
/*
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
restaurant.orderPizza && restaurant.orderPizza('chicken', 'cheese');

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

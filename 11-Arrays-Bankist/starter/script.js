'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent=0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
//console.log(containerMovements.innerHTML);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* 
//map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movementsUSD);

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD); //same in arrow

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor); //same in for loop

const movementsDescription = movements.map((mov, i) => {
  return `Movement ${i + 1}: you ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
// if (mov > 0) {
//   return `movement ${i + 1}:you deposited ${mov}`;
// } else {
//   return `movement ${i + 1}:you withdrew ${Math.abs(mov)}`;
// }

console.log(movementsDescription);
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//sets
const currenciesUnique = new Set(['USD', 'GAP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});

/*
//foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:you withdrew ${Math.abs(movement)}`);
  }
}

console.log('---ForEach-----');

movements.forEach(function (mov, i, arr) {
  //foreach higher order function which requires callback func
  if (mov > 0) {
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:you withdrew ${Math.abs(mov)}`);
  }
});

/////////////////////////////////////////////////

/*
//array methods
//slice
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //['c','d','e'] extracting at position 2.does not mutate original array.return new array
console.log(arr.slice(2, 4)); // ['c', 'd'] end parameter dont include in output
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //e last element
console.log(arr.slice(1, -1)); //['b', 'c', 'd'] extracting at 1 and extract everything except -1
console.log(arr.slice()); //shallow copy of arr
console.log(...arr); //shallow copy of arr.same as slice()

//splice
//console.log(arr.splice(2)); // ['c', 'd', 'e'] exactly same as slice
//console.log(arr);//['a', 'b'] splice mutated the arr.deleted rest elements
console.log(arr.splice(-1)); //b
console.log(arr.splice(1, 2)); //extracting from 1 to 2 elements,2nd is number of elements im splice

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['e', 'f', 'g', 'h', 'i'];
console.log(arr2.reverse()); //reverse mutate original array
console.log(arr2);

//concat
const letters = arr.concat(arr2); //doesnt mutate
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'i', 'h', 'g', 'f', 'e']
console.log([...arr, ...arr2]); //same as concat

//join
console.log(letters.join('-')); //a-b-c-d-e-i-h-g-f-e

//at method
const arr1 = [23, 11, 64];
console.log(arr1[0]); //23
console.log(arr1.at(0)); //23

//getting last array element
console.log(arr1[arr1.length - 1]); //64 whenever we get last element always subtract from the length
console.log(arr1.slice(-1)[0]); //64
console.log(arr1.at(-1)); //64
console.log('japse'.at(0));^*/

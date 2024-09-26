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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent=0
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; //slice used for copy otherwise original array changes
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}É</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}É`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}É`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}É`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}É`;
};

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
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

//event handler

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update uI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add amount
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
    inputLoanAmount = '';
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //.indexOf(23)

    //delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sort);
  sort = !sort; //flip
});

//array method practice
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2
const numDeposits10001 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits10001); //6

//using reduce
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); //we can do anything with reduce
console.log(numDeposits1000); //6

//3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);
//4.
//this is a nice title->This Is a Nice
const convertTitleCase = function (title) {
  const capitazlize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitazlize(word)))
    .join(' ');
  return capitazlize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
//prefixed ++ operator
// let a = 10;
// console.log(a++); //10 after log increment
// console.log(a); //11
let a = 10;
console.log(++a); //11 before log increment
console.log(a); //11

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//empty arrays +fill method
const x = new Array(7);
console.log(x); //[empty × 7]
console.log(x.map(() => 5)); //doesnt map still empty
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2] like slice
x.fill(1); //[1, 1, 1, 1, 1, 1, 1]
console.log(x);

arr.fill(23, 2, 6); //[1, 2, 23, 23, 23, 23, 7]
console.log(arr);

//Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1); //extaclty like map
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('É', ''))
  );
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});

/*
//sort
//strings
const owners = ['japse', 'arafat', 'poly', 'mily', 'nishat'];
console.log(owners.sort()); //['arafat', 'japse', 'mily', 'nishat', 'poly']
console.log(owners); ////['arafat', 'japse', 'mily', 'nishat', 'poly']..mutates
//numbers
console.log(movements);
//console.log(movements.sort());// [-130, -400, -650, 1300, 200, 3000, 450, 70] doesnt work.

//return <0 A,B keep order
//return >0,B,A switch order

//ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/*
//flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8] 1 level of nesting

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //2 level of nesting

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//using map then flat is a common operation
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
//flatmap comined flat and map
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //only goes 1 level deep.if it nested then use flat
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/*
//some
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//Equality
console.log(movements.includes(-130));
//condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);
//every
console.log(movements.every(mov => mov > 0)); //false
console.log(account4.movements.every(mov => mov > 0)); //true
//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));//true
console.log(movements.every(deposit));//false
console.log(movements.filter(deposit));// [200, 450, 3000, 70, 1300]

/*
//find
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const findWithdrawal = movements.find(mov => mov < 0);
console.log(findWithdrawal); //-400 only first element

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD);

/*

//challenge
const calcHumanAges = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  const adult = humanAge.filter(age => age >= 18);
  console.log(adult);

  const averageHuman = adult.reduce((acc, cur) => acc + cur, 0) / adult.length;
  return averageHuman;
};
const avg1 = calcHumanAges([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

/*
//reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//maximum with reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//filter .we can chaining here which we cant in for loop
const deposit = movements.filter(mov => mov > 0);
console.log(deposit);

//same as filter
const deposits = [];
for (const mov of movements) {
  if (mov > 0) deposits.push(mov);
}
console.log(deposits);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

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

//importing module
import './shoppingCart.js';
import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
import cart from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js'--import everything
//ShoppingCart.addToCart('bread',5)

console.log('Importing module');
addToCart('bread', 5);
console.log(tp, tq);
cart('cake', 6);

//top-level await
// console.log('start');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body }; //last el of an array
};

const lastPost = getLastPost();

//not very clean
lastPost.then(res => console.log(res));

//await
const lastPost2 = await getLastPost();
console.log(lastPost2); //here we get data

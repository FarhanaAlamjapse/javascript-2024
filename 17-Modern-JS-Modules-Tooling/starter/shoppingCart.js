//Exporting module
console.log('Exporting module');
const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 500;
const totalQuality = 20;

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
}
export { totalPrice, totalQuality as tq };

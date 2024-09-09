"use strict";

let hasDriverLicense = true;
const pastTest = true;

if (pastTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive");

//function
function logger() {
  console.log("i am japse");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 7);
console.log(appleOrangeJuice);

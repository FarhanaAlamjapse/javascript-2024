'use strict';
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName},you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh,you are a millenial,${firstName}`;
      console.log(str); //accessible look up parent scope and get firstName variable
    }
    //console.log(str);  ...not defined cause const let is block scoped.not accessible from outer scope
    console.log(millenial);
  }

  printAge();

  return age;
}
const firstName = 'japse';
calcAge(1996);

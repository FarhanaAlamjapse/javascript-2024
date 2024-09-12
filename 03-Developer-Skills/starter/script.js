// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//1
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTemperatures = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return (max = min);
};
const amplitude = calcTemperatures(temperatures);
console.log(amplitude);

//2

const calcTemperaturesNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return (max = min);
};
const amplitudeNew = calcTemperaturesNew([2, 5, 6], [8, 9, 6]);
console.log(amplitudeNew);

//debug1
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C)FIX
    value: Number(prompt("Degree celsius")),
  };

  //B)FIND
  //   console.log(measurement);
  //   console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) IDENTIFY
console.log(measureKelvin());

//challenge 4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);

//challenge 5
const calcAverage = (x, y, z) => (x + y + z) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas, scoreDolphins);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) `);
  } else {
    console.log("No team wins");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

//challenge 6

const calcTip = (bill) => {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//challenge 7
const Mark = {
  fullName: "mark miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);

if (John.bmi > Mark.bmi) {
  console.log(
    `${John.fullName} BMI ${John.bmi} is higher than ${Mark.fullName}'s ${Mark.bmi}`
  );
} else {
  console.log(
    `${Mark.fullName} BMI ${Mark.bmi} is higher than ${John.fullName}'s ${John.bmi}`
  );
}

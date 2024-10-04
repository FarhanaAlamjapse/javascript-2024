'use strict';
/*
//function constructor
//arrow func will not work as function constructor.as its dont have own this keyword
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never use this..
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const jonas = new Person('jonas', 1991);
console.log(jonas); //Person {firstName: 'jonas', birthYear: 1991, calcAge: ƒ}

//static method.not inherited
Person.hey = function () {
  console.log('Hey there');
};
Person.hey();
//jonas.hey(); //we cannot call this.because its simply not in the prototype of jonas object
//new {} is created
//function is called,this={}
//{} is linked to prototype
//function automatically return {}

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack); //Person {firstName: 'matilda', birthYear: 2017, calcAge: ƒ} Person {firstName: 'jack', birthYear: 1975, calcAge: ƒ}

console.log(jonas instanceof Person); //true

//prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); //46 we get result
matilda.calcAge(); //20
console.log(jonas.__proto__); //{calcAge: ƒ} prototype of jonas,we see functn so jonas is able to use this
console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//prototypeOfLinkedObjects
//we can set property in prototype.those arent directly instead found in prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas); //in prototype..its not own property

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false.not own.but has access because of prototype

console.log(jonas.__proto__); //{species: 'Homo Sapiens', calcAge: ƒ}

//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__); //constructor,hasownproperty
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor); //point back to person itself
console.dir(Person.prototype.constructor); //if we want to inspect func use dir

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__); //all methods.each arr will inherit these method from its prototype
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__); //constructor

//dont use this all time
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique); //created a method on prototype

//challenge Prototype:
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function (speed) {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function (speed) {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  //methods will added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`); //hey japse
  }
  get age() {
    return 2000 - this.birthYear;
  }
  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  //to fix we also need to create a getter
  get fullName() {
    return this._fullName;
  }
  //static method:use static keyword
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}
PersonCl.hey();
const japse = new PersonCl('Japse ali', 1996);
console.log(japse);

japse.calcAge();
console.log(japse.age); //4..get is like reg method we set on prototype.

console.log(japse.__proto__ === PersonCl.prototype); //true

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`); //hey japse
// }; same as in class

japse.greet();
//const afif = new PersonCl('nabhan', 2014);

//setter and getters in object
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop(); //if we dont use pop() it will give us array[300]
  },
  set latest(a) {
    //in setter one parameter must
    this.movements.push(a);
  },
};
console.log(account.latest);
account.latest = 60; //to set value like this
console.log(account.movements); //[200, 530, 120, 300, 60]

//object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};
const arafat = Object.create(PersonProto); //its linked to prototype now..manually set to obj
console.log(arafat);
arafat.name = 'arafat';
arafat.birthYear = 1993;
arafat.calcAge();

const rick = Object.create(PersonProto);
rick.init('rick', 1990);
rick.calcAge();

//Inheritance between classes:constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //in reg func call this set to undefined
  Person.call(this, firstName, birthYear); //now this point to object
  this.course = course;
};
//linking prototypes
Student.prototype = Object.create(Person.prototype); //inherits person prototype
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'cse');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__); //introduce method which is prot0type
console.log(mike.__proto__.__proto__); //calcage method form parent also prototype
console.log(mike.__proto__.__proto__.__proto__); //object prototype

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //also true cause we linked it by object.create
console.log(mike instanceof Object); //true it also in prototype chain

console.dir(Student.prototype.constructor); //points to person cause we set it by object.create

//so we need to fix
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //now points to student

//challenge of inheritance
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

//inheritance ES6 classes:
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  //methods will added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`); //hey japse
  }
  get age() {
    return 2000 - this.birthYear;
  }
  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  //to fix we also need to create a getter
  get fullName() {
    return this._fullName;
  }
  //static method:use static keyword
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study in ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${
        2024 - this.birthYear
      } years old,but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCl('Martha Jonas', 2012, 'cse');
martha.introduce();
martha.calcAge();
console.log(martha);

//Inheritance between classes:Object.create
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, courses) {
  PersonProto.init.call(this, firstName, birthYear);
  this.courses = courses;
};

StudentProto.introduce = function () {
  console.log(`Hey I am ${this.firstName} and I love ${this.courses}`);
};
const jay = Object.create(StudentProto);
jay.init('japse', 1996, 'cse');
console.log(jay);
jay.introduce();
jay.calcAge();

//public fields
//private fields
//public methods
//private methods
//static

class Account {
  //public fields (instances)
  locale = navigator.language;

  //private fields (instances)
  #movements = [];
  #pin; //just like set an empty var

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin; //we can access it and set to the value
    // this._#movements = [];
    //this.locale = navigator.language;
    console.log(`thanks for opening an account ${this.owner}`);
  }
  //public methods
  //public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; //returning acc1
  }

  withdrawal(val) {
    this.deposit(-val); //we can call other method
    return this;
  }
  //private method:#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    //#approveLoan(val)
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  static helper() {
    console.log('hello');
  }
}
const acc1 = new Account('japse', 'Taka', 1111);
// acc1.movements.push(300);//this is not better,better to create method
// acc1.movements.push(-300);//not better
acc1.deposit(500);
acc1.withdrawal(200);
acc1.requestLoan(100);
acc1._approveLoan(100);

console.log(acc1.getMovements());
console.log(acc1);

//console.log(acc1.#movements);not accessible as private field
//console.log(acc1.#pin);not accessible as private field
//Account.helper();

//chaining
acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(30)
  .requestLoan(20000)
  .withdrawal(500);
console.log(acc1.getMovements());// [500, -200, 100, 300, 500, -30, 20000, -500]*/

//challenge of inheritance 2 using es6 classes
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  //private
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
console.log(EVCl.__proto__.__proto__);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
console.log(rivian.speedUS);

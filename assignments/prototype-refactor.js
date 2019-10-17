/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(food){
    if (this.stomach.length < 10) {
        this.stomach.push(food);
      }
  }

  poop(){
    this.stomach.length = 0;
  }

  toString(){
    return `${this.name}, ${this.age}`;
  }

}

/*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    this.tank += gallons;
  }

  drive(distance) {
    let fuelNeeded = distance / this.milesPerGallon;
    if (fuelNeeded <= this.tank) {
      this.odometer += distance;
      this.tank -= fuelNeeded;
    } else {
      this.odometer += this.milesPerGallon * this.tank;
      this.tank = 0;
      return `I ran at of fuel at ${this.odometer} miles!`;
    }
  }
}

/*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
class Baby extends Person {
  constructor(name, favoriteToy){
    super(name);
    this.favoriteToy = favoriteToy;
  }

  play(){
    return `Playing with ${this.favoriteToy}`;
  }

}

/* 
    TASK 4
  
    In your own words explain the four principles for the "this" keyword below:
    1. functions within the global scope are essentially objects on the window object ans so the 'this ' keyword will point to the window when called from these functions.
    2. Whenever a method is called the object before the dot is 'this'
    3. When a constructor function is used, 'this' refers to that instance of the object that is created and returned by the constructor function.
    4. The call and apply methods allows 'this' to be explicitly defined.
  */

  lauren = new Baby("Lauren", 'ducky');

  console.log(lauren);

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}

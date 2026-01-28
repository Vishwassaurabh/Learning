/*// keyword (let ,const , var)
// variable name (container)
// value

// variable declaration and intializations
// declaration and initialization in one line:
let age = 30;

// Declaration first then Assignment :
let country;
country = "india";

// multiple declarations then assignments :
let firstName, lastName;
firstName = "vishwas";
lastName = "saurabh";

// multiple declarations in one line:
let age1 = 30,
  job = "Developer",
  country1 = "india";
console.log(age1,job,country1);
*/
//!  ----primitive data types -------
//* 1. Numbers
let age = 28;
let price = 19.99;

//* 2. Strings
let greeting = "Good morning";
//? console.log(greeting);

//* 3. Boolean
let isStudent = false;
//? console.log(typeof isStudent);

//* 4. undefined
let futureGoal;
//? console.log(typeof futureGoal);

//* 5. Null
let currentJob = null;
//? console.log(typeof currentJob);

//! ------non-primitive data type ------
//* 1. Arrays
let fruits = ["apple", "banana", "kiwi"];
let mixedData = [true, 30, 199.99, "vishwas", [1, 2, 3]];
//? console.log(fruits, mixedData);

//* 2.objects
let person = {
  firstName: "vishwas",
  lastName: "saurabh",
  age: 31,
};
//? console.log(person);

let amount = 40;
amount = 100; //reassigned
amount = 0;

const carName="honda";
carName="Benz";
console.log(carName);

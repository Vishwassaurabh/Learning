//
//Arow Function
//---

//!Basic syntax
// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;

const result = multiply(2, 3);
// console.log(result);

//!Block body Syntax
const greet = (name) => {
  return `hello,${name}`;
};
const greetfn = greet("vishwas");
// console.log(greetfn);

//! one line syntax
const greet1 = (name) => `hello,${name}`;
const greetfn1 = greet1("vishwas");

//!single parameter , no parentheses
const square = (x) => x * x;
const square1 = square(5);
// console.log(square1);

//! no parameters
const random = () => Math.random();
// console.log(random());

//!object literal return
// const getuser = () => {
//   return {
//     name: "vishwas",
//     age: 30,
//     city: "varanasi",
//   };
// };

const getuser = () => ({ name: "vishwas", age: 30, city: "varanasi" });
const getuserfn = getuser();
// console.log(getuserfn);

//=========
//'let' and 'const' in javascript
//----

//! Hoisting
//using var

// function hoistingIssues() {
//     console.log(a);
//   var a = 20;
// //   console.log(a);
// }
// hoistingIssues();

//using let

function hoistingIssues() {
  // console.log(a);
  let a = 20;
  //   console.log(a);
}
hoistingIssues();

//block scope
//using var

// for (var i = 0; i < 3; i++) {
//   //   console.log(i);
// }
// console.log(i);

//using let
for (let i = 0; i < 3; i++) {
  //   console.log(i);
}
// console.log(i);

//Immutability

//using var and let

// const x = 10;
// x = 20;
// console.log(x);

//-----
//Destruction in javascript ES6
//---

//basic
const numbers = [1, 2, 3, 4];
const [first, second, third, fourth] = numbers;
// console.log(second);
// console.log(numbers[2]);

//swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

//object destructuring

//extract user data
// const { name, age, email } = {
//   name: "vishwas",
//   age: 30,
//   email: "fullstackdevelop@gmail.com",
// };
// console.log(email);
// console.log(age);
// console.log(name);

//Destructuring in function parameters

function greets({ name, age }) {
  console.log(`Hello, ${name}, your age is ${age}`);
}
const myuser = {
  name: "vishwas",
  age: 30,
};
greets(myuser);

//Nested properties

const {
  id,
  info: { name, age }} = {
  id: 1,
  info: {
    name: " vishwas",
    age: 30,
  },
};
console.log(name);
console.log(age);


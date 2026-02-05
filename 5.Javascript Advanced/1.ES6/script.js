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
console.log(greetfn);

//! one line syntax
const greet1 = (name) => `hello,${name}`;
const greetfn1 = greet1("vishwas");

//!single parameter , no parentheses
const square = (x) => x * x;
const square1 = square(5);
console.log(square1);

//! no parameters
const random = () => Math.random();
console.log(random());

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
console.log(getuserfn);



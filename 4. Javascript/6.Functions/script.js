//! steps of creating and using a functions (function declaration)

//! Define the function (declared)
// function addnum() {
//   //! write our code
//   //! write our code in the function
//   let a = 10;
//   let b = 20;
//   let results = a + b;
//   console.log(results);
// }
// //! call /use the function //function invocation
// addnum();

//! function parameters (inputs)

// function addNumbers(a, b) {
//     let results = a + b;
//     console.log(results);
//     alert(results);
// }
// addNumbers(10, 30);
// addNumbers(100, 30); //resuable

//!  ===Return Keywoard ====

// function addNumbers(a, b) {
//   let result = a + b;
//   return result;
// }
// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans)

//! function Expression

// const addNumbers = function (a, b) {
//   let result = a + b;
//   return result;
// };
// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans);

//! Arrow function
// const addNumbers = (a, b) => {
//   let result = a + b;
//   return result;
// };

// const addNumbers = (a, b) => a + b;

// let ans = addNumbers(10, 30);
// console.log(ans);

//! Anonymous function
// IIf

// declared
// (function () {
//     console.log("Hello");
// })();

// (function (a, b) {
//   let result = a + b;
//   console.log(result);
// })(2, 3);

// ((a, b) => {
//   let result = a + b;
//   console.log(result);
// })(60, 50);

// ! Default parameters
// const multiply = function (a = 1, b = 3) {
//   const result = a * b;
//   console.log(result);
// };
// multiply(10,10);

//! =====Coding challenge : simple calculator =====
/*create a calculator that performs basic opertions like 
additions , subtraction , multiplication and division . 
use differnet types of fuction such as functions expersions and 
arrow functions for each operation */

// solution
// function additions(a, b) {
//   let result = a + b;
//   console.log(result);
// }
// additions(10, 30);

//! =======additions here===========

// function expersions

// const additions = function (a, b) {
//   let result = a + b;
//   return result;
// };
// console.log(additions(10, 3));

// arrow function
const additions = (a, b) => {
  let result = a + b;
  return result;
};
// console.log(additions(10, 5));

//! ====== Subtractions=======

// const subtraction = function (a, b) {
//   let result = a - b;
//   return result;
// };
// console.log(subtraction(40, 30));

// const subtraction = (m, n) => {
//   let result = m - n;
//   return result;
// };
// console.log(subtraction(50, 40));

//! multiplification
// const multiply = (m, n) => {
//   let result = m * n;
//   return result;
// };
// console.log(multiply(10, 20));

//! Division
// const Division = (m, n) => {
//   let result = m / n;
//   return result;
// };
// console.log(Division(30, 20));

//! ===========coding challenge : chacracter counter tool=====
/*Build a small application where user can input text and the 
tool display the length of the text convert it to Uppercase and 
Lowercase and slice or replace parts of the text.*/

// solution

//! lengths

// function counter(text) {
//   let lenght = text.length;
//   return lenght;
// }
// const result = counter("javascripts");
// console.log(result);

// ! Uppercase
// const Uppercasetext = (text) => {
//   let uppercase = text.toUpperCase();
//   return uppercase;
// };
// console.log(Uppercasetext("javascripts"));

// ! lowercase
// const Lowercasetext = (text) => {
//   let lowercase = text.toLowerCase();
//   return lowercase;
// };
// console.log(Lowercasetext("NODE.JS"));

// //! slice
// const slicecase = (text, start, end) => {
//   let slice = text.slice(start, end);
//   return slice;
// };
// console.log(slicecase("JAVASCRIPTS", 0, 2));

// //!  replace
// const replacecasetext = (text) => {
//   let replacecase = text.replace("javascripts","Reacts");
//   return replacecase;
// };
// console.log(replacecasetext("javascripts"));


// !========coding challenge : string formatter===
//design a tool that takes user input for a string and applies
//  various transformation like converting it to lowercase
// or uppercase counting characters findings a words
// index and concatenating it with another string

// ! solution

// function formatingString(str1, str2) {
//   let uppercasesStr1 = str1.toUpperCase();
//   let lowercaseStr2 = str2.toLowerCase();
//   let comined = uppercasesStr1 + " " + lowercaseStr2;
//   return comined;
// }
// console.log(formatingString("Hello", "WORLD"));

// ! =======coding challenge : BMI Calculator====
/*develop a function-based project where user input their height 
and weight and the app calculates their bmi using a function that 
returns the results add conditional statements to display health 
status based on the BMI Value.*/

const appcalculator = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "underweight";
  } else if (bmi < 24.9) {
    status = "normalweight";
  } else if (bmi < 29.9) {
    status = "overweight";
  } else {
    status = obese;
  }
  return status;
};
const bmiresult = appcalculator(6, 1.75);
console.log(bmiresult);

// ! ========== coding challenge : students grsding system ====
/*description create a simple application that accepts students
marks calculates if the students has passed failed or performed 
exceptionally based on the defined criteria .*/

//- features
//- inputs for total possible marks and marks obtained
//- calculates is the students has passed (>= 50%)
//- calculates if the students performed exceptionally (>= 80%)
//- compare the students marks agints the class average .
//- display results in a user - friendly formate.

// ! solution
function studentsgrading(totalmarks, obtainedmarks, classAverage) {
  let passedcriteria = totalmarks * 0.5; //50%
  let exceptionallycriteria = totalmarks * 0.8; //80%
  let hasPassed = obtainedmarks >= passedcriteria;
  let hasperformedExceptionally = obtainedmarks >= exceptionallycriteria;
  let isaverage=obtainedmarks>classAverage;

  return{
    hasPassed,
    hasperformedExceptionally,
    isaverage,
  };
}
const result=studentsgrading(500,410,350)
console.log(result);

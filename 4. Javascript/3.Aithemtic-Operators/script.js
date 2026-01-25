//! ====Methods ====
//* 1. tofixed

let amount = 19.393;

let results = amount.toFixed(2);
//? console.log(results);

//* isNaN

let qty = "50";
//? console.log(isNaN(qty));

//* parseFloat/ParseInt

let converedNum = parseFloat(qty);
//? console.log(converedNum);
console.log(typeof qty);

//! ======Arithmetic Operators======
//! Addition

let apples = 10;
let oranges = 5;
let totalfruits = apples + oranges;
console.log(totalfruits);

//! subtraction
let initialBalance = 1000;
let withdrawal = 200;
let remainBalance = initialBalance - withdrawal;

//! multiplication
let costperItem = 20;
let quantity = 4;
let totalcost = costperItem * quantity;

//! division
let totalDistance = 120;
let hours = 2;
let speed = totalDistance / hours;
console.log("average speed is", speed, "hours");

// ! Modulus
let totalstudents = 53;
let groupsize = 5;
let remainingtudents = totalstudents % groupsize;

// ! Exponentiation (**) : Raises one number to the power of another
let base = 2;
let power = 3;
let result = base ** power; //?2*2*2

//! Increments
let currentAge = 25;
currentAge++; // +1
// let myAge = currentAge + 1;

//! Decrements
let countDown = 10;
countDown--;
// let countDownLeft = countDown - 1;

//! --case study: Budget Mangements for a Monthly Expense Tracker--
// a user wants to track their monthly expense and saving using a simple
// javascripts program. the user has an income and serval expenses like rent,
// groceries , utilities , and entertainments . the program needs to calculates
// how much is spent how much is saved ,and what percentage of the income has been spents.
/*
scenario:
* Monthly income: $3000
* Monthly expenses : 
* Rents :$1200
* Groceries: $600
* Utilities : $300
* Entertainments : $200

! operations to be performed:

1.calculate the total expenses.
2.calculate the remaining savings after expenses 
3.calculates the percentage of income spents

*/

//step 1: Define the monthly income

let monthlyIncome = 3000;

// step 2: Expenses

let rents = 1200;
let groceries = 600;
let utilities = 300;
let entertainments = 200;

// step3: calculate the total expenses

let totalExpenses = rents + groceries + utilities + entertainments;

// step 4: calculate the remaining savings after expenses

let remainingSaving = monthlyIncome - totalExpenses;

// step 5:calculates the percentage of income spents using the division (/) and multiplication(*) operators

let percentageSpent = ((totalExpenses / monthlyIncome) * 100).toFixed(2);

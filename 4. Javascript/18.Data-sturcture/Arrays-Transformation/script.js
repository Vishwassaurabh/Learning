//! forEach()
let number = [1, 2, 3, 4];

// number.forEach(function (num) {
//   console.log(num);
// });

number.forEach(function (num) {
  const double = num * 2;
  console.log(double);
});

//Array of objects
const products = [
  { name: "laptop", stock: 5 },
  { name: "phones", stock: 6 },
  { name: "tablet", stock: 4 },
];

products.forEach((indiviualproduct) => {
  console.log(
    `product:${indiviualproduct.name},stock:${indiviualproduct.stock}`,
  );
});

//! =========map()============
//create a new array
//transform the elements

let numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("doubled", doubled);
console.log("original", numbers);

const product = [
  { name: "laptop", stock: 5, price: 5000 },
  { name: "phones", stock: 6, price: 6000 },
  { name: "tablet", stock: 4, price: 10000 },
];

// apply 10% discount on the price

const discount = product.map((product) => {
  return {
    name: product.name,
    stock: product.stock,
    price: product.price * 0.9,
  };
});

console.log(discount);

//! ======reduce()======

const number1 = [1, 2, 3, 4, 5, 6];
const totalsum = number1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
console.log(totalsum);

//calculate the total inventory value
const product1 = [
  { name: "laptop", stock: 5, price: 5000 },
  { name: "phones", stock: 6, price: 6000 },
  { name: "tablet", stock: 4, price: 10000 },
];

const totalvalue = product1.reduce(function (acc, product) {
  return acc + product.stock * product.price;
}, 0);
console.log(totalvalue);

//! ========find()==============

const numbers2 = [1, 2, 3, 4, 5, 6];
const found = numbers2.filter(function (num) {
  return num > 3;
});
console.log(found);

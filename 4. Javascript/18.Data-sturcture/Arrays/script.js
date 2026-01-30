// how to create and arrays

let fruits = ["apple", "banana", "grapes", "mango"]; //array

//push method  //? add element at last of array
fruits.push("orange");

// how to access array data
let accessapple = fruits[0];
let accessbanana = fruits[1];
let accessgrapes = fruits[2];
// console.log(accessapple);
// console.log(accessgrapes);

// pop method    //?remove last element for array
let books = ["The Habbit", "Nodejs", "HTML"];
// books.pop();
// console.log(books);

//shift method    //?remove first element for array
// books.shift();
// console.log(books);

//unshift method   //? add element at first of array
// books.unshift('javascripts');
// console.log(books);

//contact method  //? merge two arrays
const colors1 = ["red", "blue"];
const colors2 = ["green", "pink"];

// const allcolors = colors1.concat(colors2);
// console.log(allcolors);

//slice method  //? extract a part of an array
const techcompany = ["Goggle", "Apple", "Meta", "Amazon", "Microsoft"];
let allcomapny = techcompany.slice(1, 4);
// console.log(allcomapny);
// console.log(techcompany);

//.length method  //? to know the length of an array
const totalcompany = techcompany.length;
console.log(totalcompany);

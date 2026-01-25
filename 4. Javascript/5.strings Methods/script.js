// ! ways of creating strings
// single
let singleQuotesString = "Hello , this ia a string with single quotes.";

// double
let doubleQuotesString = "Hello, this is a strings with double quotes.";

// template
let templateLiteralString = `
Hello, this is a string with template literals
`;

// str.length
let strlength = doubleQuotesString.length;
console.log(strlength);

// accessing characters

let firstChar = doubleQuotesString[1];
console.log(firstChar);

// TolowerCase()

let toLowerCaseStr = doubleQuotesString.toLowerCase();

// ToUppercase()

let toUpperCaseStr = doubleQuotesString.toUpperCase();

// indexof

let possitionOfSubstring = doubleQuotesString.indexOf("double");

// slice
let slicedString = singleQuotesString.slice(7, 11);

// replace
let replacedStr = singleQuotesString.replace("Hello", "welcome");
console.log(replacedStr);

//concat
let firstName = "vishwas";
let lastname = "saurabh";
// let fullname = firstName.concat(" ",lastname);
let fullname = firstName + " " + lastname;
console.log(fullname);

// template literal
let name = "john";
let age = 20;

let greeting = `hello, ${name},your age ${age} years, good morning`;

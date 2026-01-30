// creating ob jects
const person = {
  name: "john",
  age: 30,
  city: "New York",
};

// adding properties to object
//! Dot notation
person.country = "USA";
person.isMarried = "false";

//! Bracket notation
person["job"] = "developer";
person["courses"] = ["javascripts", "nodejs", "HTML"];
// console.log(person);

//! Accessing object properties
//? Dot Notation
const personName = person.name;
const personage = person.age;
const personcourse = person.courses;
// console.log(personcourse);
// console.log(personage);

//? Bracket Notation
const personjob = person["job"];
// console.log(personjob);

//! object.keys
const keys = Object.keys(person);
// console.log(keys);

//! object.values
const car = {
  brand: "Honda",
  model: "Accord",
  year: 2026,
};

const values = Object.values(car);
// console.log(values);

//! hasOwnProperties
const hasOwnProperties = car.hasOwnProperty("brand");
// console.log(hasOwnProperties);

//! object.assign
const targetobj = { name: "Thomas" };
const sourceobj = { age: 45, city: "New York" };
const result = Object.assign(targetobj, sourceobj);
// console.log(result);

//! delete operator
// delete car.brand;
// console.log(car);

//! object.freeze
// Object.freeze(car);

// modify
car.make = "Nisaan";
console.log(car);

//! Nesting objects
const user = {
  name: "Alice",
  age: 26,
  address: {
    street: "123 Min street",
    city: "New York",
    country: {
      name: "USA",
      code: "US",
    },
  },
};

// console.log(user);

//! Access nested object properties
const userName = user.name;
// const userAddress = user.address.street;
// const CountryName = user.address.country.name;

const CountryName = user["address"]["country"]["name"];
// console.log(CountryName);

//! object is an array
const students = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "bob", age: 26, city: "sans" },
  { name: "charlie", age: 28, city: "chicago" },
];

//! Acceesing properties
const firstuser = students[0];
const seconduser = students[1];
const thirduser = students[2];
// console.log(firstuser);

//! Add new user to studentsObject
students.unshift({ name: "vishwas", age: 26, city: "Accra" });
console.log(students);

//! Modify the arrays of objects
// update user name from Alice to Cici
students[0].name = "cici";
console.log(students);

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
console.log(person);

//! Accessing object properties
//? Dot Notation
const personName = person.name;
const personage = person.age;
const personcourse = person.courses;
console.log(personcourse);
console.log(personage);

//? Bracket Notation
const personjob = person["job"];
console.log(personjob);

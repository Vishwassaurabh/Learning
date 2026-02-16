//select the list element with id "cheery"
const cherry = document.getElementById("cherry");
//select the previous sibling elements of "cherry" (should be "banana")
const previousfruit = cherry.previousElementSibling;
console.log(previousfruit);

//select the next sibling element of cherry (should be "dates")
const nextfruit = cherry.nextElementSibling;
console.log(nextfruit);


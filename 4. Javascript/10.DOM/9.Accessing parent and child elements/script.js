// Accessing parent elements

const parent = document.getElementById("parent");
// accessing the grandparent elements
const grandparent = parent.parentNode;

// accessing child elements
const firstchildEl = parent.firstChild;
const lastchildel = parent.lastChild;
console.log(lastchildel);
console.log(firstchildEl);

// accessing element childern only
const firstchildElement = parent.firstElementChild;
const lastchildElement = parent.lastElementChild;
console.log(lastchildElement);
console.log(firstchildElement);

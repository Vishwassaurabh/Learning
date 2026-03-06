//function to add two numbers

function add(a, b) {
  return a + b;
}

//function to subtract two numbers
function subtract(a, b) {
  return a - b;
}


// export default add

//Export multiple function
export default {
  add,
  subtract,
  name:"math-module",
  version:"1.0.0"
};

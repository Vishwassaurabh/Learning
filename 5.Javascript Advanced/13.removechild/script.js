//for this example, we will create a simple web page that display a list of fruits we will provide a javascripts function to remove a specific fruits based on its name.

//function to add a new fruits
function addfruits(name) {
  const ulEl = document.getElementById("fruitList");

  //*   create li elements
  const li = document.createElement("li");

  //*   add css it to
  li.className = "fruit";
  li.textContent = name;

  //*append
  ulEl.appendChild(li);
}
addfruits("apple");
addfruits("Banana");
addfruits("cherry");
addfruits("carrots");
addfruits("kivi");
addfruits("papaya");

//remove fruits function
function removefruit(name) {
  //*first select the parents
  const ulEl = document.getElementById("fruitList");
  let fruitfound = false;

  //*loop through the fruits to find the fruits
  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitfound = true;
      //remove the fruit
      ulEl.removeChild(li);
      break;
    }
  }
  document.getElementById("message").textContent = fruitfound
    ? `${name} was removed from the list `
    : `${name} not found in the list`;
}
removefruit("kivi");

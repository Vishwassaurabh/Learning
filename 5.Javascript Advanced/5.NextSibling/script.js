//get the container elements

const container = document.getElementById("container");

//get all button within  the container
const buttonEle = document.querySelectorAll("button");
console.log(buttonEle);

// loop through each button and change the text of its next sibling
buttonEle.forEach((button) => {
  const next = button.nextSibling;
  //check if the next sibling is an elements node
  console.log(next);
  if (next && next.nodeType === 3) {
    next.textContent="changed text";
  }
});

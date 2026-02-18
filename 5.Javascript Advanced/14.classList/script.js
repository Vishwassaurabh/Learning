//select the p elements
const p = document.getElementById("textElement");
// p.classList.add('highlight',"bold","italic");
// p.classList.add('bold');
// p.classList.add('italic')

//function to add class
function addclass() {
  p.classList.add("highlight", "bold", "italic");
}

//function to remove class
function removeclass() {
  p.classList.remove("highlight", "bold", "italic");
}

//function to toggle class
function toggleclass() {
  p.classList.toggle("highlight");
}

//checkcontains
function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "contains highlight"
      : "Dose not not contain highlight",
  );
}

//replace class
function replaceclass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

//list item
function listitem() {
  alert("the first class is:" + p.classList.item(0));
}

//get value
function getvalue() {
  //   alert("the get value :" + p.classList.value);
  console.log(p.classList.value);
}

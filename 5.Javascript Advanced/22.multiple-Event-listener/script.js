//access the button element
const button = document.getElementById("actionbutton");

//single click
button.addEventListener("click", function () {
  console.log("btn was clicked");
});

// double click
button.addEventListener("dblclick", function () {
  console.log("btn was Double clicked");
});

// mouse enter click
button.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

//mouse leave
button.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

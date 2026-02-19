//?========mouse event =========
// const btnclick = document.getElementById("clickbutton");
// btnclick.addEventListener("click", function () {
//   console.log("click event is called ");
// });

function addEvent() {
  console.log("clicked event is called");
}
document.getElementById("clickbutton").addEventListener("click", addEvent);

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", (e) => {
    // console.log("double click event is called");
    console.log(this);
    console.log(e);
    
  });

document.getElementById("hoverDiv").addEventListener("mouseover", function () {
  console.log("mouseoverHandler event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseout", function () {
  console.log("mouseoutHandler event is called");
});

//? --------------keyword event-----------
document.getElementById("keyInput").addEventListener("keydown", function () {
  console.log("keydownHandler event is called");
});

document.getElementById("keyInput").addEventListener("keyup", function () {
  console.log("keyupHandler event is called");
});

document.getElementById("keyInput").addEventListener("keypress", function () {
  console.log("keypressHandler event is called");
});

//?======form event ======
document.getElementById("myForm").addEventListener("submit", function () {
  console.log("submitHandler event is called");
});

document.getElementById("formInput").addEventListener("focus", function () {
  console.log("focusHandler event is called");
});
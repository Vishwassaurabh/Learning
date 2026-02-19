//add eventr listener to the div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div clicked! Event phases" + event.eventPhase);
  },
  true,
); //capturing


//add event  listener to the ul
document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("list clicked! Event phases" + event.eventPhase);
  },
  true,
); //capturing


//add event  listener to the li
document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("Item 1 clicked! Event phases" + event.eventPhase);
  },
  false,
); //Bubbling phase

document.getElementById("item2").addEventListener(
  "click",
  function (event) {
    alert("Item 2 clicked! Event phases" + event.eventPhase);
  },
  false,
); //Bubbling phase
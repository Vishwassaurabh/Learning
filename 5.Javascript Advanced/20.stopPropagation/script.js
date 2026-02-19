//Add addeventlistener to the outer div
document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("Outer Div click! Event phase" + event.eventPhase);
  },
  false,
); //Bubbling phase

//Add addeventlistener to the middle div
document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("Middle Div click! Event phase" + event.eventPhase);
    event.stopPropagation(); //stop the event propagation
  },
  false,
); //Bubbling phase

//Add addeventlistener to the inner div
document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner Div click! Event phase" + event.eventPhase);
    event.stopPropagation(); //stop the event propagation
  },
  false,
); //Bubbling phase

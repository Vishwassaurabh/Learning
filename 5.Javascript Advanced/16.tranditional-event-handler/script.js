//=======mouse event========

document.getElementById("clickbutton").onclick = function clickButton() {
  console.log("click event is called");
};

document.getElementById("doubleClickButton").ondblclick =
  function DoubleclickButton() {
    console.log("Double click is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onmouseoverHandler() {
    console.log("hoverDiv click is called");
  };

document.getElementById("hoverDiv").onmouseout = function onmouseoutHandler() {
  console.log("hoverDivout click is called");
};

//=====keyboard event=====
document.getElementById("keyInput").onkeydown = function onkeydownpress() {
  console.log("keydown is called");
};

document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  console.log("keyupHandler is called");
};

document.getElementById("keyInput").onkeypress = function onkeypressHandler() {
  console.log("keypressHandler is called");
};

//---------------form event --------
document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  console.log("onsubmitHandler is called");
};

document.getElementById("formInput").onfocus = function onfocusHandler() {
  console.log("onfocusHandler is called");
};

document.getElementById("formInput").onblur = function onblurHandler() {
  console.log("onblurHandler is called");
};
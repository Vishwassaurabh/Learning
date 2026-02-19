//? named function for alert

function showAlert() {
  alert("show alert");
  console.log("hello");
}

//get the button elements
const alertButton = document.getElementById("alertButton");

// Add addeventlistener to the elements
alertButton.addEventListener("click", showAlert);

//? named function for removing events

function removeAlert() {
  alertButton.removeEventListener("click", showAlert);
}
// get the remove button elements
const remove = document.getElementById("removeButton");

// add addEventListener elements
remove.addEventListener("click", removeAlert);

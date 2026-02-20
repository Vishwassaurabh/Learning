//accessing the username input and submit button
const username = document.getElementById("username");
const button = document.getElementById("submitButton");

//create a custom
const usernamesubmited = new CustomEvent("usernamesubmited", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

//attach an event listener to handle the custom event
document.addEventListener("usernamesubmited", function (event) {
  console.log(`username is ${event.detail.text} has been submitted`);
});

//attach an event listener to the submit button
button.addEventListener("click", function () {
  //populate the detail property with the input value
  usernamesubmited.detail.text = username.value;
  //dispatch custom event
  document.dispatchEvent(usernamesubmited);
});

//! ====Age Checker=====
// create a project that takes in a user age and checks if they
// are eligible to vote , drink or drive displaying different message accordingly.

document.getElementById("checkbutton").addEventListener("click", function () {

  // get the value from the input field
  var age = parseInt(document.getElementById("age").value);

  //select where to display the results
  const results = document.getElementById("result");
  results.innerHTML = "";
  
  if (isNaN(age) || age < 0) {
    results.innerHTML = "Please enter a valid age";
    return;
  }

  if (age >= 18) {
    results.innerHTML += "you are eligible to vote <br/>";
  } else {
    results.innerHTML += "you are not eligible to vote <br/>";
  }

  if (age >= 21) {
    results.innerHTML += "you are eligible to drink Acahol <br/>";
  } else {
    results.innerHTML += "you are not eligible to drink Acahol <br/>";
  }

  //check for drive
  if (age >= 16) {
    results.innerHTML += "you are eligible to drive <br/>";
  } else {
    results.innerHTML += "you are not eligible to drive <br/>";
  }
});

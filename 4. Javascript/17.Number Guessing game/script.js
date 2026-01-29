const random = Math.floor(Math.random() * 10) + 1;
const feedback = document.getElementById("feedback");
let userguess;  //gloabal variable

document.getElementById("guessbtn").addEventListener("click", function () {
  //get the value from the input
  userguess = parseInt(document.getElementById("guessinput").value);

  //check the guess
  guessCheck();
});

//check guess function
function guessCheck() {
  while (userguess !== random) {
     //update the ui
    if (userguess < random) {
      feedback.textContent = "Too low, try again!";
    } else if (userguess > random) {
      feedback.textContent = "Too high, try again!";
    }
    return;
  }
  feedback.textContent = "Bravo! You guessed the correct number!";
}

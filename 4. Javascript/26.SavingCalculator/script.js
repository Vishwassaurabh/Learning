//initialize Feather icons

feather.replace();

//Roadmap step 1:select Dom elements

const goalamountInput = document.getElementById("goal-amount");
const currentSavingInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById(
  "monthly-contribution",
);
const calculatebtn = document.getElementById("calculate-btn");
const progressbar = document.getElementById("progress-bar");
const result = document.getElementById("result");

//Roadmap step2:add event listener for calculate button
calculatebtn.addEventListener("click", () => {

  //Roadmap step3:validate user input
  const goalAmount = parseFloat(goalamountInput.value);
  const currentsaving = parseFloat(currentSavingInput.value);
  const monthlyContribution = parseFloat(monthlyContributionInput.value);

  if (isNaN(goalAmount) || isNaN(currentsaving) || isNaN(monthlyContribution)) {
    result.textContent = "please enter a valid numbers.";
    result.classList.add("show");
    return;
  }

  //Roadmap step4: claculate remaining amount and months to reach goal
  const remainingAmount = goalAmount - currentsaving;
  const months = Math.ceil(remainingAmount / monthlyContribution);
  const progress = (currentsaving / goalAmount) * 100;

  //Roadmap step5: update progress bar based on current saving
  progressbar.style.width = `${progress}%`;

  //Roadmap step6: display result based on the saving progess
  result.classList.remove("show");
  setTimeout(() => {

    //roadmap step 7: Handle Ui updates and transitions for result display
    if (currentsaving >= goalAmount) {
      result.innerHTML = `"🎉Congratulation! your saving have bloomed to reach your Goal!";`;
    } else {
      result.innerHTML = `🌿 Keep nurturing your saving ! you'll reach your goal in ${months}months.`;
    }
    result.classList.add("show");

  }, 100);
});

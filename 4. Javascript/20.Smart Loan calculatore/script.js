document.addEventListener("DOMContentLoaded", () => {
  //!select the elements
  const button = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearInput = document.getElementById("years");
  //summary
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestpayment = document.getElementById("totalInterest");

  //function to the loan
  function calculateloan() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearInput.value) * 12;
    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("please enter the valid number");
      return;
    }
    //calculate monthly payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);
    if (isFinite(monthly)) {
      //calc total payment and interest
      const total = monthly * payments;
      const totalInterest = total - principal;
      //display the result
      animatevalue(monthlyPayment, 0, monthly, 1000);
      animatevalue(totalPayment, 0, total, 1000);
      animatevalue(totalInterestpayment, 0, totalInterest, 1000);
    }
  }

  //animination
  function animatevalue(elements, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      elements.textContent = current.toFixed(2);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  //bind the event to calc btn
  button.addEventListener("click", calculateloan);
});

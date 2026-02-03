//! Calc tip function

function calculateTip() {
  const billamount = parseFloat(document.getElementById("bill").value);
  const service = parseFloat(document.getElementById("service").value);
  const people = parseFloat(document.getElementById("people").value);

  //validations
  if (isNaN(billamount) || billamount <= 0) {
    alert("please enter a valid bill amount");
    return;
  }
  if (people < 1) {
    alert("please enter at least 1 person");
    return;
  }

  //calculate the value
  const tipAmount = billamount * service;
  const totalAmount = billamount + tipAmount;
  const perperson = totalAmount / people;
  const tipperperson = tipAmount / people;

  //display result with 2 decimals places
  document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent =
    `$${totalAmount.toFixed(2)}`;
  document.getElementById("perPerson").textContent = `$${perperson.toFixed(2)}`;
  document.getElementById("tipPerPerson").textContent =
    `$${tipperperson.toFixed(2)}`;
}

//add event listerner
document.getElementById("calculateBtn").addEventListener("click", calculateTip);

//calculate based on input change
const allitem = document.querySelectorAll("input , select").forEach((element)=>{
    element.addEventListener('input',calculateTip)
});



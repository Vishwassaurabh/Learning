// select the elements
const input = document.getElementById("number");
const percentag = document.getElementById("percent");
const button = document.getElementById("calculateBtn");
const percentamount = document.getElementById("percentageResult");
const finalamount = document.getElementById("finalResult");

function calculate() {
  const Input = parseFloat(input.value);
  const percentag1 = parseFloat(percentag.value);

  // validation
  if (isNaN(Input) || isNaN(percentag1)) {
    alert("please enter a valid numbers");
    return;
  }

  const result = (Input * percentag1) / 100;
  const final = Input + result;

  //inject into the dom
  percentamount.textContent = formateNumber(result);
  finalamount.textContent = formateNumber(final);
}
//format the currency
function formateNumber(amount) {
  return (
    "$" +
    amount.toLocaleString("en-Us", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
button.addEventListener("click", calculate);

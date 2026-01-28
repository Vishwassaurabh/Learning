// select button first
let addbtn = document.getElementById("addButton");
//add event
addbtn.addEventListener("click", function () {
  // select inputs + result
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("result");

  //perform calc  // convert to number and add
  let sum = parseFloat(num1) + parseFloat(num2);

  // show output (use innerHTML for icon)
  result.innerHTML = "Result <i class='fas fa-equals icon'></i>" + sum;
});

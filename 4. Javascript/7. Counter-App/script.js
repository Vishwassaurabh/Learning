// const value
let count = 0;

// select elements
const counter = document.getElementById("counter");

// event listerns

//increase by 1
document.getElementById("increase").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// decrease by 1
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// increase by 10
document.getElementById("increaseby10").addEventListener("click", () => {
  count = count + 10;
  counter.textContent = count;
});

// reset
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

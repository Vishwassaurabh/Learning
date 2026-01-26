// ! select the elements

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const reset1 = document.querySelector(".Reset");
const title = document.querySelector(".title");
const body = document.querySelector("body");

// Add event listeners
btn1.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

btn2.addEventListener("click", () => {
  title.style.fontSize = "90px";
});

reset1.addEventListener("click", () => {
  body.style.backgroundColor = "";
  title.style.fontSize = "30px";
});


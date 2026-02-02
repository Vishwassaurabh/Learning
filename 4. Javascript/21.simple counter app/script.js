//make sure the elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  //select elements
  const result = document.getElementById("counter-value");
  const incraese = document.getElementById("increase-btn");
  const decraese = document.getElementById("decrease-btn");
  const reset = document.getElementById("reset-btn");

  //global value
  let count = 0;

  //add event to the button
  incraese.addEventListener("click", () => {
    count++;
    //update the counter value
    // result.textContent = count;
    updateCounter();
  });

  decraese.addEventListener("click", () => {
    count--;
    //update the counter value
    // result.textContent = count;
    updateCounter();
  });

  reset.addEventListener("click", () => {
    count = 0;
    //update the counter value
    // result.textContent = count;
    updateCounter();
  });

  //update counter function
  function updateCounter() {
    result.textContent = count;
  }
});

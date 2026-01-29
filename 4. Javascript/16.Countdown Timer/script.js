const startcount = () => {
  //select the data
  const timeinput = document.getElementById("timeInput").value;
  const timer = document.getElementById("timer");
  const timeRemaing = parseInt(timeinput);

  if (isNaN(timeRemaing) || timeRemaing <= 0) {
    timer.textContent = "please enter a valid  number";
    return;
  }
  //clear the previous count down text
  timer.textContent = `Time Left ${timeRemaing} seconds`;

  for (let i = timeRemaing; i >= 0; i--) {
    (function (count) {
      setTimeout(
        () => {
          if (count > 0) {
            timer.textContent = `Time Left: ${count} seconds`;
          } else {
            timer.textContent = "Time's up!";
          }
        },
        (timeRemaing - count) * 1000,
      );
    })(i);
  }
};

document.getElementById("startbtn").addEventListener("click", startcount);

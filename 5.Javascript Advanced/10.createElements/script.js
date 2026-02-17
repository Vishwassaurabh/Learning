//function to create a new task

function createtask(newTask) {
  //*create a new div element to hold the task
  const taskEl = document.createElement("div");

  //*add new css created elements
  // taskEl.setAttribute('class','task');
  taskEl.className = "task";

  //*create a text node containing the task text
  const taskTextEl = document.createTextNode(newTask);

  //*appened the text node to the div elements
  taskEl.appendChild(taskTextEl);

  //*finally appened the task to the container div
  document.getElementById("container").appendChild(taskEl);

  //   console.log(taskTextEl);
  //   console.log(taskEl);
}
createtask("programing");
createtask("Go To Shoping");

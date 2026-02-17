//lets create a complex example that demonstrates the use of `insertBefore` to mange a list students based on their grades. in this example we'll keep the list sorted based on the grade of each student. as new students are added they will be inserted in the correct position to maintain the sorted list .

//function to add new students
function addStudent(name, garde) {
  //create a new div elements to hold the student info
  const studentEl = document.createElement("div");

  //add css to it
  studentEl.className = "student";

  //create a text node containg the student name and grade
  const studentTextNode = document.createTextNode(`${name}:${garde}`);

  //appened the text node to the div elements
  studentEl.appendChild(studentTextNode);

  //select the container
  const container = document.getElementById("studentList");

  let beforeNode = null;

  //loop through existing students to find the correct position for the new student
  for (const child of container.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);

    if (garde < childGrade) {
      beforeNode = child;
      break;
    }
  }

  //insert the new student in the correct position
  container.insertBefore(studentEl, beforeNode);

  console.log(container.children);
}
addStudent("Akash", 90);
addStudent("Gurmeet", 80);
addStudent("Emma", 70);
addStudent("Thomas", 100);

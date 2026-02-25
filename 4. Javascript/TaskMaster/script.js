//get todos from localstorage or initialize empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentfilter = "all";
// Function to save todos to localstorage
function savetodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//function to render todos
function renderTodos() {
  const todolist = document.getElementById("todoList");
  todolist.innerHTML = "";

  const filteredTodo = todos.filter((todo) => {
    if (currentfilter === "completed") return todo.completed;
    if (currentfilter === "pending") return !todo.completed;
    return true;
  });

  filteredTodo.forEach((todo, index) => {
    const li = document.createElement("li");

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
    <div class="todo-content">
    <span class="todo-text">${todo.text}</span>
    </div>

    <div class="todo-actions">
    <button data-index="${index}" class="action-btn complete-btn"><i class="fas ${todo.completed ? "fa-rotate-left" : "fa-check"}"></i></button>
    </div>

    <div class="todo-actions">
    <button data-index="${index}" class="action-btn delete-btn"><i class="fas fa-trash"></i></button>
    </div>
    `;

    todolist.appendChild(li);
  });
}
//function to add new todo
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (text) {
    todos.push({
      text: text,
      completed: false,
    });
  }
  input.value = "";
  savetodos();
  renderTodos();
}

//function to toggle todo completion
function Toggletodo(index) {
  todos[index].completed = !todos[index].completed;
  savetodos();
  renderTodos();
}

//function to delete todo
function deletetodo(index) {
  todos.splice(index, 1);
  renderTodos();
  savetodos();
}

//add event listeners
document.getElementById("addTodoBtn").addEventListener("click", addTodo);

document
  .getElementById("addTodoBtn")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

document.getElementById("todoList").addEventListener("click", function (e) {
  const target = e.target.closest("button");
  if (!target) return;

  const todoIndex = parseInt(target.dataset.index);

  if (target.classList.contains("complete-btn")) {
    Toggletodo(todoIndex);
  } else if (target.classList.contains("delete-btn")) {
    deletetodo(todoIndex);
  }
});
//add filters functionality
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // change active button style
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // change filter
    currentfilter = btn.dataset.filter;

    // re-render todos
    renderTodos();
  });
});

//add event listeners

//initial render
renderTodos();

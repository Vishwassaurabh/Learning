import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(""); //input value

  //Initialize from Localstorage immediately
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }); //list of todos

  //load todos from localstorage on first render
  //save todos into localstorage whenever list change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //function to add todo
  const handleAdd = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("Todo is requreid");
      return;
    }

    const newTodo = { id: Date.now(), text: todo };

    //update the state
    setTodos([...todos, newTodo]);

    //clear
    setTodo("");
  };

  //delete handler
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h1>My Todo list</h1>

      <form onSubmit={handleAdd}>
        <input
          style={{ padding: "8px", width: "70%" }}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          style={{ padding: "8px 12px", marginLeft: "10px", marginTop: "10px" }}
        >
          Add Todo
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: "0px", marginTop: "1.5rem" }}>
        {todos.map((todo) => {
          return (
            <li
              style={{
                background: "#f5f5f5",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "4px",
              }}
              key={todo.id}
            >
              {todo.text}
              <button  onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;

import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import { getAllTodos } from "./api-helpers/api-helpers";
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodos(data.todos);
        console.log(todos);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmitNewTodo = async(event) => {
    event.preventDefault();
    try {
      // Send new todo to backend
      const response = await axios.post("http://localhost:3000/todo/add", { todoitem: newTodo });
      // Add new todo to UI state
      setTodos([...todos, response.data]);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmitNewTodo}>
        <input value={newTodo} onChange={handleChangeNewTodo} />
        <button type="submit">Add Task</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.todoitem} todo={todo.todoitem} />
      ))}
    </div>
  );
}

export default App;

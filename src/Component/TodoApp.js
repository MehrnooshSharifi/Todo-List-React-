import { useEffect, useState } from "react";
import "../App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status , setStatus] = useState("All");
  useEffect(()=>{
    filterTodos(status)
  },[todos , status])

  const addTodo = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(id, index);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    console.log(selectedTodo);
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    // console.log(status);
    switch (status) {
      // case "All" : setFilteredTodos(todos)
      // break;
      case "Completed":
        setFilteredTodos(todos.filter((todo)=>todo.isCompleted));
        break;
      case "UnCompleted":
        setFilteredTodos(todos.filter((todo)=>!todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  const selectHandler=(e)=>{
    setStatus(e.target.value);
    filterTodos(e.target.value);
};
  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        status={status}
        onSelect={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;

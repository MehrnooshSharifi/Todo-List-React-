import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter Todo!");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          ref={inputRef}
          type="text"
          onChange={changeHandler}
          value={input}
          placeholder={props.edit ? "Update Todo..." : "Add New Todo"}
        />
        <button className={`btn ${props.edit? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;

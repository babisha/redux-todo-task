import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../todo/todo-slice";
import { useNavigate } from "react-router-dom";
import { TodoList } from "./TodoList";

function AddTodo() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <>
      <div className="header">
        <h1 onClick={handleHomeButtonClick}>DAILYLIST</h1>
      </div>
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your name"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
      <TodoList onDelete={handleDelete} />
    </>
  );
}

export default AddTodo;

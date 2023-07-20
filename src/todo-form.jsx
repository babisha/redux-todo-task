import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./features/todo/todo-slice";
import Button from "./components/button";
import "./App.css";

function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    let date = new Date();
    let time = date.getTime();
    e.preventDefault();
    let todoObj = {
      id: time,
      todo: value,
      completed: false,
    };
    setValue("");
    // dispatch(increment({ name: value }));
  };
  return (
    <>
      <div className="header">
        <h1>DAILYLIST</h1>
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
    </>
  );
}

export default TodoForm;

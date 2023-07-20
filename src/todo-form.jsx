import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./features/todo/todo-slice";
import Button from "./components/button";
import "./App.css";

function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(increment({ name: value }));
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button>SUBMIT</Button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../todo/todo-slice';
import { TodoList } from './TodoList'


function AddTodo() {
  const [value, setValue] = useState();
 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
         e.preventDefault();
        dispatch(addTodo({ title: value}));
    
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
    <TodoList />
    </>
  );
}
 
export default AddTodo;
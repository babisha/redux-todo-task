import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../todo/todo-slice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = (e) => {
    e.preventDefault();
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <div className="tasks">
      <form onSubmit={handleCompleteClick}>
        <input
          type="checkbox"
          className="del"
          checked={completed}
          onChange={handleCompleteClick}
        ></input>
        {title}
        <button className="del" onClick={handleDeleteClick}>
          DELETE
        </button>
      </form>
    </div>
  );
};

export default TodoItem;

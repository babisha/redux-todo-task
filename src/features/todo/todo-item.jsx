import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../todo/todo-slice";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = (e) => {
    e.preventDefault();
    dispatch(toggleComplete({ id, completed: !completed }));
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    console.log("Delete action");
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="tasks">
      <form onSubmit={handleCompleteClick}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
        ></input>
        {title}
      </form>
      <div className="del">
        <button onClick={handleDeleteClick}>
          <RiDeleteBin2Fill />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

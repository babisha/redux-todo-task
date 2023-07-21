import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todo-item";

export const TodoList = ({ onDelete }) => {
  const todos = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="tasklist">
      <div className="task-container">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem title={todo.title} completed={todo.completed} />
            {/* <button onClick={() => handleDelete(todo.id)}>DELETE</button> */}
          </li>
        ))}
      </div>
      <img
        src="https://pluspng.com/img-png/to-do-list-png-checklist-checkmark-clipboard-list-report-tasks-todo-list-icon-512.png"
        width="500px"
      />
    </div>
  );
};

// export default TodoList

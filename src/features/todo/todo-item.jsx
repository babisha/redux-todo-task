import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../todo/todo-slice";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";

const TodoItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editTodo({ id, title: editedTitle }));
    setIsEditing(false);
  };

  return (
    <div className="tasks">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <form onSubmit={handleCompleteClick}>
            <input
              className="checkBox"
              type="checkbox"
              checked={completed}
              onChange={handleCompleteClick}
            />
            {title}
          </form>
          <div className="del">
            <button onClick={handleEditClick}>
              <RiEdit2Fill />
            </button>
            <button onClick={handleDeleteClick}>
              <RiDeleteBin2Fill />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

//     <div className="tasks">
//       <form onSubmit={handleCompleteClick}>
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={handleCompleteClick}
//         ></input>
//         {title}
//       </form>
//       <div className="del">
//         <button onClick={handleDeleteClick}>
//           <RiDeleteBin2Fill />
//         </button>
//       </div>
//     </div>
//   );
// };

export default TodoItem;

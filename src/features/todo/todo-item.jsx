import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../todo/todo-slice'

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
   
    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed})
        );
    
    }
    const handleDeleteClick = () => {
        dispatch(deleteTodo({id: id}))
    }
return (
    <div className='tasks'>
        <form onSubmit={handleCompleteClick}>
            <input 
            type="checkbox" 
            className='del' 
            checked={completed}
            onChange={handleCompleteClick}>

            </input>
            {title}
            <button onClick={handleDeleteClick}>DELETE</button>
        </form>
    </div>
  );
}

export default TodoItem
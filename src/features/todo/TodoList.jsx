import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './todo-item'

export const TodoList = () => {
     const todos = useSelector((state)=> state.todo);
    

//    const todos =[
//         { id: 1, title: 'todo1', completed: false },
//         { id: 2, title: 'todo2', completed: false },
//         { id: 3, title: 'todo3', completed: false },
//         { id: 4, title: 'todo4', completed: false },
//         { id: 5, title: 'todo5', completed: false },
//     ];

return (
    <div className='task-container'>
          
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem title={todo.title} completed={todo.completed}/>
                </li>
            ))}
          
    </div>

);

};

// export default TodoList
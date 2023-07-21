import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { addTodo } from "./todo-slice";

const AddTodo = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title: value }));

   
}
return (
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type your todo' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">SUBMIT</button>
      </form> 
)
};
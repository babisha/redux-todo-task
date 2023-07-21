import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ 
    name: 'todo',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: false },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ],
    reducers : {
        addTodo: (state, action) => {
            // this will update the state
          
          const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            completed: false 
        
          
          };
        state.push(newTodo);
    },
}
});

const todoReducer = todoSlice.reducer

export const { addTodo } = todoSlice.actions
export default todoReducer
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ 
    name: 'todo',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: false },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
        { id: 6, title: 'todo5', completed: false },

    ],
    reducers : {
        addTodo: (state, action) => {
            // this will update the state
          
          const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            completed: action.payload.completed
        
          
          };
        state.push(newTodo);
        return state
    },
    toggleComplete: (state, action) => {
        const index = state.findIndex(
            (todo) => todo.id === action.payload.id
        );
        state[index].completed = action.payload.completed;
    },

    // toggleComplete: (state, action) => { 
    //     const index = state.findIndex((todo) => todo.id === action.payload.id); 
    //     if (index !== -1) { const updatedTodo = { ...state[index], completed: action.payload.completed }; 
    // return [...state.slice(0, index), updatedTodo, ...state.slice(index + 1)]; } return state; },

    
   
    deleteTodo : (state, action) => {
        return state.filter((todo)=> todo.id !== action.payload.id)
    }
}
});

const todoReducer = todoSlice.reducer


export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoReducer
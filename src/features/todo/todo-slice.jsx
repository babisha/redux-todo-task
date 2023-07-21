import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: uuidv4(), title: "Buy groceries", completed: false },
    { id: uuidv4(), title: "Make breakfast", completed: false },
    { id: uuidv4(), title: "Water plants", completed: false },
    { id: uuidv4(), title: "Call insurance", completed: false },
    { id: uuidv4(), title: "Assignment #19", completed: false },
    { id: uuidv4(), title: "File tax", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      // this will update the state

      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.push(newTodo);
      return state;
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    // toggleComplete: (state, action) => {
    //     const index = state.findIndex((todo) => todo.id === action.payload.id);
    //     if (index !== -1) { const updatedTodo = { ...state[index], completed: action.payload.completed };
    // return [...state.slice(0, index), updatedTodo, ...state.slice(index + 1)]; } return state; },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

const todoReducer = todoSlice.reducer;

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoReducer;

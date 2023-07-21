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
        id: uuidv4(),
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.push(newTodo);
      return state;
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = action.payload.completed;
      }
    },

    deleteTodo: (state, action) => {
      const todoIdToDelete = action.payload.id;
      return state.filter((todo) => todo.id !== todoIdToDelete);
    },
  },
});

const todoReducer = todoSlice.reducer;

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoReducer;

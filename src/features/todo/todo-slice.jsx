import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: uuidv4(), title: "Project 1", completed: false },
    { id: uuidv4(), title: "Project 2", completed: false },
    { id: uuidv4(), title: "Project 3", completed: false },
    { id: uuidv4(), title: "Project 4", completed: false },
    { id: uuidv4(), title: "Project 5", completed: false },
    { id: uuidv4(), title: "Project 6", completed: false },
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

    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = title;
      }
    },
  },
});
const todoReducer = todoSlice.reducer;

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoReducer;

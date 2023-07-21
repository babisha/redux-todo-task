import { useState } from "react";
import "./App.css";
import Homepage from "./homepage";
import { Route, Routes } from "react-router-dom";
import AddTodo from './features/todo/add-todo';
import TodoList from './features/todo/todo-list'

const App = () => {
  

  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
    
      </Routes>
  );
}

export default App;

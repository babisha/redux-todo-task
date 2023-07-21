import { useState } from "react";
import "./App.css";
import Homepage from "./homepage";
import { Route, Routes } from "react-router-dom";
import AddTodo from './features/todo/add-todo';



const App = () => {
return (
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/add-todo" element={<AddTodo/>}></Route>
        
      </Routes>

    );
}

export default App;

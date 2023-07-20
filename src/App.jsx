import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { increment } from "./features/todo/todo-slice";
import Homepage from "./homepage";
import { Route, Routes } from "react-router-dom";
import TodoForm from "./todo-form";

function App() {
  // const [value, setValue] = useState();

  // const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(increment({ name: value }));
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todo-form" element={<TodoForm />} />
      </Routes>

      {/* <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type your name' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">SUBMIT</button>
      </form> */}
    </>
  );
}

export default App;

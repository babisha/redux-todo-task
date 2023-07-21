import React from "react";
import "./App.css";
import Button from "./components/button";
import { useNavigate } from "react-router-dom";
import AddTodo from "./features/todo/add-todo";


function Homepage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/add-todo");
  };

  return (
    <>
      <div className="header">
        <h1>DAILYLIST</h1>
      </div>
      <div className="bg-image">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWUyaWsweGR5emE4d3IyZTltazVtOTFvM2xpM3V2ZjZhN2djaDJuMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SxFXYgj3u4dXrqOsWv/giphy.gif" />
      </div>
      <div className="primary-button">
        <button onClick={handleButtonClick}>VIEW TODO LISTS</button>
      </div>
    </>
  );
}

export default Homepage;

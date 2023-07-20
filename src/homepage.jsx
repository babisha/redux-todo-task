import React from "react";
import "./App.css";
import Button from "./components/button";

function Homepage() {
  return (
    <>
      <div className="header">
        <h1>DAILYLIST</h1>
      </div>
      <div className="bg-image">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWUyaWsweGR5emE4d3IyZTltazVtOTFvM2xpM3V2ZjZhN2djaDJuMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SxFXYgj3u4dXrqOsWv/giphy.gif" />
      </div>
      <div className="primary-button">
        <Button>View Todo Lists</Button>
      </div>
    </>
  );
}

export default Homepage;

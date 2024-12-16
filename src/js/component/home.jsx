import React, { useState } from "react";
import "/workspaces/Brenes93-semaforo-react-hello/src/styles/index.css"; 
const Home = () => {
  const [color, setColor] = useState("red");

  const gestionClick = (newColor) => {
    setColor(newColor); // Actualiza el color según el clic
  };

  return (
    <div className="luz-semaforo">
      <div
        className={`luz roja ${color === "red" ? "selected" : ""}`}
        onClick={() => gestionClick("red")}
      ></div>
      <div
        className={`luz amarilla ${color === "yellow" ? "selected" : ""}`}
        onClick={() => gestionClick("yellow")}
      ></div>
      <div
        className={`luz verde ${color === "green" ? "selected" : ""}`}
        onClick={() => gestionClick("green")}
      ></div>
    </div>
  );
};

export default Home;
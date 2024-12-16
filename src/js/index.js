// Importa React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Incluye tus estilos en el bundle de webpack
import "/workspaces/Brenes93-semaforo-react-hello/src/js/index.js";

// Importa tus propios componentes
import Home from "./component/home.jsx";

// Renderiza tu aplicación React
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);
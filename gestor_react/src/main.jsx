import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UsuariosProvider } from "./context/UsuariosContexto.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UsuariosProvider>
        <App />
      </UsuariosProvider>
    </BrowserRouter>
  </StrictMode>,
);

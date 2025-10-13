import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import CreateContext from "./context/CreateContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CreateContext>
        <App />
        <ToastContainer theme="colored" />
      </CreateContext>
    </Router>
  </StrictMode>
);

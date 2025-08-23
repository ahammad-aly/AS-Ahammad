import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateContext from "./context/CreateContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateContext>
      <App />
      <ToastContainer theme="colored" />
    </CreateContext>
  </StrictMode>
);

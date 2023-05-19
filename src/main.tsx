/* eslint-disable no-constant-condition */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App test={1 === 1 ? "Test 1" : ""} test2={2}>
      <h1>Hola que onda</h1>
    </App>
  </React.StrictMode>
);

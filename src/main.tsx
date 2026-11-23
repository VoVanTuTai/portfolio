import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/tokens.css";
import "./styles/tokens-studio.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

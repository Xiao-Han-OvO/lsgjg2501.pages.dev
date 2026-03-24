import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { TimeProvider } from "./context/TimeContext";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <TimeProvider>
        <App />
      </TimeProvider>
    </HashRouter>
  </StrictMode>
);

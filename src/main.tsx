import React from "react";
import ReactDOM from "react-dom/client";

import "@shared/ui/output.css";
import { App } from "@app/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

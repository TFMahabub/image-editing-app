import React from "react";
import ReactDOM from "react-dom/client";
import ActionValuePorvider from "./context/ActionValuePorvider.tsx";
import "./index.css";
import ImageEditPage from "./page/ImageEditPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActionValuePorvider>
      <ImageEditPage />
    </ActionValuePorvider>
  </React.StrictMode>
);

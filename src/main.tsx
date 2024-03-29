// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import GlobalStyles from "./styles/globalstyle.ts";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <App />
  </>
  // </React.StrictMode>
);

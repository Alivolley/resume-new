import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layouts/App";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <GlobalStyle />
         <App />
      </BrowserRouter>
   </React.StrictMode>
);

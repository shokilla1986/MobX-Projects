import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
*{
  margin: 5px;
  padding: 10px;
  box-sizing: border-box
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

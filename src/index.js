import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import App from "./App";

//пробую глобал стили библиотеки styled-components
const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

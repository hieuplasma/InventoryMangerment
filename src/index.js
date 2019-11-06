import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
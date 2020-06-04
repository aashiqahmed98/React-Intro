// This is the entry point of the React-app

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// Components

// import App from "./App";
// import Counters from "./components/counters";
// import Counter from './components/counterComponent';
import App1 from "./App1";

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

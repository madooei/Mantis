import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "simplebar/src/simplebar.css";
import "assets/styles/apex-chart.css";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/free">
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

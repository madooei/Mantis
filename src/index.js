import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "simplebar/src/simplebar.css";
import { Provider as ReduxProvider } from "react-redux";
import "assets/third-party/apex-chart.css";
import App from "./App";
import { store } from "store";

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/free">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root")
);

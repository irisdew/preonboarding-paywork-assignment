import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "redux/store";
import App from "App";
import { reset } from "styles/reset";
import { Global } from "@emotion/react";

ReactDOM.render(
  <Provider store={store}>
    <Global styles={reset} />
    <App />
  </Provider>,
  document.getElementById("root")
);

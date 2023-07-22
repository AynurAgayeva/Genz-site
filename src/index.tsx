
import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import "./sass/style.css";
import configureStore from "./manager/store/configureStore";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/actions/blogAction";
const store = configureStore();

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<div
    className="d-flex align-items-center justify-content-center "
    style={{ height: "100vh" }}
  >
    <img 
      src="https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif"
      alt=""
    />
  </div>, document.getElementById("root"));

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});



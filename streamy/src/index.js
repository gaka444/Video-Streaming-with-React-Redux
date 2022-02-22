import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

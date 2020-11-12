import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
/* import store from "./redux/store"; */
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

let store = configureStore().store;
let persistor = configureStore().persistor;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

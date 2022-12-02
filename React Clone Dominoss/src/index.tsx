import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, {persistor} from './redux/store'
import { PersistGate } from "redux-persist/integration/react";
import './firebase'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

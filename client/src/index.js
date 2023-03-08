import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// hay que envolver siempre con provider sino no funcionara el store
const root = ReactDOM.createRoot(document.getElementById("root")); // 'ReactDOM: se encarga de actualizar el dom'
root.render(
  // 'Actualiza el interfaz del usuario'
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 'conjunto de metricas utiles que capturan la experiencia del usuario de una pag web.'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TripContextProvider from "./contexts/TripContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <TripContextProvider>
          <App />
        </TripContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

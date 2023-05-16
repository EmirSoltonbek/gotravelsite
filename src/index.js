import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TripContextProvider from "./contexts/TripContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import CreditCardProvider from "./contexts/CreditCardProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CreditCardProvider>
        <CartContextProvider>
          <TripContextProvider>
            <App />
          </TripContextProvider>
        </CartContextProvider>
      </CreditCardProvider>
    </BrowserRouter>
  </React.StrictMode>
);

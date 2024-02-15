import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> {/* envuelvo toda la aplicacion en el provider asi puedo usar el store en todos lados */}
     <PersistGate persistor={persistor}> {/* y tambien la envuelvo en el con el persistGate para poder usar el local storage */}
    
    <BrowserRouter> {/* la app debe estar envuelta por BrowserRouter asi se puede acceder a todos los links */}
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
);



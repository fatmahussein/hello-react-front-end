import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"
import store from "./components/store";

function Application() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    
    );
  }
export default Application;
import React from "react";
import Routes from "./routes";
import "./styles/globalStyles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles/embla.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

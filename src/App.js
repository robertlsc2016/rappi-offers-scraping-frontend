import React, { useState } from "react";
import Routes from "./routes";
import "./styles/globalStyles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles/embla.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

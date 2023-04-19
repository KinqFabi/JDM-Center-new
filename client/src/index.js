import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF",
    },
    black: {
      main: "#000000",
    },
    dark: {
      main: "#2b2b2b",
    },
    red: {
      main: "#e63946",
    },
    light: {
      main: "#f1faee",
    },
    blue: {
      main: "#a8dadc",
    },
    medium_blue: {
      main: "#457b9d",
    },
    dark_blue: {
      main: "#1d3557",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

export default theme;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

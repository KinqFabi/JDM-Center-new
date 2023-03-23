import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000000',
    },
    gray: {
      main: '#E5E5E5',
    },
    orange: {
      main: '#FCA311',
    },
    dark_blue: {
      main: '#14213D',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

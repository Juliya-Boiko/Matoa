import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from 'style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/matoa">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

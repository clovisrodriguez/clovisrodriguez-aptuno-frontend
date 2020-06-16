/**
 * Dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";
/**
 * Components
 */
import App from "App";
/**
 * Others
 */
import store, { history } from "store/configureStore";
import { theme, GlobalStyle } from "styles/global";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

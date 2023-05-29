import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto-mono";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter";
import GlobalStyle from "./styles/Globalstyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

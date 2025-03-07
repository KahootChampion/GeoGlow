import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SiteThemeProvider } from "./SiteThemeContext.tsx";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <SiteThemeProvider>
        <App />
      </SiteThemeProvider>
    </ThemeProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SiteThemeProvider } from "./SiteThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteThemeProvider>
      <App />
    </SiteThemeProvider>
  </StrictMode>
);

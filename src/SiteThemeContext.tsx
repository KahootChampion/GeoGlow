import { createContext, useState } from "react";
import { LIGHT_MODE } from "./Constants";
import React from "react";

export interface SiteThemeContextProviderProps {
  children: React.ReactNode;
}

export interface ContextTypes {
  siteTheme: string;
  setSiteTheme: React.Dispatch<React.SetStateAction<string>>;
}

const SiteThemeContext = createContext<ContextTypes>({
  siteTheme: LIGHT_MODE,
  setSiteTheme: () => {},
});

const SiteThemeProvider = (props: SiteThemeContextProviderProps) => {
  const [siteTheme, setSiteTheme] = useState(LIGHT_MODE);
  return (
    <SiteThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
      {props.children}
    </SiteThemeContext.Provider>
  );
};

export { SiteThemeContext, SiteThemeProvider };

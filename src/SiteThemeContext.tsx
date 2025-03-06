import { createContext, useState } from "react";
import { LIGHTMODE } from "./Constants";

export interface SiteThemeContextProviderProps {
  children: React.ReactNode;
}

export interface ContextTypes {
  siteTheme: string;
  setSiteTheme: React.Dispatch<React.SetStateAction<string>>;
}

const SiteThemeContext = createContext<ContextTypes>({
  siteTheme: LIGHTMODE,
  setSiteTheme: () => {},
});

const SiteThemeProvider = (props: SiteThemeContextProviderProps) => {
  const [siteTheme, setSiteTheme] = useState(LIGHTMODE);
  return (
    <SiteThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
      {props.children}
    </SiteThemeContext.Provider>
  );
};

export { SiteThemeContext, SiteThemeProvider };

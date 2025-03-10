import GlobalStyle from "./styles/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SiteThemeContext } from "./SiteThemeContext";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Home from "./Components/Home/Index";

function App() {
  library.add(
    faMoon,
    faSun,
    faMagnifyingGlass,
    faCheck,
    faChevronDown,
    faChevronUp
  );
  const { siteTheme } = useContext(SiteThemeContext);
  const themeValues = {
    ...Theme,
    siteTheme,
  };
  return (
    <>
      <ThemeProvider theme={themeValues}>
        <GlobalStyle></GlobalStyle>
        <Home></Home>
      </ThemeProvider>
    </>
  );
}

export default App;

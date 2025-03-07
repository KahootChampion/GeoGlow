import GlobalStyle from "./styles/GlobalStyles";
import Header from "./Components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { useContext } from "react";
import { SiteThemeContext } from "./SiteThemeContext";
import Search from "./Components/Search";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

function App() {
  library.add(faMoon, faSun, faMagnifyingGlass);
  const { siteTheme } = useContext(SiteThemeContext);
  const themeValues = {
    ...Theme,
    siteTheme,
  };
  return (
    <>
      <ThemeProvider theme={themeValues}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Search></Search>
      </ThemeProvider>
    </>
  );
}

export default App;

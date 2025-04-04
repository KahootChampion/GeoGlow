import GlobalStyle from "./styles/GlobalStyles";
import { useContext } from "react";
import { SiteThemeContext } from "./SiteThemeContext";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Home from "./Components/Home/Index";

function Index() {
  const { siteTheme } = useContext(SiteThemeContext);
  const themeValues = {
    ...Theme,
    siteTheme,
  };
  return (
    <ThemeProvider theme={themeValues}>
      <GlobalStyle></GlobalStyle>
      <Home></Home>
    </ThemeProvider>
  );
}

export default Index;

import GlobalStyle from "./styles/GlobalStyles";
import { useContext } from "react";
import { SiteThemeContext } from "./SiteThemeContext";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Home from "./Components/Home/Index";
import { Route, Routes } from "react-router";
import Detail from "./Components/Detail";

function Index() {
  const { siteTheme } = useContext(SiteThemeContext);
  const themeValues = {
    ...Theme,
    siteTheme,
  };
  return (
    <ThemeProvider theme={themeValues}>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Detail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Index;

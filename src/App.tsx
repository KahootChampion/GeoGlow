import GlobalStyle from "./styles/GlobalStyles";
import Header from "./Components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { SiteThemeContext } from "./SiteThemeContext";

function App() {
  library.add(faMoon, faSun);
  const { siteTheme, setSiteTheme } = useContext(SiteThemeContext);

  return (
    <>
      <GlobalStyle siteTheme={siteTheme}></GlobalStyle>
      <Header></Header>
    </>
  );
}

export default App;

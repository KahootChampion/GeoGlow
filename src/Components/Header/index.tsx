import StyledTitle from "./styles/StyledTitle.js";
import { useContext } from "react";
import { SiteThemeContext } from "../../SiteThemeContext.js";
import SiteThemeToggle from "../SiteThemeToggle.js";
import StyledHeader from "./styles/StyledHeader.js";

const Header = () => {
  const { siteTheme } = useContext(SiteThemeContext);

  return (
    <StyledHeader siteTheme={siteTheme}>
      <StyledTitle> Where in the world?</StyledTitle>
      <SiteThemeToggle></SiteThemeToggle>
    </StyledHeader>
  );
};

export default Header;

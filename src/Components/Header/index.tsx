import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import StyledHeader from "./StyledHeader.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledToggle from "./styles/StyledToggle.js";
import StyledTitle from "./styles/StyledTitle.js";
import { useContext } from "react";
import { SiteThemeContext } from "../../SiteThemeContext.js";
import SiteThemeToggle from "../SiteThemeToggle.js";

const Header = () => {
  const { siteTheme, setSiteTheme } = useContext(SiteThemeContext);

  return (
    <StyledHeader siteTheme={siteTheme}>
      <StyledTitle> Where in the world?</StyledTitle>
      <SiteThemeToggle></SiteThemeToggle>
    </StyledHeader>
  );
};

export default Header;

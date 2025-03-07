import StyledTitle from "./styles/StyledTitle.js";
import { useContext } from "react";
import { SiteThemeContext } from "../../../SiteThemeContext.js";
import SiteThemeToggle from "../../SiteThemeToggle.js";
import StyledHeader from "./styles/StyledHeader.js";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle> Where in the world?</StyledTitle>
      <SiteThemeToggle></SiteThemeToggle>
    </StyledHeader>
  );
};

export default Header;

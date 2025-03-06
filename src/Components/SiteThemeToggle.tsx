import { useContext } from "react";
import { SiteThemeContext } from "../SiteThemeContext";
import { DARKMODE, LIGHTMODE } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledToggle from "./Header/styles/StyledToggle";

const SiteThemeToggle = () => {
  const { siteTheme, setSiteTheme } = useContext(SiteThemeContext);
  return (
    <StyledToggle
      onClick={(e) => {
        setSiteTheme(siteTheme === DARKMODE ? LIGHTMODE : DARKMODE);
      }}
    >
      <FontAwesomeIcon
        icon={
          siteTheme === DARKMODE
            ? ("fa-regular fa-sun" as IconProp)
            : ("fa-regular fa-moon" as IconProp)
        }
      />
      <span>{siteTheme === DARKMODE ? "Light Mode" : "Dark Mode"}</span>
    </StyledToggle>
  );
};

export default SiteThemeToggle;

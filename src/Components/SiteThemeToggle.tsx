import { useContext } from "react";
import { SiteThemeContext } from "../SiteThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledToggle from "./Header/styles/StyledToggle";

const SiteThemeToggle = () => {
  const { siteTheme, setSiteTheme } = useContext(SiteThemeContext);
  return (
    <StyledToggle
      onClick={(e) => {
        setSiteTheme(siteTheme === DARK_MODE ? LIGHT_MODE : DARK_MODE);
      }}
    >
      <FontAwesomeIcon
        icon={
          siteTheme === DARK_MODE
            ? ("fa-regular fa-sun" as IconProp)
            : ("fa-regular fa-moon" as IconProp)
        }
      />
      <span>{siteTheme === DARK_MODE ? "Light Mode" : "Dark Mode"}</span>
    </StyledToggle>
  );
};

export default SiteThemeToggle;

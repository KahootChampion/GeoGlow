import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import StyledHeader from "./StyledHeader.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledToggle from "./styles/StyledToggle.js";

const Header = () => {
  return (
    <StyledHeader>
      <h1> Where in the world?</h1>
      <StyledToggle>
        <FontAwesomeIcon
          icon={"fa-regular fa-moon" as IconProp}
          size={"xl" as SizeProp}
        />
        <h1>Dark Mode</h1>
      </StyledToggle>
    </StyledHeader>
  );
};

export default Header;

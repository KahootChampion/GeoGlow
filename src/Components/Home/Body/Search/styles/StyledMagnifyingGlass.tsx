import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { DARK_MODE } from "../../../../../Constants";

const StyledMagnifyingGlass = styled(FontAwesomeIcon)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateX(50%);
  transform: translateY(-50%);
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
`;

export default StyledMagnifyingGlass;

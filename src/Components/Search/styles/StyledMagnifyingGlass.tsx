import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { DARK_MODE } from "../../../Constants";

export interface StyledMagnifyingGlassProps {
  siteTheme: string;
}
const StyledMagnifyingGlass = styled(
  FontAwesomeIcon
)<StyledMagnifyingGlassProps>`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateX(50%);
  transform: translateY(-50%);
  color: ${(props) =>
    props.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
`;

export default StyledMagnifyingGlass;

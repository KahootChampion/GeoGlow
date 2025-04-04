import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { DARK_MODE } from "../../../../../Constants";

const StyledMagnifyingGlass = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};

  position: absolute;
  left: ${(props) => props.theme.spacing.m};
  top: 50%;
  transform: translateX(50%);
  transform: translateY(-50%);
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;

export default StyledMagnifyingGlass;

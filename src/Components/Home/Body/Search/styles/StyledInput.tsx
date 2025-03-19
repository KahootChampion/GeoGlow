import { styled } from "styled-components";
import { DARK_MODE } from "../../../../../Constants";

const StyledInput = styled("input")`
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};

  padding-left: 100px;
  flex: 1;
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  border: none;
  transition: background-color 500ms ease-out, box-shadow ease-in-out 500ms;
  border: 1px solid hsl(0, 0%, 0%, 20%);

  &:hover {
    box-shadow: ${(props) =>
      props.theme.siteTheme === DARK_MODE
        ? `5px 5px 20px 0px ${props.theme.darkModeColors.darkModeText}`
        : `5px 5px 20px 0px ${props.theme.lightModeColors.lightModeText}`};
  }

  &::placeholder {
    color: ${(props) => props.theme.siteColors.placeholder};
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: ${(props) => props.theme.siteColors.placeholder};
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
    padding-left: 50px;
  }
`;

export default StyledInput;

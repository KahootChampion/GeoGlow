import { styled } from "styled-components";
import { DARK_MODE } from "../../../Constants";

const StyledButton = styled.div`
  padding-left: ${(props) => props.theme.spacing.l};
  padding-right: ${(props) => props.theme.spacing.l};
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  transition: background-color 500ms ease-out;
  border: 1px solid hsl(0, 0%, 0%, 20%);

  &:hover {
    box-shadow: ${(props) =>
      props.theme.siteTheme === DARK_MODE
        ? `5px 5px 20px 0px ${props.theme.darkModeColors.darkModeText}`
        : `5px 5px 20px 0px ${props.theme.lightModeColors.lightModeText}`};
    cursor: pointer;
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.regular};
  }
`;

export default StyledButton;

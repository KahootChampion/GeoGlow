import { styled } from "styled-components";
import { DARK_MODE } from "../../../../../Constants";

export interface StyledSelectContainerProps {
  $isPlaceholderValue: boolean;
}

const StyledSelectContainer = styled.select<StyledSelectContainerProps>`
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  padding-left: 2em;
  padding-right: 2em;

  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  color: ${(props) =>
    props.$isPlaceholderValue
      ? props.theme.siteColors.placeholder
      : props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  transition: background-color 500ms ease-out;
  border: 1px solid hsl(0, 0%, 0%, 20%);
`;

export default StyledSelectContainer;

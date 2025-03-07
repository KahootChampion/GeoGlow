import { styled } from "styled-components";
import { DARK_MODE } from "../../../Constants";

export interface StyledInputProps {
  siteTheme: string;
}
const StyledInput = styled("input")<StyledInputProps>`
  width: 30%;
  padding-left: 50px;

  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  background-color: ${(props) =>
    props.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : `white`};
  color: ${(props) =>
    props.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  border: none;
  transition: background-color 500ms ease-out;
  border: 1px solid hsl(0, 0%, 0%, 20%);
`;

export default StyledInput;

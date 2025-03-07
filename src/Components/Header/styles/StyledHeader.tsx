import { styled } from "styled-components";
import { DARK_MODE } from "../../../Constants";

export interface StyledHeaderProps {
  siteTheme: string;
}

const StyledHeader = styled.div<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  border-bottom: 1px solid hsl(0, 0%, 0%, 20%);
  padding-left: ${(props) => props.theme.spacing.l};
  padding-right: ${(props) => props.theme.spacing.l};
  padding-top: ${(props) => props.theme.spacing.l};
  padding-bottom: ${(props) => props.theme.spacing.l};
  transition: background-color 500ms ease-out;
`;

export default StyledHeader;

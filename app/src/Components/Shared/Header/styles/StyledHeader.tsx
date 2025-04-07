import { styled } from "styled-components";
import { DARK_MODE } from "../../../../Constants";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 0%, 20%);
  padding: ${(props) => props.theme.spacing.l};
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  transition: background-color 500ms ease-out;
`;

export default StyledHeader;

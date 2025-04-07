import { styled } from "styled-components";
import { DARK_MODE } from "../../../../Constants";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 0%, 20%);
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  transition: background-color 500ms ease-out;
  padding-top: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};

  padding-left: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.s};

  @media ${(props) => props.theme.media.desktop} {
    padding: ${(props) => props.theme.spacing.l};
  }
`;

export default StyledHeader;

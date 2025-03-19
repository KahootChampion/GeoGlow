import { styled } from "styled-components";
import { DARK_MODE } from "../../../../Constants";

const StyledToggle = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.s};
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};
  outline: none;

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }

  &:hover {
    svg {
      box-shadow: ${(props) =>
        props.theme.siteTheme === DARK_MODE
          ? `5px 5px 20px 0px ${props.theme.darkModeColors.darkModeText}`
          : `5px 5px 20px 0px ${props.theme.lightModeColors.lightModeText}`};
    }
  }
`;

export default StyledToggle;

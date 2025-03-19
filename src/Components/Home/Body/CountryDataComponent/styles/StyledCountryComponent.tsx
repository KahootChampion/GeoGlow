import styled from "styled-components";
import { DARK_MODE } from "../../../../../Constants";

const StyledCountryComponent = styled.div`
  display: flex;

  flex-direction: column;
  border: 1px solid hsl(0, 0%, 0%, 20%);
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};

  &:hover {
    box-shadow: ${(props) =>
      props.theme.siteTheme === DARK_MODE
        ? `5px 5px 20px 0px ${props.theme.darkModeColors.darkModeText}`
        : `5px 5px 20px 0px ${props.theme.lightModeColors.lightModeText}`};
    transform: skewX(5deg) skewY(20deg);
    cursor: pointer;
    transition: transform ease-in-out 500ms, box-shadow ease-in-out 500ms;
  }

  font-size: ${(props) => props.theme.fontSize.mobile.regular};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.regular};
    max-width: 250px;
  }
`;
export default StyledCountryComponent;

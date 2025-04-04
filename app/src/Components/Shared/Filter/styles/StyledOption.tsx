import { styled } from "styled-components";
import { DARK_MODE } from "../../../../Constants";

const StyledOption = styled.option`
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  text-align: left;
`;

export default StyledOption;

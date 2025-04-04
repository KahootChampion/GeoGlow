import { styled } from "styled-components";
import { Select } from "radix-ui";
import { DARK_MODE } from "../../../../Constants";

const StyledContent = styled(Select.Content)`
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  transition: background-color 500ms ease-out;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;
export default StyledContent;

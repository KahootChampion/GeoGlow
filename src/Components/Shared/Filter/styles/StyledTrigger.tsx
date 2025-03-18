import { styled } from "styled-components";
import { Select } from "radix-ui";
import { DARK_MODE } from "../../../../Constants";

const StyledTrigger = styled(Select.Trigger)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  box-shadow: 0 2px 10px pink;

  &[data-placeholder] {
    color: ${(props) => props.theme.siteColors.placeholder};
  }
`;
export default StyledTrigger;

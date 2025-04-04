import { styled } from "styled-components";
import { Select } from "radix-ui";
import { DARK_MODE } from "../../../../Constants";

const StyledSelectItem = styled(Select.SelectItem)`
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30px;
  padding: 10px 35px 30px 25px;
  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-disabled] {
    color: green;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    transition: color ease-in-out 200ms;
    color: pink;
  }
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;
export default StyledSelectItem;

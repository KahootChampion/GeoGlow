import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledSelectItem = styled(Select.SelectItem)`
  font-size: 13px;
  line-height: 1;
  color: purple;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-disabled] {
    color: green;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: blue;
    color: pink;
  }
`;
export default StyledSelectItem;

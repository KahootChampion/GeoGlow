import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export default StyledItemIndicator;

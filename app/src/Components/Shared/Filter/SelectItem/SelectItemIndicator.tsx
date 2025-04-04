import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: -${(props) => props.theme.spacing.s};
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export default StyledItemIndicator;

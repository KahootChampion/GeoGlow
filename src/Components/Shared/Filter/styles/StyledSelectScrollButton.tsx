import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledSelectScrollButton = styled(Select.SelectScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: yellow;
  cursor: default;
`;
export default StyledSelectScrollButton;

import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledContent = styled(Select.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;
export default StyledContent;

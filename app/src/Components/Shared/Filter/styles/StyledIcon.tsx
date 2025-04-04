import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledIcon = styled(Select.Icon)`
  position: absolute;
  right: ${(props) => props.theme.spacing.s};
`;

export default StyledIcon;

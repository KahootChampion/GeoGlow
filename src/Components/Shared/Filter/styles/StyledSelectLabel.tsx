import { styled } from "styled-components";
import { Select } from "radix-ui";

const StyledSelectLabel = styled(Select.SelectLabel)`
  padding-left: 25px;
  padding-bottom: 25px;
  line-height: 25px;
  color: red;
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;
export default StyledSelectLabel;

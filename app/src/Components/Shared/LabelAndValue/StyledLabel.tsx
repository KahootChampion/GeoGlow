import { styled } from "styled-components";

const StyledLabel = styled.span`
  display: inline;
  font-weight: 600;

  font-size: ${(props) => props.theme.fontSize.mobile.regular};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.regular};
  }
`;
export default StyledLabel;

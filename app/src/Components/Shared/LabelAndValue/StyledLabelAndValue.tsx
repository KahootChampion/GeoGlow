import { styled } from "styled-components";

const StyledLabelAndValue = styled.div`
  display: flex;
  gap: 5px;

  font-size: ${(props) => props.theme.fontSize.mobile.regular};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.regular};
    margin-bottom: ${(props) => props.theme.spacing.s};
  }
`;
export default StyledLabelAndValue;

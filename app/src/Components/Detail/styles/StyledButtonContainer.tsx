import { styled } from "styled-components";

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.mobile.regular};
  padding-bottom: ${(props) => props.theme.spacing.l};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.regular};
  }
`;

export default StyledButtonContainer;

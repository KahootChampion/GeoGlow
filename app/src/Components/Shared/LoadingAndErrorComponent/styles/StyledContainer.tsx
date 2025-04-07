import { styled } from "styled-components";

const StyledContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.m};

  @media ${(props) => props.theme.media.desktop} {
    margin-top: ${(props) => props.theme.spacing.l};
  }
`;

export default StyledContainer;

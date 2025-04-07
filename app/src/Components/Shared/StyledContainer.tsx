import { styled } from "styled-components";

const StyledContainer = styled.div`
  padding-left: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.s};
  padding-top: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};

  @media ${(props) => props.theme.media.desktop} {
    padding-left: ${(props) => props.theme.spacing.l};
    padding-right: ${(props) => props.theme.spacing.l};
  }
`;

export default StyledContainer;

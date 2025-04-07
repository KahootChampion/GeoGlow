import { styled } from "styled-components";

const StyledFilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.m};

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.l};
  }
`;

export default StyledFilterSectionContainer;

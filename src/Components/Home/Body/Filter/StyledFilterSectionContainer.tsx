import { styled } from "styled-components";

const StyledFilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.l};

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

export default StyledFilterSectionContainer;

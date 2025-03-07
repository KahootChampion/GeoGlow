import { styled } from "styled-components";

const StyledFilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: ${(props) => props.theme.spacing.l};
`;

export default StyledFilterSectionContainer;

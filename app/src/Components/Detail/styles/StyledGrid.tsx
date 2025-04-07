import { styled } from "styled-components";

const StyledGrid = styled.div`
  @media ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default StyledGrid;

import { styled } from "styled-components";

const StyledGrid = styled.div`
  @media ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    column-gap: ${(props) => props.theme.spacing.xxl};

    grid-template-areas:
      "grid_home_title grid_home_title"
      "grid_home_left_middle grid_home_right_middle"
      "grid_home_bottom grid_home_bottom";
  }
`;
export default StyledGrid;

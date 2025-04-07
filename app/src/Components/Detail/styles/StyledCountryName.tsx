import { styled } from "styled-components";

const StyledCountryName = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  margin-bottom: ${(props) => props.theme.spacing.s};
  grid-area: grid_home_title;
`;

export default StyledCountryName;

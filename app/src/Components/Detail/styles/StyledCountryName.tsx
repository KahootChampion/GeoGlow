import { styled } from "styled-components";

const StyledCountryName = styled.h2`
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing.s};
  grid-area: grid_home_title;
  font-size: ${(props) => props.theme.fontSize.desktop.subtitle};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.title};
  }
`;

export default StyledCountryName;

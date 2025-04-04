import { styled } from "styled-components";

const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.mobile.title};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.title};
  }
`;

export default StyledTitle;

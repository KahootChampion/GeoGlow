import { styled } from "styled-components";

const StyledFlag = styled.img`
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  max-width: 100%;

  @media ${(props) => props.theme.media.desktop} {
    max-width: 35%;
  }
`;
export default StyledFlag;

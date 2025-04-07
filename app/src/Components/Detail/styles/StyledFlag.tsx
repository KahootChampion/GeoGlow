import { styled } from "styled-components";

const StyledFlag = styled.img`
  height: auto;
  aspect-ratio: 3.5 / 2;
  object-fit: cover;
  max-width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.s};

  @media ${(props) => props.theme.media.desktop} {
    max-width: 35%;
  }
`;
export default StyledFlag;

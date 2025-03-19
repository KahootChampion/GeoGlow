import styled from "styled-components";

const StyledFlag = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;

  @media ${(props) => props.theme.media.desktop} {
    max-width: 250px;
  }
`;
export default StyledFlag;

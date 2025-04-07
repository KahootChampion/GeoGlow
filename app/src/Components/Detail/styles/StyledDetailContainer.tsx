import { styled } from "styled-components";

const StyledDetailContainer = styled.div`
  @media ${(props) => props.theme.media.desktop} {
    display: flex;
    gap: ${(props) => props.theme.spacing.xxl};
  }
`;
export default StyledDetailContainer;

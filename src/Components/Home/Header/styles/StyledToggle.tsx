import { styled } from "styled-components";

const StyledToggle = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.s};
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};
  outline: none;

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;

export default StyledToggle;

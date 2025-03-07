import { styled } from "styled-components";

const StyledToggle = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.s};
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

export default StyledToggle;

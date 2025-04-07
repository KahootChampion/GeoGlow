import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const StyledBackArrow = styled(FontAwesomeIcon)`
  position: absolute;
  left: ${(props) => props.theme.spacing.s};
`;

export default StyledBackArrow;

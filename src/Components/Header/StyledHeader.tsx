import { styled } from "styled-components";
import { DARKMODE } from "../../Constants";

export interface StyledHeaderProps {
  siteTheme: string;
}

const StyledHeader = styled.div<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.siteTheme === DARKMODE ? `hsl(209, 23%, 22%)` : `white`};
  border-bottom: 1px solid hsl(0, 0%, 0%, 20%);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  transition: background-color 500ms ease-out;
`;

export default StyledHeader;

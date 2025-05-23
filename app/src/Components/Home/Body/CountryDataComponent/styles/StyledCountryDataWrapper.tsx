import { styled } from "styled-components";

const StyledCountryDataWrapper = styled.div`
  @media ${(props) => props.theme.media.desktop} {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing.l};
    justify-content: space-between;
    margin-top: ${(props) => props.theme.spacing.l};
  }
`;
export default StyledCountryDataWrapper;

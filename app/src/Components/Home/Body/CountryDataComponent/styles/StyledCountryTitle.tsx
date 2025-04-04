import { styled } from "styled-components";

const StyledCountryTitle = styled.h2`
  font-weight: 800;
  margin-left: ${(props) => props.theme.spacing.l};
  margin-right: ${(props) => props.theme.spacing.l};

  margin-top: ${(props) => props.theme.spacing.m};

  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};

  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;
export default StyledCountryTitle;

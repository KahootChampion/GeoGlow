import { createGlobalStyle } from "styled-components";
import { DARK_MODE } from "../Constants";

export interface GlobalStyleProps {
  siteTheme: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    color: ${(props) =>
      props.siteTheme === DARK_MODE
        ? props.theme.darkModeColors.darkModeText
        : props.theme.lightModeColors.lightModeText};
    background-color: ${(props) =>
      props.siteTheme === DARK_MODE
        ? props.theme.darkModeColors.darkModeBackground
        : props.theme.lightModeColors.lightModeBackground};
    transition: background-color 500ms ease-out;

  }

  html{
    overflow: hidden;
  }
`;

export default GlobalStyle;

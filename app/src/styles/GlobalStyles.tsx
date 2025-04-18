import { createGlobalStyle } from "styled-components";
import { DARK_MODE } from "../Constants";

const GlobalStyle = createGlobalStyle`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    
  }


  body {
    color: ${(props) =>
      props.theme.siteTheme === DARK_MODE
        ? props.theme.darkModeColors.darkModeText
        : props.theme.lightModeColors.lightModeText};
  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeBackground
      : props.theme.lightModeColors.lightModeBackground};
  }


`;

export default GlobalStyle;

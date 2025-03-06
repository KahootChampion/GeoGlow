import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { SiteThemeContext } from "../SiteThemeContext";
import { DARKMODE } from "../Constants";

export interface GlobalStyleProps {
  siteTheme: string;
}

let GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
        color: ${(props) => (props.siteTheme === DARKMODE ? `white` : `black`)};
    background-color: ${(props) =>
      props.siteTheme === DARKMODE ? `hsl(207, 26%, 17%)` : `hsl(0, 0%, 98%)`};
    transition: background-color 500ms ease-out;

  }
`;

export default GlobalStyle;

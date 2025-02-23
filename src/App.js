import React from "react";
import Header from "./Components/Header/index.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";

export function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header Text={"Geo Glow"}></Header>;
    </>
  );
}

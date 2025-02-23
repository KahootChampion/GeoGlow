import MyComponent from "./MyComponent";
import GlobalStyle from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <MyComponent Text={"Geo Glow"}></MyComponent>;
    </>
  );
}

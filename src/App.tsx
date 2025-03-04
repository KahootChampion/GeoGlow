import GlobalStyle from "./styles/GlobalStyles";
import Header from "./Components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function App() {
  library.add(faMoon);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>;
    </>
  );
}

export default App;

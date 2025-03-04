import GlobalStyle from "./styles/GlobalStyles";
import Header from "./Components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  library.add(fas, faTwitter, faFontAwesome, far);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>;
    </>
  );
}

export default App;

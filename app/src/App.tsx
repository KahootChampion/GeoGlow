import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faArrowLeft,
  faA,
} from "@fortawesome/free-solid-svg-icons";
import { SiteThemeProvider } from "./SiteThemeContext.tsx";
import Index from "./Index.tsx";

function App() {
  library.add(
    faArrowLeft,
    faMoon,
    faSun,
    faMagnifyingGlass,
    faCheck,
    faChevronDown,
    faChevronUp
  );

  return (
    <SiteThemeProvider>
      <Index></Index>
    </SiteThemeProvider>
  );
}

export default App;

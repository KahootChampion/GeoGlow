import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { SiteThemeProvider } from "./SiteThemeContext.tsx";
import Index from "./index.tsx";

function App() {
  library.add(
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

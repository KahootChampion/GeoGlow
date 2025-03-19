import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledSearchContainer from "./styles/StyledSearchContainer.tsx";
import StyledMagnifyingGlass from "./styles/StyledMagnifyingGlass.tsx";
import StyledInput from "./styles/StyledInput.tsx";

interface SearchProps {
  setSearchString: (searchString: string) => void;
}

const Search = ({ setSearchString }: SearchProps) => {
  return (
    <StyledSearchContainer>
      <StyledInput
        onChange={(e) => setSearchString(e.target.value)}
        type="search"
        id="Country Search"
        placeholder="Search for a country..."
      />
      <StyledMagnifyingGlass
        icon={"fa-classic fa-solid fa-magnifying-glass" as IconProp}
      />
    </StyledSearchContainer>
  );
};

export default Search;

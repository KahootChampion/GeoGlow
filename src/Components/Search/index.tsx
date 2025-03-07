import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledSearchContainer from "./styles/StyledSearchContainer";
import StyledMagnifyingGlass from "./styles/StyledMagnifyingGlass.tsx";
import StyledInput from "./styles/StyledInput.tsx";

const Search = () => {
  return (
    <StyledSearchContainer>
      <StyledInput
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

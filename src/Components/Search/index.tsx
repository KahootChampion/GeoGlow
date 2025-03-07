import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledSearchContainer from "./styles/StyledSearchContainer";
import StyledMagnifyingGlass from "./styles/StyledMagnifyingGlass.tsx";
import StyledInput from "./styles/StyledInput.tsx";
import { useContext } from "react";
import { SiteThemeContext } from "../../SiteThemeContext.tsx";
import React from "react";

const Search = () => {
  const { siteTheme } = useContext(SiteThemeContext);

  return (
    <StyledSearchContainer>
      <StyledInput
        siteTheme={siteTheme}
        type="search"
        id="Country Search"
        placeholder="Search for a country..."
      />
      <StyledMagnifyingGlass
        siteTheme={siteTheme}
        icon={"fa-classic fa-solid fa-magnifying-glass" as IconProp}
      />
    </StyledSearchContainer>
  );
};

export default Search;

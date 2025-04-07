import React, { useEffect, useState } from "react";
import Search from "./Search";
import StyledContainer from "../../Shared/StyledContainer";
import StyledFilterSectionContainer from "./Filter/StyledFilterSectionContainer";
import CountryFilter from "./Filter/RegionFilter";
import CountryDataComponent from "./CountryDataComponent";
import StyledCountryDataWrapper from "./CountryDataComponent/styles/StyledCountryDataWrapper";
import { applyFilters } from "./Filter/Filters";
import useFetchCountries, { RestCountryApiEntry } from "./useFetchCountries";
import StyledLink from "../../../StyledLink";
import StyledLoadingContainer from "./styles/StyledLoadingContainer";
import ErrorComponent from "../../Shared/Error/Index";

const Body = () => {
  const [filteredCountryData, setFilteredCountryData] = useState<
    RestCountryApiEntry[]
  >([]);
  const [searchString, setSearchString] = useState("");
  const [appliedRegionFilter, setAppliedRegionFilter] = useState("All");

  const { countryData, allRegions, error, isLoading } = useFetchCountries();

  useEffect(() => {
    const filteredData = applyFilters(
      countryData,
      searchString,
      appliedRegionFilter
    );

    setFilteredCountryData(filteredData);
  }, [countryData, searchString, appliedRegionFilter]);

  return (
    <StyledContainer>
      <StyledFilterSectionContainer>
        <Search setSearchString={setSearchString} />
        <CountryFilter
          regions={["All", ...allRegions]}
          ariaLabel="Region Filter"
          placeholder="Filter by Region"
          setAppliedRegionFilter={setAppliedRegionFilter}
        />
      </StyledFilterSectionContainer>
      <StyledLoadingContainer>
        {isLoading && <p>Loading...</p>}
        {error && <ErrorComponent errorMessage={error} />}
      </StyledLoadingContainer>
      <StyledCountryDataWrapper>
        {filteredCountryData.map((country) => {
          return (
            <StyledLink
              to={`country/${country.name.common}/?flag=${country.flags.svg}&alt=${country.flags.alt}`}
              key={country.name.common}
            >
              <CountryDataComponent {...country}></CountryDataComponent>
            </StyledLink>
          );
        })}
      </StyledCountryDataWrapper>
    </StyledContainer>
  );
};

export default Body;

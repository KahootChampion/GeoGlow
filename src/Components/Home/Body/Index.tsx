import React, { useEffect, useState } from "react";
import Search from "./Search";
import StyledContainer from "./styles/StyledContainer";
import StyledFilterSectionContainer from "./Filter/StyledFilterSectionContainer";
import CountryFilter from "./Filter/RegionFilter";
import CountryDataComponent from "./CountryDataComponent";
import StyledCountryDataWrapper from "./CountryDataComponent/styles/StyledCountryDataWrapper";
import { applyFilters } from "./Filter/Filters";
import useFetchCountries from "./useFetchCountries";

export interface RestCountryApiEntry {
  flags: { svg: string; alt: string };
  region: string;
  name: { common: string };
  population: number;
  capital: string;
}

const Body = () => {
  const [filteredCountryData, setFilteredCountryData] = useState<
    RestCountryApiEntry[]
  >([]);
  const [searchString, setSearchString] = useState("");
  const [appliedRegionFilter, setAppliedRegionFilter] = useState("All");

  const { countryData, allRegions } = useFetchCountries();

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
      <StyledCountryDataWrapper>
        {filteredCountryData.map((country, i) => {
          return (
            <CountryDataComponent key={i} {...country}></CountryDataComponent>
          );
        })}
      </StyledCountryDataWrapper>
    </StyledContainer>
  );
};

export default Body;

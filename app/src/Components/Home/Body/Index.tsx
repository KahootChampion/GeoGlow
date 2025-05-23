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
import LoadingAndErrorComponent from "../../Shared/LoadingAndErrorComponent";

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
      <LoadingAndErrorComponent
        isLoading={isLoading}
        error={error ?? ""}
      ></LoadingAndErrorComponent>
      <StyledCountryDataWrapper>
        {filteredCountryData.map((country) => {
          return (
            <StyledLink
              to={`country/${country.name.common}`}
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

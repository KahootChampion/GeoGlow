import React, { Key, useEffect, useState } from "react";
import Search from "./Search";
import StyledContainer from "./styles/StyledContainer";
import axios, { AxiosRequestConfig } from "axios";
import StyledFilterSectionContainer from "./styles/StyledFilterSectionContainer";
import CountryFilter from "./RegionFilter";
import CountryDataComponent from "./CountryDataComponent";
import StyledCountryDataWrapper from "./CountryDataComponent/styles/StyledCountryDataWrapper";

export interface RestCountryApiEntry {
  flags: { svg: string; alt: string };
  region: string;
  name: { common: string };
  population: number;
  capital: string;
}

const Body = () => {
  const [allRegions, setAllRegions] = useState<string[]>([]);
  const [countryData, setCountryData] = useState<RestCountryApiEntry[]>([]);
  const [filteredCountryData, setFilteredCountryData] = useState<
    RestCountryApiEntry[]
  >([]);
  const [searchString, setSearchString] = useState("");
  const [appliedRegionFilter, setAppliedRegionFilter] = useState("All");

  const filterBySearch = (countryData: RestCountryApiEntry[]) => {
    return countryData.filter((country) => {
      return searchString === ""
        ? true
        : country.name.common
            .toLocaleLowerCase()
            .trim()
            .startsWith(searchString.toLocaleLowerCase().trim());
    });
  };

  const filterByRegion = (countryData: RestCountryApiEntry[]) => {
    return countryData.filter((country) => {
      return appliedRegionFilter === "All"
        ? true
        : country.region.trim().toLocaleLowerCase() ===
            appliedRegionFilter.toLocaleLowerCase();
    });
  };

  useEffect(() => {
    const filteredSearch = filterBySearch(countryData);
    const filteredRegions = filterByRegion(countryData);

    const filteredData = filteredSearch.filter((searchEntry) => {
      return filteredRegions.includes(searchEntry);
    });

    setFilteredCountryData(filteredData);
  }, [searchString, appliedRegionFilter]);

  useEffect(() => {
    async function CallCountriesAPI() {
      try {
        const axiosRequestConfig: AxiosRequestConfig = {
          url: "https://restcountries.com/v3.1/all",
          timeout: 4000,
        };
        const allCountriesApiResponse = await axios(axiosRequestConfig);
        const allCountriesData: RestCountryApiEntry[] =
          allCountriesApiResponse.data;
        const sortedData = allCountriesData.sort(
          (firstCountry, secondCountry) =>
            firstCountry.name.common
              .toLocaleString()
              .localeCompare(secondCountry.name.common.toLocaleString())
        );
        setCountryData(sortedData);
        setFilteredCountryData(sortedData);
        setAllRegions(
          [...new Set(allCountriesData.map((c) => c.region))].sort()
        );
      } catch (error) {
        console.log(`Received error: ${error}`);
      }
    }
    CallCountriesAPI();
  }, []);
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

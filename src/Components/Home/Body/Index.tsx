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
  name: { common: string | Key };
  population: number;
  capital: string;
}

const Body = () => {
  const [allRegions, setAllRegions] = useState<string[]>([]);
  const [countryData, setCountryData] = useState<RestCountryApiEntry[]>([]);
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
            firstCountry.name.common.localeCompare(secondCountry.name.common)
        );
        setCountryData(sortedData);
        setAllRegions([...new Set(countryData.map((c) => c.region))].sort());
      } catch (error) {
        console.log(`Received error: ${error}`);
      }
    }
    CallCountriesAPI();
  }, []);
  return (
    <StyledContainer>
      <StyledFilterSectionContainer>
        <Search />
        <CountryFilter
          regions={allRegions}
          ariaLabel="Region Filter"
          placeholder="Filter by Region"
        />
      </StyledFilterSectionContainer>
      <StyledCountryDataWrapper>
        {countryData.map((country, i) => {
          return (
            <CountryDataComponent key={i} {...country}></CountryDataComponent>
          );
        })}
      </StyledCountryDataWrapper>
    </StyledContainer>
  );
};

export default Body;

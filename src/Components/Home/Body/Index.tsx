import React, { useEffect, useState } from "react";
import Search from "./Search";
import StyledContainer from "./styles/StyledContainer";
import axios, { AxiosRequestConfig } from "axios";
import StyledFilterSectionContainer from "./styles/StyledFilterSectionContainer";
import CountryFilter from "./RegionFilter";

export interface RestCountryApiEntry {
  flags: { svg: string; alt: string };
  region: string;
}

const Body = () => {
  const [allRegions, setAllRegions] = useState<string[]>([]);
  useEffect(() => {
    async function CallCountriesAPI() {
      try {
        const axiosRequestConfig: AxiosRequestConfig = {
          url: "https://restcountries.com/v3.1/all",
          timeout: 4000,
        };
        const allCountriesApiResponse = await axios(axiosRequestConfig);
        const allCountryData: RestCountryApiEntry[] =
          allCountriesApiResponse.data;
        setAllRegions([...new Set(allCountryData.map((c) => c.region))].sort());
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
    </StyledContainer>
  );
};

export default Body;

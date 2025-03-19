import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { RestCountryApiEntry } from "./Index";

const useFetchCountries = () => {
  const [allRegions, setAllRegions] = useState<string[]>([]);
  const [countryData, setCountryData] = useState<RestCountryApiEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function CallCountriesAPI() {
      try {
        setIsLoading(true);
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
        setAllRegions(
          [...new Set(allCountriesData.map((c) => c.region))].sort()
        );
      } catch (error) {
        setError(
          "An error was thrown while making a request to the Countries API"
        );
      } finally {
        setIsLoading(false);
      }
    }
    CallCountriesAPI();
  }, []);

  return { allRegions, countryData, isLoading, error };
};

export default useFetchCountries;

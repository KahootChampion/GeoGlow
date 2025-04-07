import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";

export interface RestCountrySpecificApiEntry {
  flags: { svg: string; alt: string };
  region: string;
  name: { common: string };
  population: number;
  capital: string;
}

const useFetchSpecificCountry = (name: string) => {
  const [countryData, setCountryData] = useState<RestCountrySpecificApiEntry[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function CallCountriesAPI() {
      try {
        setIsLoading(true);
        const axiosRequestConfig: AxiosRequestConfig = {
          url: `https://restcountries.com/v3.1/name/${name}?fullText=true`,
          timeout: 4000,
        };
        const countryApiResponse = await axios(axiosRequestConfig);
        const countryData: RestCountrySpecificApiEntry[] =
          countryApiResponse.data;
        setCountryData(countryData);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An error occurred while attempting to fetch data from the REST countries API"
        );
      } finally {
        setIsLoading(false);
      }
    }
    CallCountriesAPI();
  }, []);

  return { countryData, isLoading, error };
};

export default useFetchSpecificCountry;

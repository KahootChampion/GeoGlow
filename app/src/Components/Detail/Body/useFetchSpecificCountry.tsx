import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";

export interface RestCountrySpecificApiEntry {
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  subregion: string;
  name: { nativeName: { [key: string]: { official: string; common: string } } };
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: { name: string; symbol: string };
  };
  languages: { [key: string]: string };
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
          url: `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages`,
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

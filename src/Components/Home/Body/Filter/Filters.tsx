import { RestCountryApiEntry } from "../Index";

const filterBySearch = (country: RestCountryApiEntry, searchString: string) => {
  return searchString === ""
    ? true
    : country.name.common
        .toLocaleLowerCase()
        .trim()
        .startsWith(searchString.toLocaleLowerCase().trim());
};

const filterByRegion = (
  country: RestCountryApiEntry,
  appliedRegionFilter: string
) => {
  return appliedRegionFilter === "All"
    ? true
    : country.region.trim().toLocaleLowerCase() ===
        appliedRegionFilter.toLocaleLowerCase();
};

const applyFilters = (
  countryData: RestCountryApiEntry[],
  searchString: string,
  appliedRegionFilter: string
) => {
  return countryData.filter((country) => {
    return (
      filterBySearch(country, searchString) &&
      filterByRegion(country, appliedRegionFilter)
    );
  });
};

export { filterBySearch, filterByRegion, applyFilters };

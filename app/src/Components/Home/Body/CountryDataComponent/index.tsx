import React from "react";
import StyledCountryTitle from "./styles/StyledCountryTitle";
import CountryLabel from "./CountryLabelAndValue";
import StyledCountryInformationContainer from "./styles/StyledCountryInformationContainer";
import StyledCountryComponent from "./styles/StyledCountryComponent";
import { RestCountryApiEntry } from "../useFetchCountries";
import StyledFlag from "./styles/StyledFlag";

const CountryDataComponent = (props: RestCountryApiEntry) => {
  return (
    <StyledCountryComponent>
      <StyledFlag src={props.flags.svg} alt={props.flags.alt}></StyledFlag>
      <StyledCountryTitle>{props.name.common}</StyledCountryTitle>
      <StyledCountryInformationContainer>
        <CountryLabel
          label="Population:"
          value={props.population}
        ></CountryLabel>
        <CountryLabel label="Region:" value={props.region}></CountryLabel>
        <CountryLabel label="Capital:" value={props.capital}></CountryLabel>
      </StyledCountryInformationContainer>
    </StyledCountryComponent>
  );
};

export default CountryDataComponent;

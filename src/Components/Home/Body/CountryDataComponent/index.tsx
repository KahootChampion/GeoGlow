import React from "react";
import { RestCountryApiEntry } from "../Index";
import StyledCountryComponent from "./styles/styledCountryComponent";
import StyledCountryTitle from "./styles/StyledCountryTitle";
import StyledFlag from "./styles/styledFlag";
import StyledCountryLabel from "./styles/StyledCountryLabel";
import CountryLabel from "./CountryLabelAndValue";
import StyledCountryInformationContainer from "./styles/StyledCountryInformationContainer";

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

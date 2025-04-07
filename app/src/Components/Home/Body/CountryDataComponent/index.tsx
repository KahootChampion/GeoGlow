import React from "react";
import StyledCountryTitle from "./styles/StyledCountryTitle";
import LabelAndValue from "../../../Shared/LabelAndValue/LabelAndValue";
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
        <LabelAndValue
          label="Population"
          value={props.population}
        ></LabelAndValue>
        <LabelAndValue label="Region" value={props.region}></LabelAndValue>
        <LabelAndValue label="Capital" value={props.capital}></LabelAndValue>
      </StyledCountryInformationContainer>
    </StyledCountryComponent>
  );
};

export default CountryDataComponent;

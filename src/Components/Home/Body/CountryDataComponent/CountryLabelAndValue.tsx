import React from "react";
import StyledCountryLabel from "./styles/StyledCountryLabel";
import StyledCountryValue from "./styles/StyledCountryValue";
import StyledCountryLabelAndValue from "./styles/StyledCountryLabelAndValue";

interface CountryLabelAndValueProps {
  label: string;
  value: string | number;
}

const CountryLabelAndValue: React.FC<CountryLabelAndValueProps> = ({
  label,
  value,
}) => {
  return (
    <StyledCountryLabelAndValue>
      <StyledCountryLabel>{label} </StyledCountryLabel>
      <StyledCountryValue>{value}</StyledCountryValue>
    </StyledCountryLabelAndValue>
  );
};

export default CountryLabelAndValue;

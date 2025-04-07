import React from "react";
import StyledCountryLabel from "../../Home/Body/CountryDataComponent/styles/StyledCountryLabel";
import StyledCountryValue from "../../Home/Body/CountryDataComponent/styles/StyledCountryValue";
import StyledLabelAndValue from "./StyledLabelAndValue";

interface LabelAndValue {
  label: string;
  value: string | number;
}

const LabelAndValue: React.FC<LabelAndValue> = ({ label, value }) => {
  return (
    <StyledLabelAndValue>
      <StyledCountryLabel>{label}: </StyledCountryLabel>
      <StyledCountryValue>{value}</StyledCountryValue>
    </StyledLabelAndValue>
  );
};

export default LabelAndValue;

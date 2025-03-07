import React, { useState } from "react";
import StyledSelectContainer from "./styles/StyledSelectContainer";
import StyledOption from "./styles/StyledOption";

export interface FilterProps {
  listOfRegions: string[];
}
const Filter = (props: FilterProps) => {
  const [isPlaceholderValue, setIsPlaceholderValue] = useState(true);
  const [chosenRegion, setChosenRegion] = useState("");

  return (
    <StyledSelectContainer
      $isPlaceholderValue={isPlaceholderValue}
      value={chosenRegion}
      onChange={(e) => {
        setChosenRegion(e.target.value);
        setIsPlaceholderValue(false);
      }}
    >
      <option value="" hidden disabled selected>
        Filter by Region
      </option>
      {props.listOfRegions.map((region) => (
        <StyledOption key={region} value={region}>
          {region}
        </StyledOption>
      ))}
    </StyledSelectContainer>
  );
};

export default Filter;

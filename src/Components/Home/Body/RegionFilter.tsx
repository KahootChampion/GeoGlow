import { Select } from "radix-ui";
import StyledSelectLabel from "../../Shared/Filter/styles/StyledSelectLabel";
import StyledSelectOperator from "../../Shared/Filter/styles/StyledSelectSeparator";
import FilterComponent from "../../Shared/Filter/FilterComponent";
import StyledSelectItem from "../../Shared/Filter/SelectItem/StyledSelectItem";
import { ItemText } from "@radix-ui/react-select";

export interface FilterProps {
  ariaLabel: string;
  placeholder: string;
  regions: string[];
}

const RegionFilter = (props: FilterProps) => (
  <FilterComponent ariaLabel={props.ariaLabel} placeholder={props.placeholder}>
    <Select.Group>
      <StyledSelectLabel>Regions</StyledSelectLabel>
      <StyledSelectOperator />
      {props.regions.map((item, i) => {
        return (
          <StyledSelectItem key={i} value={item}>
            <ItemText> {item} </ItemText>
          </StyledSelectItem>
        );
      })}
    </Select.Group>
  </FilterComponent>
);

export default RegionFilter;

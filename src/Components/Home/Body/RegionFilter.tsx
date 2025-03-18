import { Select } from "radix-ui";
import StyledSelectLabel from "../../Shared/Filter/styles/StyledSelectLabel";
import StyledSelectOperator from "../../Shared/Filter/styles/StyledSelectSeparator";
import FilterComponent from "../../Shared/Filter/FilterComponent";
import StyledSelectItem from "../../Shared/Filter/SelectItem/StyledSelectItem";
import { ItemText } from "@radix-ui/react-select";
import CustomSelectItem from "../../Shared/Filter/SelectItem/CustomSelectItem";

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
          <CustomSelectItem key={i} value={item}>
            {item}
          </CustomSelectItem>
        );
      })}
    </Select.Group>
  </FilterComponent>
);

export default RegionFilter;

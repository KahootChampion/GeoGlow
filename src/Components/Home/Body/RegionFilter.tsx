import FilterComponent from "../../Shared/Filter/FilterComponent";
import CustomSelectItem from "../../Shared/Filter/SelectItem/CustomSelectItem";

export interface FilterProps {
  ariaLabel: string;
  placeholder: string;
  regions: string[];
  setAppliedRegionFilter: (value: string) => void;
}

const RegionFilter = (props: FilterProps) => (
  <FilterComponent
    onValueChange={props.setAppliedRegionFilter}
    ariaLabel={props.ariaLabel}
    placeholder={props.placeholder}
  >
    {props.regions.map((item, i) => {
      return (
        <CustomSelectItem key={i} value={item}>
          {item}
        </CustomSelectItem>
      );
    })}
  </FilterComponent>
);

export default RegionFilter;

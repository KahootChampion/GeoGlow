import * as React from "react";
import { Select } from "radix-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledTrigger from "./styles/StyledTrigger";
import StyledContent from "./styles/StyledContent";
import StyledViewport from "./styles/StyledViewport";

import StyledIcon from "./styles/StyledIcon";

export interface FilterProps {
  ariaLabel: string;
  placeholder: string;
  children: React.ReactNode;
  onValueChange: (value: string) => void;
}

const FilterComponent = (props: FilterProps) => (
  <Select.Root onValueChange={(e) => props.onValueChange(e)}>
    <StyledTrigger aria-label={props.ariaLabel}>
      <Select.Value placeholder={props.placeholder} />
      <StyledIcon>
        <FontAwesomeIcon
          icon={"fa-classic fa-solid fa-chevron-down" as IconProp}
        />
      </StyledIcon>
    </StyledTrigger>
    <Select.Portal>
      <StyledContent position="popper">
        <StyledViewport>{props.children}</StyledViewport>
      </StyledContent>
    </Select.Portal>
  </Select.Root>
);

export default FilterComponent;

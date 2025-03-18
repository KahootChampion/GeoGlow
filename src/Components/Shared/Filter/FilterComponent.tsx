import * as React from "react";
import { Select } from "radix-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledTrigger from "./styles/StyledTrigger";
import StyledContent from "./styles/StyledContent";
import StyledViewport from "./styles/StyledViewport";

import StyledSelectScrollButton from "./styles/StyledSelectScrollButton";

export interface FilterProps {
  ariaLabel: string;
  placeholder: string;
  children: React.ReactNode;
}

const FilterComponent = (props: FilterProps) => (
  <Select.Root>
    <StyledTrigger aria-label={props.ariaLabel}>
      <Select.Value placeholder={props.placeholder} />
      <Select.Icon>
        <FontAwesomeIcon
          icon={"fa-classic fa-solid fa-chevron-down" as IconProp}
        />
      </Select.Icon>
    </StyledTrigger>
    <Select.Portal>
      <StyledContent>
        <StyledViewport>{props.children}</StyledViewport>
        <StyledSelectScrollButton>
          <FontAwesomeIcon
            icon={"fa-classic fa-solid fa-chevron-down" as IconProp}
          />
        </StyledSelectScrollButton>
      </StyledContent>
    </Select.Portal>
  </Select.Root>
);

export default FilterComponent;

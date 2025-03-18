import React from "react";
import StyledSelectItem from "./StyledSelectItem";
import { Select } from "radix-ui";
import StyledItemIndicator from "./SelectItemIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSelectItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <StyledItemIndicator>
          <FontAwesomeIcon icon={"fa-classic fa-solid fa-check" as IconProp} />
        </StyledItemIndicator>
      </StyledSelectItem>
    );
  }
);

export default SelectItem;

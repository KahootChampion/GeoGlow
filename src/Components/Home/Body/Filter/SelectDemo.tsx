import * as React from "react";
import { Select } from "radix-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledTrigger from "./styles/StyledTrigger";
import StyledContent from "./styles/StyledContent";
import StyledViewport from "./styles/StyledViewport";
import StyledSelectLabel from "./styles/StyledSelectLabel";
import StyledSelectOperator from "./styles/StyledSelectSeparator";
import StyledItemIndicator from "./styles/SelectItemIndicator";
import StyledSelectScrollButton from "./styles/StyledSelectScrollButton";
import StyledSelectItem from "./styles/StyledSelectItem";

const SelectDemo = () => (
  <Select.Root>
    <StyledTrigger aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon>
        <FontAwesomeIcon
          icon={"fa-classic fa-solid fa-chevron-down" as IconProp}
        />
      </Select.Icon>
    </StyledTrigger>
    <Select.Portal>
      <StyledContent>
        <StyledViewport>
          <Select.Group>
            <StyledSelectLabel>Fruits</StyledSelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <StyledSelectOperator />

          <Select.Group>
            <StyledSelectLabel>Vegetables</StyledSelectLabel>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Select.Group>

          <StyledSelectOperator />

          <Select.Group>
            <StyledSelectLabel>Meat</StyledSelectLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Select.Group>
        </StyledViewport>
        <StyledSelectScrollButton>
          <FontAwesomeIcon
            icon={"fa-classic fa-solid fa-chevron-down" as IconProp}
          />
        </StyledSelectScrollButton>
      </StyledContent>
    </Select.Portal>
  </Select.Root>
);

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

export default SelectDemo;

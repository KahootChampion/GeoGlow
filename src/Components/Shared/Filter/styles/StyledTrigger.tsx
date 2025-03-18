import { styled } from "styled-components";
import { Select } from "radix-ui";
import { DARK_MODE } from "../../../../Constants";

const StyledTrigger = styled(Select.Trigger)`
  font-size: ${(props) => props.theme.fontSize.mobile.subtitle};

  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  line-height: 1;
  height: 35px;
  gap: 5px;

  /* padding */
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  padding-left: ${(props) => props.theme.spacing.m};
  padding-right: ${(props) => props.theme.spacing.m};

  background-color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeInput
      : props.theme.lightModeColors.lightModeInput};
  color: ${(props) =>
    props.theme.siteTheme === DARK_MODE
      ? props.theme.darkModeColors.darkModeText
      : props.theme.lightModeColors.lightModeText};
  transition: background-color 500ms ease-out;
  border: 1px solid hsl(0, 0%, 0%, 20%);

  &[data-placeholder] {
    color: ${(props) => props.theme.siteColors.placeholder};
  }
  @media ${(props) => props.theme.media.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
  }
`;
export default StyledTrigger;

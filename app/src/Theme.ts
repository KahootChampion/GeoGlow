import { DefaultTheme } from "styled-components";


const Theme: DefaultTheme = {
  siteColors: {
    placeholder: "#A9A9A9",
  },
  lightModeColors: {
    lightModeText: "hsl(200, 15%, 8%)",
    lightModeInput: "white",
    lightModeBackground: "hsl(0, 0%, 98%)",
    lightModeElements: "hsl(0, 0%, 52%)",
  },
  darkModeColors: {
    darkModeText: "hsl(0, 0%, 100%)",
    darkModeInput: "hsl(209, 23%, 22%)",
    darkModeBackground: "hsl(207, 26%, 17%)",
    darkModeElements: "hsl(209, 23%, 22%)",
  },
  media: {
    desktop: `(min-width: 870px)`,
  },
  spacing: {
    xxl: "50px",
    xl: "40px",
    l: "30px",
    m: "20px",
    s: "10px",
  },
  fontSize: {
    mobile: {
      title: "20px",
      subtitle: "14px",
      regular: "12px",
    },
    desktop: {
      title: "40px",
      subtitle: "20px",
      regular: "16px",
    },
  },
};

export default Theme;

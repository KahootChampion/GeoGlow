const Theme = {
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
    mobile: `(min-width: 375px)`,
    desktop: `(min-width: 992px)`,
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
      title: "60px",
      subtitle: "30px",
      regular: "24px",
    },
    desktop: {
      title: "40px",
      subtitle: "20px",
      regular: "16px",
    },
  },
};

export default Theme;

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    siteTheme?: string;
    siteColors: {
      placeholder: string;
    };
    lightModeColors: {
      lightModeText: string;
      lightModeInput: string;
      lightModeBackground: string;
      lightModeElements: string;
    };
    darkModeColors: {
      darkModeText: string;
      darkModeInput: string;
      darkModeBackground: string;
      darkModeElements: string;
    };
    media: {
      desktop: string;
    };
    spacing: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fontSize: {
      mobile: {
        title: string;
        subtitle: string;
        regular: string;
      };
      desktop: {
        title: string;
        subtitle: string;
        regular: string;
      };
    };
  }
}

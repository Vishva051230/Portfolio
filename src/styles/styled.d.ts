import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryHover: string;
    secondary: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textAlt: string;
    glass: string;
    glassHover: string;
    border: string;
    shadow: string;
    error: string;
    success: string;
    gradientStart: string;
    gradientEnd: string;
    primaryGradient: string;
    backgroundGradient: string;
    cardGradient: string;
    blurBackground: string;
  }
}
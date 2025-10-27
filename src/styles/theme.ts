import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundAlt: string;
    backgroundGradient: string;
    gradientStart: string;
    gradientEnd: string;
    cardGradient: string;
    blurBackground: string;
    text: string;
    textAlt: string;
    headline: string;
    primary: string;
    primaryHover: string;
    primaryGradient: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    accentHover: string;
    success: string;
    error: string;
    cardBg: string;
    cardBgHover: string;
    navBg: string;
    border: string;
    borderHover: string;
    shadow: string;
    shadowHover: string;
    glass: string;
    glassHover: string;
    overlay: string;
  }
}

export interface NavbarProps {
  // Remove theme and toggleTheme props since we're using a dark theme only
}

export const darkTheme: DefaultTheme = {
  background: '#0a0b0e',
  backgroundAlt: '#111215',
  backgroundGradient: 'linear-gradient(135deg, #0a0b0e 0%, #111215 100%)',
  gradientStart: '#6c5ce7',
  gradientEnd: '#a55eea',
  cardGradient: 'linear-gradient(135deg, rgba(22, 23, 28, 0.7) 0%, rgba(28, 30, 36, 0.7) 100%)',
  blurBackground: 'rgba(10, 11, 14, 0.8)',
  text: '#f5f6fa',
  textAlt: '#a0a0a0',
  headline: '#ffffff',
  primary: '#6c5ce7',
  primaryHover: '#5641e5',
  primaryGradient: 'linear-gradient(135deg, #6c5ce7 0%, #a55eea 100%)',
  secondary: '#a8a8a8',
  secondaryHover: '#919191',
  accent: '#00b894',
  accentHover: '#00a382',
  success: '#00b894',
  error: '#ff7675',
  cardBg: '#16171c',
  cardBgHover: '#1c1e24',
  navBg: 'rgba(10, 11, 14, 0.95)',
  border: '#26272c',
  borderHover: '#32333a',
  shadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  shadowHover: '0 8px 30px rgba(0, 0, 0, 0.3)',
  glass: 'rgba(255, 255, 255, 0.1)',
  glassHover: 'rgba(255, 255, 255, 0.15)',
  overlay: 'rgba(0, 0, 0, 0.7)'
};
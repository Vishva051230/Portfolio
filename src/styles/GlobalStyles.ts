import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --max-width: 2000px;
    --section-padding: clamp(3rem, 8vw, 8rem);
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.primary} ${({ theme }) => theme.background};
  }

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.6;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.background};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 4px;
      
      &:hover {
        background: ${({ theme }) => theme.primaryHover};
      }
    }
  }

  section {
    min-height: 100vh;
    width: 100%;
    padding: clamp(4rem, 8vw, 8rem) 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: radial-gradient(circle at center, ${({ theme }) => theme.backgroundAlt}10 0%, transparent 70%);
      pointer-events: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.headline};
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); }

  p {
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .text-gradient {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    :root {
      --section-padding: 4rem 1.5rem;
    }
  }
`;
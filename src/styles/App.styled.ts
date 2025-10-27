import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, -10px); }
  100% { transform: translate(0, 0); }
`;

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: ${({ theme }) => theme.background};

  &::before,
  &::after {
    content: '';
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryGradient};
    filter: blur(150px);
    opacity: 0.1;
    pointer-events: none;
  }

  &::before {
    top: -100px;
    right: -100px;
  }

  &::after {
    bottom: -100px;
    left: -100px;
  }
`;

export const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  transition: background 0.3s ease;
`;

export const GradientOrbs = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
`;

export const GradientOrb = styled.div`
  position: absolute;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryGradient};
  filter: blur(80px);
  opacity: 0.08;
  animation: ${float} 8s ease-in-out infinite;
  transition: transform 0.3s ease-out;

  @media (max-width: 768px) {
    width: 25vw;
    height: 25vw;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 clamp(1rem, 5vw, 3rem);
  margin: 0 auto;
`;

export const MainContent = styled(motion.main)`
  padding-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;

  > section {
    position: relative;
    padding: clamp(4rem, 8vw, 8rem) 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: ${({ theme }) => theme.border};
      opacity: 0.1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: ${({ theme }) => theme.border};
      opacity: 0.1;
    }
  }
`;

export const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingLogo = styled(motion.div)`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  font-family: 'Space Grotesk', sans-serif;
`;
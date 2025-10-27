import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`;

export const SectionHeader = styled(motion.div)`
  margin-bottom: 4rem;
  text-align: center;
`;

export const SectionNumber = styled.span`
  color: ${({ theme }) => theme.primary};
  font-family: "Space Grotesk", monospace;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  margin-bottom: 0.5rem;
  display: block;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 1rem 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.text} 0%, ${({ theme }) => theme.textAlt} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardGradient};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.textAlt};
  line-height: 1.6;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.border};
  }
`;

export const CardButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.glassHover};
    transform: translateY(-2px);
  }
`;

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};
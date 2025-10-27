import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      setMousePosition({ x: deltaX * 20, y: deltaY * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroSection id="home" ref={containerRef}>
      <ParticlesContainer>
        {[...Array(50)].map((_, i) => (
          <Particle
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </ParticlesContainer>
      
      <HeroContent style={{ y, opacity }}>
        <GlowingCircle 
          style={{ 
            x: mousePosition.x,
            y: mousePosition.y
          }}
        />
        
        <Title
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="gradient-text">Vishva Kumar</span>
        </Title>

        <SubtitleWrapper
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <RoleText>Computer Science Student</RoleText>
          <Divider>&</Divider>
          <RoleText>Future Developer</RoleText>
        </SubtitleWrapper>

        <Description
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Crafting digital experiences through elegant code
        </Description>

        <CTAContainer
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <PrimaryButton
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </PrimaryButton>
          <SecondaryButton
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </SecondaryButton>
        </CTAContainer>

        <ScrollIndicator
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: float 5s infinite ease-in-out;
  opacity: 0.5;

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      transform: translate(20px, -20px);
      opacity: 0.8;
    }
  }
`;

const GlowingCircle = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryGradient};
  filter: blur(100px);
  opacity: 0.1;
  pointer-events: none;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1000px;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
`;

const SubtitleWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const RoleText = styled.span`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const Divider = styled.span`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.primary};
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const ButtonBase = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  box-shadow: 0 10px 20px ${({ theme }) => theme.primary}30;

  &:hover {
    box-shadow: 0 15px 30px ${({ theme }) => theme.primary}50;
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.glass};
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.glassHover};
  }
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textAlt};

  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export default Hero;
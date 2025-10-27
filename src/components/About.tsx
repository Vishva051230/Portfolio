import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionTitle as BaseTitle
} from './shared/Section.styled';

const About = () => {
  return (
    <SectionContainer id="about">
      <SectionContent>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BaseTitle>About Me</BaseTitle>
        </SectionHeader>
        <ContentWrapper>
          <ImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProfileImage src="passport size.jpg" alt="Vishva Kumar" />
          </ImageWrapper>
          <TextContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Greeting>Hi! I'm Vishva</Greeting>
            <Description>
              A passionate Computer Science student at SRM University with a love for creating innovative digital solutions. Currently in my third year, specializing in web development and software engineering.
            </Description>
            <Description>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or participating in hackathons. I believe in the power of technology to solve real-world problems and make a positive impact.
            </Description>
            <Description>
              I'm always eager to learn, collaborate, and take on new challenges that push me to grow as a developer and as a person.
            </Description>
          </TextContent>
        </ContentWrapper>
      </SectionContent>
    </SectionContainer>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 4px solid ${({ theme }) => theme.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const TextContent = styled(motion.div)`
  flex: 2;
`;

const Greeting = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.headline};
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export default About;
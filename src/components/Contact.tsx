import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContentHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionNumber>04.</SectionNumber>
          <Title>Get In Touch</Title>
          <Description>
            Whether you have a question, want to start a project, or simply want to connect.
          </Description>
        </ContentHeader>

        <ContactContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Links>
            <LinkItem
              href="vishvakumar972@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <LinkIcon>📧</LinkIcon>
              <span>vishvakumar972@gmail.com</span>
            </LinkItem>
            <LinkItem
              href="https://github.com/Vishva051230"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <LinkIcon>🌐</LinkIcon>
              <span>github.com/Vishva051230</span>
            </LinkItem>
            <LinkItem
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <LinkIcon>💼</LinkIcon>
              <span>https://www.linkedin.com/in/vishva-kumar</span>
            </LinkItem>
          </Links>

          <CallToAction>
            <BigButton
              href="mailto:your.email@example.com"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              Say Hello
            </BigButton>
          </CallToAction>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const ContentHeader = styled(motion.div)`
  margin-bottom: 4rem;
  text-align: center;
`;

const SectionNumber = styled.span`
  color: ${({ theme }) => theme.primary};
  font-family: "Space Grotesk", monospace;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  margin-bottom: 0.5rem;
  display: block;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 1rem 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.text} 0%, ${({ theme }) => theme.textAlt} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

const LinkItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => `${theme.backgroundAlt}50`};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.border}50`};
  transition: all 0.3s ease;

  span {
    color: ${({ theme }) => theme.textAlt};
  }

  &:hover {
    background: ${({ theme }) => `${theme.backgroundAlt}80`};
    border-color: ${({ theme }) => theme.primary};
    
    span {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const LinkIcon = styled.div`
  font-size: 1.5rem;
  min-width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CallToAction = styled.div`
  margin-top: 2rem;
`;

const BigButton = styled(motion.a)`
  display: inline-block;
  padding: 1.2rem 2.8rem;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: "Space Grotesk", sans-serif;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }
`;

export default Contact;
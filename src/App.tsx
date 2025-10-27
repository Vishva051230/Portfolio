import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import {
  AppContainer,
  BackgroundGradient,
  GradientOrbs,
  GradientOrb,
  ContentWrapper,
  MainContent,
  LoadingScreen,
  LoadingLogo
} from './styles/App.styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      setMousePosition({ x: deltaX * 20, y: deltaY * 20 });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <LoadingScreen
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingLogo
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            VK
          </LoadingLogo>
        </LoadingScreen>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <BackgroundGradient style={{ 
          background: `radial-gradient(circle at ${scrollProgress * 100}% 50%, 
            ${darkTheme.backgroundAlt} 0%, ${darkTheme.background} 100%)`
        }} />
        <GradientOrbs>
          {[...Array(8)].map((_, i) => (
            <GradientOrb 
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translate(${mousePosition.x * (i + 1)}px, ${mousePosition.y * (i + 1)}px)`
              }}
            />
          ))}
        </GradientOrbs>
        <ContentWrapper>
          <Navbar />
          <AnimatePresence mode='wait'>
            <MainContent
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </MainContent>
          </AnimatePresence>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <Logo>VK</Logo>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;



export default Navbar;
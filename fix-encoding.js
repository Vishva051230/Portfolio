const fs = require('fs');
const path = require('path');

const content = `import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionTitle as BaseTitle
} from './shared/Section.styled';

interface Project {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.",
    icon: "🌐",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    icon: "📱",
    technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"]
  },
  {
    title: "Weather Forecast Bot",
    description: "An intelligent chatbot that provides weather forecasts and recommendations based on location.",
    icon: "🤖",
    technologies: ["Python", "TensorFlow", "Flask", "API Integration"]
  }
];

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <SectionContent>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BaseTitle>Featured Projects</BaseTitle>
        </SectionHeader>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </SectionContent>
    </SectionContainer>
  );
};

const ProjectGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;
\`;

const ProjectCard = styled(motion.div)\`
  background: \${({ theme }) => theme.cardBg || theme.background};
  backdrop-filter: blur(10px);
  border: 1px solid \${({ theme }) => theme.border};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;
\`;

const ProjectIcon = styled.div\`
  height: 200px;
  background: linear-gradient(135deg, \${({ theme }) => theme.primary}20 0%, \${({ theme }) => theme.primaryHover}20 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
\`;

const ProjectContent = styled.div\`
  padding: 1.5rem;
\`;

const ProjectTitle = styled.h3\`
  font-size: 1.5rem;
  color: \${({ theme }) => theme.headline};
  margin-bottom: 1rem;
\`;

const ProjectDescription = styled.p\`
  color: \${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
\`;

const TechStack = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
\`;

const TechTag = styled.span\`
  background: \${({ theme }) => theme.primary}20;
  color: \${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
\`;

export default Projects;`;

const filePath = path.join(__dirname, 'src', 'components', 'Projects.tsx');
fs.writeFileSync(filePath, content, { encoding: 'utf8' });
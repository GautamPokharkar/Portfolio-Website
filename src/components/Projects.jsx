import { motion } from 'framer-motion';
import Card from './Card';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with cart, payments, and user authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/placeholder.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop functionality.',
    tech: ['React', 'Redux', 'Firebase'],
    image: '/placeholder.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with location search and 7-day forecast.',
    tech: ['JavaScript', 'Chart.js', 'OpenWeather API'],
    image: '/placeholder.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you already have at home.',
    tech: ['React', 'Tailwind CSS', 'Spoonacular API'],
    image: '/placeholder.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaGlobe, FaUsers, FaHeartbeat, FaBalanceScale } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "PostVisionAI",
      description: "An AI-powered solution developed for Smart India Hackathon 2024 that enhances postal services through computer vision.",
      icon: <FaGlobe className="text-4xl text-primary-text" />,
      tags: ["AI", "Computer Vision"]
    },
    {
      id: 2,
      name: "CrowdVisionAI",
      description: "A crowd management system using AI to analyze crowd densities and predict potential safety concerns.",
      icon: <FaUsers className="text-4xl text-primary-text" />,
      tags: ["AI", "Python", "Computer Vision"]
    },
    {
      id: 3,
      name: "SkinSight",
      description: "An award-winning medical tool that helps detect skin conditions using machine learning algorithms.",
      icon: <FaHeartbeat className="text-4xl text-primary-text" />,
      tags: ["Healthcare", "Machine Learning"]
    },
    {
      id: 4,
      name: "Kanoon-Sathi",
      description: "A legal assistance platform developed for Google Solutions Challenge that makes legal information accessible to everyone.",
      icon: <FaBalanceScale className="text-4xl text-primary-text" />,
      tags: ["Legal Tech", "Web App"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard 
                name={project.name} 
                description={project.description} 
                icon={project.icon} 
                tags={project.tags} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

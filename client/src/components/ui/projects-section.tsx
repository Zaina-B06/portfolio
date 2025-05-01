import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaGlobe, FaUsers, FaHeartbeat, FaBalanceScale } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "PostVisionAI",
      description: "AI-Based Post Office Counter Monitoring System: An AI-powered web application for the Department of Posts (DoP) to reduce customer wait times and service inefficiencies across 165,000+ post offices.",
      icon: <FaGlobe className="text-4xl text-primary-text" />,
      tags: ["Python", "OpenCV", "YOLO", "Flask", "MySQL"]
    },
    {
      id: 2,
      name: "CrowdVisionAI",
      description: "AI-Powered Queue Management System: An AI-driven web app that optimizes queue management in high-traffic environments like hospitals and transport hubs using image processing and predictive analytics.",
      icon: <FaUsers className="text-4xl text-primary-text" />,
      tags: ["YOLO", "Python", "Flask", "OpenCV"]
    },
    {
      id: 3,
      name: "SkinSight",
      description: "AI-Powered Skincare Platform: An intelligent skincare solution addressing common skin concerns like acne, dermatitis, and allergies using AI for skin analysis, routine generation, and personalized care.",
      icon: <FaHeartbeat className="text-4xl text-primary-text" />,
      tags: ["Python", "OpenCV", "TensorFlow", "Flask"]
    },
    {
      id: 4,
      name: "Kanoon Sathi",
      description: "AI Lawtech Suite: A suite of AI tools improving legal access, speeding up bail processes, automating legal research, and prioritizing public-interest cases to reduce backlog and empower citizens.",
      icon: <FaBalanceScale className="text-4xl text-primary-text" />,
      tags: ["Python", "NLP", "Flask", "Transformers"]
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

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, icon, tags }) => {
  return (
    <div className="project-card h-64">
      <div className="card-inner h-full">
        <div className="card-front bg-accent p-6 flex flex-col justify-center items-center text-center h-full">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-primary-text">{name}</h3>
        </div>
        <div className="card-back bg-primary p-6 flex flex-col justify-center h-full border border-accent">
          <h3 className="text-xl font-bold text-primary-text mb-2">{name}</h3>
          <p className="text-sm text-primary-text mb-3">
            {description}
          </p>
          <div className="text-xs text-primary-text opacity-80">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-accent bg-opacity-30 rounded px-2 py-1 mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

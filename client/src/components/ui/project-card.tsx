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
    <div className="project-card h-72">
      <div className="card-inner h-full">
        <div className="card-front bg-accent p-6 flex flex-col justify-center items-center text-center h-full">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-primary-text">{name}</h3>
        </div>
        <div className="card-back bg-primary p-5 flex flex-col h-full border border-accent overflow-hidden">
          <h3 className="text-lg font-bold text-primary-text mb-1">{name}</h3>
          <div className="overflow-y-auto my-1 flex-grow pr-1" style={{ maxHeight: "calc(100% - 70px)" }}>
            <p className="text-xs text-primary-text">
              {description}
            </p>
          </div>
          <div className="text-xs text-primary-text opacity-80 mt-auto pt-1">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-accent bg-opacity-30 rounded px-1.5 py-0.5 mr-1 mb-1 text-2xs"
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

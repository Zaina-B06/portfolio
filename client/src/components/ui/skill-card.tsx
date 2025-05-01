import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  level: string;
  progress: number;
  icon: ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, progress, icon }) => {
  return (
    <div className="bg-secondary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-primary-text mb-3">{name}</h3>
      <p className="text-sm text-center text-primary-text opacity-80 mb-4">{level}</p>
      <div className="skill-level">
        <div className="skill-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SkillCard;

import { motion } from "framer-motion";
import SkillCard from "./skill-card";
import { FaJava, FaPython } from "react-icons/fa";
import { SiC } from "react-icons/si";

const TechStackSection = () => {
  const skills = [
    {
      name: "Java",
      level: "Beginner",
      progress: 20,
      icon: <FaJava className="text-5xl text-primary-text" />
    },
    {
      name: "C",
      level: "Beginner",
      progress: 25,
      icon: <SiC className="text-5xl text-primary-text" />
    },
    {
      name: "Python",
      level: "Intermediate",
      progress: 45,
      icon: <FaPython className="text-5xl text-primary-text" />
    }
  ];

  return (
    <section id="tech-stack" className="py-16 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technology Stack
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard 
                name={skill.name} 
                level={skill.level} 
                progress={skill.progress} 
                icon={skill.icon} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

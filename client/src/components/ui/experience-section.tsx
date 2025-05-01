import { motion } from "framer-motion";

interface ExperienceItemProps {
  organization: string;
  position: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ organization, position }) => {
  return (
    <div className="bg-secondary p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-2">{organization}</h3>
      <p className="text-primary-text">{position}</p>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      organization: "ACM",
      position: "Execom Technical Team"
    },
    {
      id: 2,
      organization: "IEEE WIE",
      position: "Core Design Team"
    },
    {
      id: 3,
      organization: "IEEE GRSS",
      position: "Core Technical Team"
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceItem 
                organization={experience.organization} 
                position={experience.position} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

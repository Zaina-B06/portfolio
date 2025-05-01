import { motion } from "framer-motion";
import HackathonCard from "./hackathon-card";

const HackathonsSection = () => {
  const hackathons = [
    {
      id: 1,
      name: "Codenovate'24",
      details: [
        "Participant in Codenovate 2024",
        "Held at Keshav Memorial Institute of Technology",
        "Worked on CrowdVisionAI"
      ]
    },
    {
      id: 2,
      name: "SIH'24",
      details: [
        "Finalist of Smart India Hackathon 2024",
        "Held at Chennai",
        "Worked on PostVisionAI"
      ]
    },
    {
      id: 3,
      name: "Hack Revolution'24",
      details: [
        "Won 3rd place in Medical Field",
        "Held at Muffakham Jah College of Engineering and Technology",
        "Worked on SkinSight"
      ]
    },
    {
      id: 4,
      name: "Google Solutions Challenge'24",
      details: [
        "Participant in Google Solutions Challenge 2024",
        "Held online",
        "Worked on Kanoon Sathi"
      ]
    }
  ];

  return (
    <section id="hackathons" className="py-16 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hackathons
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HackathonCard 
                name={hackathon.name} 
                details={hackathon.details} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;

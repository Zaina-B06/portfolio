import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p 
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I study computer science at Muffakham Jah College of Engineering and Technology.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Although I'm not the kind of person who learns every new framework the moment it's released, I do appreciate picking up new skills, experimenting with various programming languages, and working on challenging projects.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm currently concentrating on developing my abilities and looking into chances that would enable me to become a competent and considerate engineer.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm not in a rush to "know it all," but I'm definitely in it for the long run.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import HijabiGirlAnimation from "./hijabi-girl-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-text mb-4">
              Zaina Bilquis
            </h1>
            <p className="text-xl md:text-2xl text-primary-text opacity-90 mb-8">
              Computer Science Engineering Student
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/zaina-bilquis-208586331" 
                className="bg-accent hover:bg-highlight hover:text-primary-bg px-6 py-3 rounded-md text-primary-text transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2" /> Connect
              </motion.a>
              <motion.a 
                href="#projects" 
                className="border border-primary-text hover:bg-primary-text hover:text-primary-bg px-6 py-3 rounded-md text-primary-text transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
          <div className="md:w-1/2 flex justify-center">
            <HijabiGirlAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

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
            {/* Buttons removed as requested */}
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

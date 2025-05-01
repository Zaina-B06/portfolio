import { motion } from "framer-motion";
import { Code } from "lucide-react";

const HijabiGirlAnimation = () => {
  // SVG of a hijabi girl
  return (
    <div className="float-animation relative w-64 h-64 md:w-80 md:h-80">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <circle cx="200" cy="200" r="150" fill="#E8D1A7" />
        
        {/* Face */}
        <ellipse cx="200" cy="170" rx="100" ry="120" fill="#F8D5AC" />
        
        {/* Hijab */}
        <path
          d="M120,170 C120,90 280,90 280,170 C280,250 200,290 200,290 C200,290 120,250 120,170 Z"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="2"
        />
        
        {/* Face features */}
        <circle cx="175" cy="150" r="5" fill="#743014" /> {/* Left eye */}
        <circle cx="225" cy="150" r="5" fill="#743014" /> {/* Right eye */}
        <path
          d="M180,180 Q200,200 220,180"
          fill="none"
          stroke="#743014"
          strokeWidth="2"
        /> {/* Smile */}
        
        {/* Shoulders/Body */}
        <path
          d="M150,290 C150,290 150,330 200,330 C250,330 250,290 250,290"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="2"
        />
      </motion.svg>
      
      <motion.div 
        className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full border-2 border-accent"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
      >
        <Code className="h-8 w-8 text-primary-text" />
      </motion.div>
    </div>
  );
};

export default HijabiGirlAnimation;

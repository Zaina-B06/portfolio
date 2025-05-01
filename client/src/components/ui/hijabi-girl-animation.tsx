import { motion } from "framer-motion";
import { Code, Laptop } from "lucide-react";

const HijabiGirlAnimation = () => {
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
        {/* Background circle */}
        <circle cx="200" cy="200" r="150" fill="#E8D1A7" />
        
        {/* Neck */}
        <path d="M185,220 L185,245 L215,245 L215,220" fill="#F8D5AC" />
        
        {/* Face */}
        <circle cx="200" cy="160" r="60" fill="#F8D5AC" />
        
        {/* Hijab - new modern style */}
        <path
          d="M120,160 
             C120,90 280,90 280,160 
             L250,240 
             C250,240 220,285 200,285 
             C180,285 150,240 150,240 Z"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="2"
        />
        
        {/* Hijab front piece */}
        <path
          d="M140,160 C140,120 260,120 260,160 C260,160 240,190 200,190 C160,190 140,160 140,160 Z"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="2"
        />
        
        {/* Shoulders */}
        <path
          d="M150,245 L130,270 L270,270 L250,245"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="2"
        />
        
        {/* Face features - more stylized and modern */}
        <path
          d="M175,150 C175,145 180,145 180,150"
          stroke="#743014"
          strokeWidth="2"
          fill="none"
        /> {/* Left eye */}
        <path
          d="M220,150 C220,145 225,145 225,150"
          stroke="#743014"
          strokeWidth="2"
          fill="none"
        /> {/* Right eye */}
        
        {/* Smile - more subtle and elegant */}
        <path
          d="M185,180 Q200,190 215,180"
          fill="none"
          stroke="#743014"
          strokeWidth="2"
        />
        
        {/* Laptop showing coding */}
        <motion.g
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse",
            duration: 1.5 
          }}
        >
          <rect x="150" y="290" width="100" height="70" rx="5" fill="#444" />
          <rect x="150" y="350" width="100" height="10" rx="2" fill="#333" />
          <rect x="155" y="295" width="90" height="60" rx="2" fill="#222" />
          <text x="165" y="320" fill="#20C20E" fontSize="10">&lt;code/&gt;</text>
          <text x="165" y="340" fill="#20C20E" fontSize="10">function();</text>
        </motion.g>
      </motion.svg>
      
      {/* Floating code icon */}
      <motion.div 
        className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full border-2 border-accent"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
      >
        <Laptop className="h-8 w-8 text-primary-text" />
      </motion.div>
    </div>
  );
};

export default HijabiGirlAnimation;

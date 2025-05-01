import { motion } from "framer-motion";
import { Laptop } from "lucide-react";

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
        <path d="M185,210 L185,245 L215,245 L215,210" fill="#F8D5AC" />
        
        {/* Face */}
        <circle cx="200" cy="155" r="55" fill="#F8D5AC" />
        
        {/* Hijab - more elegant style with layered look */}
        {/* Outer layer */}
        <path
          d="M120,155 
             C120,80 280,80 280,155 
             C280,225 250,260 200,260 
             C150,260 120,225 120,155 Z"
          fill="#743014"
          strokeWidth="2"
        />
        
        {/* Middle layer */}
        <path
          d="M130,155 
             C130,90 270,90 270,155 
             C270,215 240,250 200,250 
             C160,250 130,215 130,155 Z"
          fill="#B86E3C"
          strokeWidth="2"
        />
        
        {/* Inner layer - face frame */}
        <path
          d="M140,155 
             C140,110 260,110 260,155 
             C260,155 245,185 200,185 
             C155,185 140,155 140,155 Z"
          fill="#F2BC8D"
          stroke="#743014"
          strokeWidth="1.5"
        />
        
        {/* Hijab pin/decoration */}
        <circle cx="140" cy="155" r="5" fill="#E8D1A7" stroke="#743014" strokeWidth="1" />
        
        {/* Shoulders/Upper body */}
        <path
          d="M150,245 L130,290 L270,290 L250,245"
          fill="#743014"
          strokeWidth="2"
        />
        
        {/* Clothing detail */}
        <path
          d="M155,250 L140,285 L260,285 L245,250"
          fill="#B86E3C"
          stroke="#743014"
          strokeWidth="1"
        />
        
        {/* Face features - more expressive */}
        {/* Eyebrows */}
        <path
          d="M175,135 C180,130 190,130 195,135"
          stroke="#743014"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M205,135 C210,130 220,130 225,135"
          stroke="#743014"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Eyes */}
        <path
          d="M180,145 C180,140 190,140 190,145"
          stroke="#743014"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M210,145 C210,140 220,140 220,145"
          stroke="#743014"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Eyelashes */}
        <line x1="178" y1="143" x2="175" y2="140" stroke="#743014" strokeWidth="1" />
        <line x1="185" y1="142" x2="185" y2="138" stroke="#743014" strokeWidth="1" />
        <line x1="192" y1="143" x2="195" y2="140" stroke="#743014" strokeWidth="1" />
        
        <line x1="208" y1="143" x2="205" y2="140" stroke="#743014" strokeWidth="1" />
        <line x1="215" y1="142" x2="215" y2="138" stroke="#743014" strokeWidth="1" />
        <line x1="222" y1="143" x2="225" y2="140" stroke="#743014" strokeWidth="1" />
        
        {/* Smile - gentle and warm */}
        <path
          d="M185,170 Q200,180 215,170"
          fill="none"
          stroke="#743014"
          strokeWidth="1.5"
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
          <rect x="150" y="310" width="100" height="70" rx="5" fill="#444" />
          <rect x="150" y="370" width="100" height="10" rx="2" fill="#333" />
          <rect x="155" y="315" width="90" height="60" rx="2" fill="#222" />
          <text x="165" y="340" fill="#20C20E" fontSize="10">&lt;code/&gt;</text>
          <text x="165" y="360" fill="#20C20E" fontSize="10">function();</text>
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

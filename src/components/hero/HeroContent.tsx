
import { motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedText from "../AnimatedText";
import { Download } from "lucide-react";
import TypewriterEffect from "../TypewriterEffect";

interface HeroContentProps {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}

const HeroContent = ({ y, opacity }: HeroContentProps) => {
  const skills = [
    "Frontend Developer",
    "Web Developer",
    "MERN Stack Developer"
  ];

  return (
    <motion.div
      className={cn(
        "relative z-10 max-w-7xl mx-auto px-6 w-full",
        "flex flex-col md:flex-row items-center gap-8 md:gap-12"
      )}
      style={{ y, opacity }}
    >
      {/* Left Column - Text Content */}
      <motion.div className="w-full md:w-7/12 text-center md:text-left">
        <motion.span
          className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to my portfolio
        </motion.span>
        
        <div className="mb-4">
          <AnimatedText
            text="Hi,"
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold block mr-2"
            once={true}
            delayOffset={0.2}
          />
          <AnimatedText
            text="I am Anas Ahmed"
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold inline-block"
            once={true}
            delayOffset={0.3}
          />
        </div>

        <TypewriterEffect
          words={skills}
          className="text-2xl sm:text-3xl text-primary font-medium mb-6"
        />

        <AnimatedText
          text="I design and develop innovative digital solutions that blend aesthetics and functionality."
          className="text-muted-foreground text-lg max-w-2xl mb-10"
          once={true}
          delayOffset={0.8}
        />

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-6 py-3",
              "font-medium text-sm",
              "bg-primary text-primary-foreground",
              "transition-all duration-300 ease-out"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/Best Resume.pdf"
            download="Anas Ahmed resume.pdf"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-6 py-3",
              "font-medium text-sm",
              "border border-input bg-background",
              "transition-all duration-300 ease-out"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
      
      {/* Right Column - Web Dev Image */}
      <motion.div 
        className="w-full md:w-5/12 flex justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img 
          src="https://i.giphy.com/media/26tn33aiTi1jkl6H6/giphy.webp" 
          alt="Web Development Animation" 
          className="max-w-full rounded-lg shadow-xl object-cover h-[300px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

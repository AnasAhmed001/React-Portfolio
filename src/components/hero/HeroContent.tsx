
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedText from "../AnimatedText";
import { Download } from "lucide-react";
import TypewriterEffect from "../TypewriterEffect";

const HeroContent = () => {
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
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      
    >
      {/* Left Column - Text Content */}
      <motion.div 
        className="w-full md:w-7/12 text-center md:text-left"
        initial={{ opacity: 0, transform: 'translateX(-30px)' }}
        animate={{ opacity: 1, transform: 'translateX(0px)' }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        
      >
        <motion.span
          className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary"
          initial={{ opacity: 0, transform: 'translateY(-10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          text="Mern stack developer with strong foundation in Frontend Technologies."
          className="text-muted-foreground text-lg max-w-2xl mb-10"
          once={true}
          delayOffset={0.8}
        />

        <motion.div 
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          
        >
          <motion.a
            href="#projects"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-6 py-3",
              "font-medium text-sm",
              "bg-primary text-primary-foreground",
              "transition-all duration-300 ease-out"
            )}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/Anas_Ahmed_Resume.pdf"
            download="Anas Ahmed resume.pdf"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-6 py-3",
              "font-medium text-sm",
              "border border-input bg-background",
              "transition-all duration-300 ease-out"
            )}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Right Column - Web Dev Image */}
      <motion.div 
        className="w-full md:w-5/12 flex justify-center"
        initial={{ opacity: 0, transform: 'translateX(30px)' }}
        animate={{ opacity: 1, transform: 'translateX(0px)' }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        
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

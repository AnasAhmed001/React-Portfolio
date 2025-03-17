
import { motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedText from "../AnimatedText";
import { Download } from "lucide-react";

interface HeroContentProps {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}

const HeroContent = ({ y, opacity }: HeroContentProps) => {
  return (
    <motion.div
      className={cn(
        "relative z-10 text-center max-w-3xl mx-auto px-6",
        "flex flex-col items-center justify-center"
      )}
      style={{ y, opacity }}
    >
      <motion.span
        className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to my portfolio
      </motion.span>
      
      <AnimatedText
        text="Crafting Digital Experiences with Precision"
        className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
        once={true}
        delayOffset={0.3}
      />

      <AnimatedText
        text="I design and develop innovative digital solutions that blend aesthetics and functionality."
        className="text-muted-foreground text-lg max-w-2xl mb-10"
        once={true}
        delayOffset={0.8}
      />

      <div className="flex flex-wrap gap-4 justify-center">
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
          href="/resume.pdf"
          download="resume.pdf"
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
  );
};

export default HeroContent;

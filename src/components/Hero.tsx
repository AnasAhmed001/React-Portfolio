
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 -z-10"
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]) }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 -z-10"
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]) }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 -z-10"
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 2]) }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute -top-10 right-1/4 w-16 h-16 rounded-full bg-blue-100 opacity-20 -z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-green-100 opacity-20 -z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-16 w-12 h-12 rounded-full bg-yellow-100 opacity-20 -z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

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
            href="#contact"
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
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-medium text-muted-foreground mb-2">Scroll</span>
        <motion.div
          className="w-5 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-muted-foreground"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

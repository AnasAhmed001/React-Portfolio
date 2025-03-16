
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

  // SVG animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          delay: i * 0.5,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          delay: i * 0.5,
        }
      }
    })
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i, 
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  };

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: (i: number) => ({
      rotate: i % 2 === 0 ? 360 : -360,
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: "linear",
      }
    })
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      {/* Animated SVG background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {/* Abstract geometric shapes */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 1000"
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.7, 0.3]) }}
        >
          {/* Animated circles */}
          <motion.circle
            cx="150"
            cy="150"
            r="80"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={pathVariants}
          />
          <motion.circle
            cx="850"
            cy="150"
            r="100"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={pathVariants}
          />
          <motion.circle
            cx="500"
            cy="500"
            r="150"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={pathVariants}
          />
          <motion.circle
            cx="200"
            cy="800"
            r="80"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-500/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={pathVariants}
          />
          <motion.circle
            cx="800"
            cy="700"
            r="120"
            stroke="currentColor"
            strokeWidth="2"
            className="text-yellow-500/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={pathVariants}
          />

          {/* Animated lines */}
          <motion.path
            d="M100,100 Q500,20 900,100"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/10"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={pathVariants}
          />
          <motion.path
            d="M100,900 Q500,980 900,900"
            stroke="currentColor"
            strokeWidth="2" 
            className="text-blue-500/10"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={pathVariants}
          />
          <motion.path
            d="M100,400 C250,300 750,700 900,600"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-500/10"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={pathVariants}
          />
        </motion.svg>

        {/* Floating geometric elements */}
        <motion.div 
          className="absolute left-[20%] top-[30%]"
          initial="initial"
          animate="animate"
          custom={0}
          variants={floatVariants}
        >
          <motion.svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60"
            initial="initial"
            animate="animate"
            custom={0}
            variants={rotateVariants}
          >
            <rect width="60" height="60" rx="15" className="fill-primary/15" />
          </motion.svg>
        </motion.div>

        <motion.div 
          className="absolute right-[25%] top-[20%]"
          initial="initial"
          animate="animate"
          custom={1}
          variants={floatVariants}
        >
          <motion.svg 
            width="70" 
            height="70" 
            viewBox="0 0 70 70"
            initial="initial"
            animate="animate"
            custom={1}
            variants={rotateVariants}
          >
            <polygon points="35,0 70,35 35,70 0,35" className="fill-blue-500/15" />
          </motion.svg>
        </motion.div>

        <motion.div 
          className="absolute left-[30%] bottom-[20%]"
          initial="initial"
          animate="animate"
          custom={2}
          variants={floatVariants}
        >
          <motion.svg 
            width="80" 
            height="80" 
            viewBox="0 0 80 80"
            initial="initial"
            animate="animate"
            custom={2}
            variants={rotateVariants}
          >
            <circle cx="40" cy="40" r="40" className="fill-green-500/15" />
          </motion.svg>
        </motion.div>

        <motion.div 
          className="absolute right-[30%] bottom-[30%]"
          initial="initial"
          animate="animate"
          custom={3}
          variants={floatVariants}
        >
          <motion.svg 
            width="65" 
            height="65" 
            viewBox="0 0 65 65"
            initial="initial"
            animate="animate"
            custom={3}
            variants={rotateVariants}
          >
            <polygon points="32.5,0 65,65 0,65" className="fill-yellow-500/15" />
          </motion.svg>
        </motion.div>
      </div>

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

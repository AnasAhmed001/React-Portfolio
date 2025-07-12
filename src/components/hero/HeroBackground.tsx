
import { motion } from "framer-motion";

const HeroBackground = () => {
  // Optimized animation variants - using transform only
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          delay: i * 0.3,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          delay: i * 0.3,
        }
      }
    })
  };

  const floatVariants = {
    initial: { transform: 'translateY(0px)' },
    animate: (i: number) => ({
      transform: ['translateY(0px)', 'translateY(-10px)', 'translateY(0px)'],
      transition: {
        duration: 4 + i, 
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  };

  const rotateVariants = {
    initial: { transform: 'rotate(0deg)' },
    animate: (i: number) => ({
      transform: `rotate(${i % 2 === 0 ? 360 : -360}deg)`,
      transition: {
        duration: 25 + i * 5,
        repeat: Infinity,
        ease: "linear",
      }
    })
  };

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      {/* Animated SVG background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {/* Abstract geometric shapes */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full opacity-70"
          viewBox="0 0 1000 1000"
        >
          {/* Simplified animated elements */}
          <motion.circle
            cx="150"
            cy="150"
            r="80"
            stroke="currentColor"
            strokeWidth="1"
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
            strokeWidth="1"
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
            strokeWidth="1"
            className="text-primary/20"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={pathVariants}
          />
          <motion.path
            d="M100,900 Q500,980 900,900"
            stroke="currentColor"
            strokeWidth="1" 
            className="text-blue-500/10"
            fill="none"
            initial="hidden"
            animate="visible"
            custom={1}
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
    </motion.div>
  );
};

export default HeroBackground;

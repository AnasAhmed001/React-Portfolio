
import { motion, useTransform, MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

const HeroBackground = ({ scrollYProgress }: HeroBackgroundProps) => {
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
    <>
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
    </>
  );
};

export default HeroBackground;

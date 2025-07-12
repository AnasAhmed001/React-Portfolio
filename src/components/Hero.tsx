
import { motion } from "framer-motion";
import { useRef } from "react";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import ScrollIndicator from "./hero/ScrollIndicator";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform' }}
    >
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />
    </motion.section>
  );
};

export default Hero;

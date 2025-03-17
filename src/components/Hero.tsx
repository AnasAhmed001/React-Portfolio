
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import ScrollIndicator from "./hero/ScrollIndicator";

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
      <HeroBackground scrollYProgress={scrollYProgress} />
      <HeroContent y={y} opacity={opacity} />
      <ScrollIndicator />
    </section>
  );
};

export default Hero;

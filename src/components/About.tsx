
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import AboutContent from "./AboutContent";
import EducationTimeline from "./EducationTimeline";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background/0"
        style={{ y: backgroundY, willChange: 'transform' }}
      />

      <div className="section-container relative z-10">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Turning Ideas Into Digital Reality
          </h2>
        </AnimatedSection>

        <AboutContent />
        <EducationTimeline />
      </div>
    </section>
  );
};

export default About;

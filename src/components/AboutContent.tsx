import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const AboutContent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
      <AnimatedSection direction="left" delay={0.2}>
        <div className="aspect-[3/2] relative overflow-hidden rounded-2xl glass">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <img
            src="/profile.png"
            alt="Anas Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.4} className="space-y-6">
        <div>
          <h3 className="text-xl font-display font-semibold mb-3">
            <span className="highlight-text">My Approach</span>
          </h3>
          <p className="text-muted-foreground">
            I create clean, purposeful designs that blend creativity with code
            to deliver user-friendly, impactful experiences.
          </p>
        </div>

        <motion.a
          href="#projects"
          className={cn(
            "inline-flex items-center justify-center rounded-md mt-4",
            "px-5 py-2.5 text-sm font-medium",
            "border border-input bg-background",
            "transition-all duration-300 ease-out"
          )}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          See My Work
        </motion.a>
      </AnimatedSection>
    </div>
  );
};

export default AboutContent;

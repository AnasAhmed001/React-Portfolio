
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { Code, Gem, Globe, Lightbulb } from "lucide-react";

const skills = [
  { name: "Front-End", icon: <Code size={20} />, description: "Creating responsive, accessible, and performant user interfaces" },
  { name: "Design", icon: <Gem size={20} />, description: "Crafting beautiful, intuitive, and functional user experiences" },
  { name: "Innovation", icon: <Lightbulb size={20} />, description: "Finding creative solutions to complex problems" },
  { name: "Global Reach", icon: <Globe size={20} />, description: "Building products that reach and resonate with users worldwide" },
];

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
        style={{ y: backgroundY }}
      />

      <div className="section-container relative z-10">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Turning Ideas Into Digital Reality
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I craft innovative digital experiences that bring brands to life, combining thoughtful design with technical excellence.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="aspect-square relative overflow-hidden rounded-2xl glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium text-muted-foreground">Profile Image</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4} className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-semibold mb-3">
                <span className="highlight-text">Who I Am</span>
              </h3>
              <p className="text-muted-foreground">
                I'm a passionate designer and developer with a keen eye for detail and a love for creating beautiful, functional user experiences. With years of experience in the digital space, I've honed my skills to deliver projects that not only look stunning but also perform flawlessly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-3">
                <span className="highlight-text">My Approach</span>
              </h3>
              <p className="text-muted-foreground">
                I believe in the power of simplicity, elegance, and purpose. Every pixel I place and every line of code I write serves a specific function. By blending artistic sensibility with technical expertise, I create digital products that exceed expectations.
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
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              See My Work
            </motion.a>
          </AnimatedSection>
        </div>

        <div className="mt-20">
          <AnimatedSection className="text-center mb-10" direction="up">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Core Specialties
            </h3>
            <p className="max-w-xl mx-auto text-muted-foreground">
              These key areas form the foundation of my work
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection
                key={skill.name}
                direction="up"
                delay={0.2 + index * 0.1}
              >
                <div className="h-full glass rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

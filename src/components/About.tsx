
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { BookOpen, GraduationCap, Award, Calendar } from "lucide-react";
import { Separator } from "./ui/separator";

const educationItems = [
  {
    year: "2022",
    degree: "Master's Degree in Computer Science",
    institution: "Stanford University",
    description: "Specialized in artificial intelligence and machine learning technologies with focus on neural networks.",
    icon: <GraduationCap size={20} />,
  },
  {
    year: "2020",
    degree: "Bachelor's Degree in Software Engineering",
    institution: "MIT",
    description: "Graduated with honors. Focused on software architecture and web technologies.",
    icon: <BookOpen size={20} />,
  },
  {
    year: "2018",
    degree: "Web Development Certification",
    institution: "Udacity",
    description: "Completed an intensive program covering modern front-end and back-end technologies.",
    icon: <Award size={20} />,
  },
  {
    year: "2016",
    degree: "High School Diploma",
    institution: "Tech Preparatory Academy",
    description: "Graduated with distinction in mathematics and computer science.",
    icon: <Calendar size={20} />,
  },
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
              Education Timeline
            </h3>
            <p className="max-w-xl mx-auto text-muted-foreground">
              My academic journey and professional development
            </p>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px" />

            {/* Education items in alternating layout */}
            {educationItems.map((item, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.2 + index * 0.1}
                className="mb-16 last:mb-0"
              >
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  {/* Left side */}
                  <div className={index % 2 === 0 ? "pr-8" : "flex justify-end"}>
                    {index % 2 === 0 ? (
                      <div className="glass rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-right">
                        <h4 className="font-medium text-lg">{item.degree}</h4>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    ) : (
                      <div className="glass rounded-xl py-3 px-5 inline-block text-xl font-medium text-primary">
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* Middle icon */}
                  <div className="flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 glass flex items-center justify-center z-10 border-4 border-background text-primary">
                      {item.icon}
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={index % 2 === 0 ? "flex justify-start" : "pl-8"}>
                    {index % 2 === 0 ? (
                      <div className="glass rounded-xl py-3 px-5 inline-block text-xl font-medium text-primary">
                        {item.year}
                      </div>
                    ) : (
                      <div className="glass rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                        <h4 className="font-medium text-lg">{item.degree}</h4>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
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

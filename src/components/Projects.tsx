
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard, { Project } from "./ProjectCard";
import { cn } from "@/lib/utils";

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Dashboard",
    description: "A clean, modern dashboard interface with intuitive data visualization",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Elegant shopping experience with seamless checkout process",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    image: "/placeholder.svg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure and user-friendly financial management application",
    image: "/placeholder.svg",
    tags: ["React Native", "Redux", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
];

const filterOptions = ["All", "React", "Next.js", "TypeScript", "Tailwind CSS"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Selected Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my featured projects, showcasing my expertise in design and development
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-10 flex flex-wrap justify-center gap-2" direction="up" delay={0.2}>
          {filterOptions.map((filter) => (
            <motion.button
              key={filter}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-secondary"
              )}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

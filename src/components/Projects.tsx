import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard, { Project } from "./ProjectCard";
import { cn } from "@/lib/utils";

const projects: Project[] = [
  {
    id: 1,
    title: "AI Content Generator",
    description:
      "Built an AI content creator that connects social accounts, generates content roadmaps, and schedules posts intelligently.",
    image: "/AI_Content_Generator.webp",
    tags: [
      "Nextjs",
      "Tailwind CSS",
      "Ant Design",
      "Gemini API",
      "Node.js",
      "MongoDB",
      "Expressjs",
      "Redis",
      "BullMQ",
      "Python"
    ],
    liveUrl: "https://ai-content-creator-rho.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/AI_Content_Creator",
  },
  {
    id: 2,
    title: "Saylani Moments",
    description:
      "A face-detecting gallery built exclusively for Saylani Welfare International that streamlined event photo delivery.",
    image: "/Saylani-Moments.webp",
    tags: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "AWS",
      "DynamoDB",
      "Lambda",
      "S3",
    ],
    liveUrl: "https://moments.saylanimit.com/",
  },
  {
    id: 3,
    title: "Blogging App",
    description:
      "A clean, modern Blogging App built using ReactJS, Tailwind CSS, DaisyUI. It includes Firebase Authentication and Firestorage for seamless data storage and retrieval",
    image: "/Blogging_App.webp",
    tags: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
    liveUrl: "https://react-blogging-website-phi.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/React-blogging-website",
  },
  {
    id: 4,
    title: "Meme Maker App",
    description:
      "Built a Meme Maker App using NextJS and TailwindCSS which comes with in which user can create and download ",
    image: "/meme_maker.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://meme-maker-drab.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/meme-maker",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Built a beautiful weather app using ReactJS and tailwind CSS. Featuring a Responsive UI and geolocation to get user current loacation and display the weather using OpenWeatherApi.",
    image: "/weather-app.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://react-weather-app-eosin-iota.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/React-Weather-App",
  },
];

const filterOptions = ["All", "React", "Next.js", "HTML/CSS"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

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
            Explore my featured projects, showcasing my expertise in design and
            development
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="mb-10 flex flex-wrap justify-center gap-2"
          direction="up"
          delay={0.2}
        >
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

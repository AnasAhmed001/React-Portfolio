import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "React.Js Developer Intern",
    company: "Saylani Tech",
    location: "Karachi, Pakistan (Onsite)",
    period: "July 2025 - Present",
    description: [
      "Built production-ready React.js apps with Shadcn UI and Tailwind CSS, including Saylani Moments a face-detecting gallery built exclusively for Saylani Welfare International that streamlined event photo delivery.",
      "Integrated AWS S3, DynamoDB and Lambda to optimize cloud functionality, reducing data retrieval time and boosting app performance.",
      "Currently building an AI SaaS platform frontend with Next.js and LinkedIn/X integrations for automated content creation and scheduling to enhance engagement and follower growth."
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "AWS", "Material UI"]
  },
  {
    id: 2,
    title: "React.Js Intern",
    company: "Plural Dynamics",
    location: "Karachi, Pakistan (Remote)",
    period: "May 2025 - July 2025",
    description: [
      "Contributed to a student management sytem using React and by integrating backend Api's.",
      "Worked closely with senior developers to learn best practices",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Assisted in debugging and testing web applications"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "GitHub", "Ant Design", "Material UI"]
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Prodigy Info Tech",
    location: "Karachi, Pakistan (Remote)",
    period: "March 2025 - April 2025",
    description: [
      "Created custom websites for small businesses and startups",
      "Managed full project lifecycle from requirements to deployment",
      "Delivered projects on time and within budget constraints",
      "Provided ongoing maintenance and support for client websites"
    ],
    technologies: ["HTML/CSS", "JavaScript", "Git", "GitHub"]
  }
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/0 to-secondary/30"
        style={{ y: backgroundY, willChange: 'transform' }}
      />

      <div className="section-container relative z-10">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Professional Journey
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My career path and the experiences that shaped my expertise
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              direction="up"
              delay={index * 0.2}
              className="relative"
            >
              <motion.div
                className="glass rounded-2xl p-6 md:p-8 border border-border/50 h-auto min-h-[320px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
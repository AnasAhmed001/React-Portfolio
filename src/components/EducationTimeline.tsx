
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: JSX.Element;
}

const educationItems: EducationItem[] = [
  {
    year: "Present",
    degree: "Bachelor's Degree In Computer Science",
    institution: "Federal Urdu University",
    description: "Pursuing a bachelor's in Computer Science, focusing on programming, data structures, algorithms, databases, and software development.",
    icon: <GraduationCap size={20} />,
  },
  {
    year: "2023 - 2024",
    degree: "MERN Stack Development Student",
    institution: "Sylani Mass IT Training (SMIT)",
    description: "Completed MERN Stack training at Saylani, gaining hands-on experience in MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
    icon: <BookOpen size={20} />,
  },
  {
    year: "2022 - 2024",
    degree: "F.CS",
    institution: "Govt. Islami Science College",
    description: "Completed intermediate education in Computer Science from Islami Science College with good grades.",
    icon: <Award size={20} />,
  },
  {
    year: "2022",
    degree: "Martriculation",
    institution: "Children Garden School",
    description: "Completed Matriculation in Computer Science with A Grade and with various awards.",
    icon: <Calendar size={20} />,
  },
];

const EducationTimeline = () => {
  return (
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
  );
};

export default EducationTimeline;

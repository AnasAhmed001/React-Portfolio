import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, Calendar } from "lucide-react";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: JSX.Element;
}

const educationItems: EducationItem[] = [
  {
    year: "2025 - Present",
    degree: "Bachelor's Degree In Computer Science",
    institution: "Federal Urdu University",
    description: "Pursuing a bachelor's in Computer Science, focusing on programming, data structures, algorithms, databases, and software development.",
    icon: <GraduationCap size={20} />,
  },
  {
    year: "2023 - Present",
    degree: "Cloud Applied Agentic AI Developer",
    institution: "Governor House (GIAIC)",
    description: "Learning Cloud Applied Agentic AI development at GIAIC, focusing on building intelligent applications using cloud technologies and AI frameworks.",
    icon: <BookOpen size={20} />,
  },
  {
    year: "2023 - 2024",
    degree: "MERN Stack Development Student",
    institution: "Sylani Mass IT Training (SMIT)",
    description: "Completed MERN Stack training at Saylani, gaining hands-on experience in MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
    icon: <Award size={20} />,
  },
  {
    year: "2022 - 2024",
    degree: "F.CS",
    institution: "Govt. Islami Science College",
    description: "Completed intermediate education in Computer Science from Islami Science College with good grades.",
    icon: <Calendar size={20} />,
  },
];

const EducationTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0, // Removed delay to start immediately
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 }, // Removed y: 30 to prevent layout shift
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, // Faster animation
    },
  };

  return (
    <motion.div
      className="mt-20 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "50px" }} // Lower threshold + margin for earlier trigger
    >
      <motion.div
        className="text-center mb-10"
        variants={itemVariants} // Animate the title block as the first item
      >
        <h3 className="text-2xl font-display font-semibold mb-2">
          Education Timeline
        </h3>
        <p className="max-w-xl mx-auto text-muted-foreground">
          My academic journey and professional development
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline central vertical line - hidden on mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px hidden md:block" />

        {/* Education items */}
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-16 last:mb-0"
            variants={itemVariants} // Each item uses the same variant
          >
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 glass flex items-center justify-center border-4 border-background text-primary">
                {item.icon}
              </div>
              
              {/* Year Badge */}
              <div className="glass rounded-xl py-2 px-4 text-lg font-medium text-primary">
                {item.year}
              </div>
              
              {/* Content Card */}
              <div className="glass rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
                <h4 className="font-medium text-lg mb-2">{item.degree}</h4>
                <p className="text-muted-foreground mb-2">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
              {/* Left side */}
              <div className={`${index % 2 === 0 ? "pr-4 lg:pr-8" : "flex justify-end"}`}>
                {index % 2 === 0 ? (
                  <div className="glass rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 text-right">
                    <h4 className="font-medium text-lg break-words">{item.degree}</h4>
                    <p className="text-muted-foreground break-words">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2 break-words">{item.description}</p>
                  </div>
                ) : (
                  <div className="glass rounded-xl py-3 px-4 lg:px-5 inline-block text-lg lg:text-xl font-medium text-primary">
                    {item.year}
                  </div>
                )}
              </div>

              {/* Middle icon */}
              <div className="flex justify-center items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 glass flex items-center justify-center z-10 border-4 border-background text-primary">
                  {item.icon}
                </div>
              </div>

              {/* Right side */}
              <div className={`${index % 2 === 0 ? "flex justify-start" : "pl-4 lg:pl-8"}`}>
                {index % 2 === 0 ? (
                  <div className="glass rounded-xl py-3 px-4 lg:px-5 inline-block text-lg lg:text-xl font-medium text-primary">
                    {item.year}
                  </div>
                ) : (
                  <div className="glass rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-lg break-words">{item.degree}</h4>
                    <p className="text-muted-foreground break-words">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2 break-words">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationTimeline;

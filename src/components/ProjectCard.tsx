
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-background rounded-xl overflow-hidden border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.div
          className="w-full h-full bg-muted flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-lg text-muted-foreground">
            {project.title} Image
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-display font-semibold mb-2">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium",
                "text-foreground hover:text-primary transition-colors"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium",
                "text-foreground hover:text-primary transition-colors"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={16} />
              <span>Source Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

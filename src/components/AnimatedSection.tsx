
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAnimateInView } from "@/utils/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) => {
  const { ref, isInView } = useAnimateInView({ once, amount: 0.3 });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitialPosition()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

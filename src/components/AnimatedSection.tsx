
import { ReactNode, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const variants = useMemo(() => {
    const initial = { opacity: 0 };
    switch (direction) {
      case "up":
        Object.assign(initial, { y: 40 });
        break;
      case "down":
        Object.assign(initial, { y: -40 });
        break;
      case "left":
        Object.assign(initial, { x: 40 });
        break;
      case "right":
        Object.assign(initial, { x: -40 });
        break;
      default:
        break;
    }
    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  }, [direction, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

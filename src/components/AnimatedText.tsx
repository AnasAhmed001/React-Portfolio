
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayOffset?: number;
}

export const AnimatedText = ({
  text,
  className,
  once = true,
  delayOffset = 0,
}: AnimatedTextProps) => {
  // Split text into words
  const words = text.split(" ");

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delayOffset * 0.1 },
    }),
  };

  // Animation variants for each word
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

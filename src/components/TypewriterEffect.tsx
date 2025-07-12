
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterEffect = ({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenWords = 1200,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current word being processed
      const currentWord = words[currentWordIndex];
      
      // If deleting
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // If typing
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      // Determine next state
      if (!isDeleting && currentText === currentWord) {
        // Start deleting after delay
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        // Move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <div className={cn("inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          {currentText}
          <span className="animate-pulse">|</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterEffect;

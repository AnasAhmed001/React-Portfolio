
import { MotionValue, useTransform, useScroll, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useSmoothScroll = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return smoothProgress;
};

export const useAnimateInView = (options = { once: true, amount: 0.3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const currentProgress = totalHeight > 0 ? scrollPosition / totalHeight : 0;
      setProgress(currentProgress);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return progress;
};

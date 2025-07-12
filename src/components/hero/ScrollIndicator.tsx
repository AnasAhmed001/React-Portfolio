
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, transform: 'translateY(10px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform' }}
    >
      <span className="text-xs font-medium text-muted-foreground mb-2">Scroll</span>
      <motion.div
        className="w-5 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'opacity' }}
      >
        <motion.div
          className="w-1 h-1.5 rounded-full bg-muted-foreground"
          animate={{ transform: ['translateY(0px)', 'translateY(6px)', 'translateY(0px)'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;

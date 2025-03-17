
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <span className="text-xs font-medium text-muted-foreground mb-2">Scroll</span>
      <motion.div
        className="w-5 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-1.5 rounded-full bg-muted-foreground"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;

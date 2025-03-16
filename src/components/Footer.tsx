
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <motion.div 
            className="text-foreground font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Portfolio
          </motion.div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
        
        <motion.nav className="flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm text-muted-foreground",
                "hover:text-foreground transition-colors"
              )}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </footer>
  );
};

export default Footer;

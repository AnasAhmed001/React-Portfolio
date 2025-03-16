
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        isScrolled ? "glass" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-lg font-display font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Portfolio
        </motion.a>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span 
                  className="w-full h-[2px] bg-foreground rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-[2px] bg-foreground rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-[2px] bg-foreground rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>

            <motion.nav
              className={cn(
                "fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md",
                "flex flex-col items-center justify-center gap-8",
                "transition-all duration-300 ease-in-out"
              )}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : "100%"
              }}
              transition={{ duration: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium text-foreground py-3",
                    activeSection === item.href.substring(1) && "text-primary"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.4,
                    delay: isMenuOpen ? index * 0.1 : 0
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          </>
        ) : (
          <nav className="flex items-center gap-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link",
                  activeSection === item.href.substring(1) && "active"
                )}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

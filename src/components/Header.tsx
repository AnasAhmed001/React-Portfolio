import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Add section offsets for direct scrolling
const getSectionPosition = (sectionId: string): number => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    return sectionElement.offsetTop - 80; // Subtract header height for better positioning
  }
  
  // Fallback positions if elements aren't found
  const fallbackPositions: Record<string, number> = {
    'home': 0,
    'about': window.innerHeight,
    'projects': window.innerHeight * 2,
    'contact': window.innerHeight * 3
  };
  
  return fallbackPositions[sectionId] || 0;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      
      // Set active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    // Close mobile menu first
    setMobileMenuOpen(false);
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" 
          : "py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl font-display font-semibold"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Portfolio
        </motion.a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "active"
              )}
              whileHover={{ y: -2 }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "py-3 text-base font-medium",
                    activeSection === link.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

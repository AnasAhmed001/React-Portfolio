
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollProgress } from "@/utils/animations";

const Index = () => {
  // For framer-motion scroll animations
  const { scrollYProgress } = useScroll();
  const scrollProgress = useScrollProgress();

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      <Header />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

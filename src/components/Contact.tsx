import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email content
      const subject = `Contact from ${formState.name}`;
      const body = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
      `;
      
      // Try to open mail client with mailto link
      const mailtoLink = `mailto:hafizanasahmed8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const windowRef = window.open(mailtoLink);
      
      // Check if mailto was successful
      if (!windowRef || windowRef.closed || typeof windowRef.closed === 'undefined') {
        // If mail client didn't open, provide alternate instructions
        toast.info("Your email app didn't open automatically. You can manually send an email to hafizanasahmed8@gmail.com", {
          duration: 5000,
        });
      } else {
        // Success message
        toast.success("Email client opened! Send your message to complete the process.");
        
        // Reset form
        setFormState({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error("There was a problem opening your email client.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to learn more about my work? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-10">
          <AnimatedSection className="md:col-span-2 space-y-8" direction="left" delay={0.2}>
            <div>
              <h3 className="text-xl font-display font-semibold mb-6">
                <span className="highlight-text">Contact Information</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:hafizanasahmed8@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hafizanasahmed8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media or reach out directly. I'm always open to new opportunities and collaborations.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
                  whileHover={{ y: -3, backgroundColor: "#0077B5", color: "#fff" }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
                  whileHover={{ y: -3, backgroundColor: "#333", color: "#fff" }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-3 glass rounded-xl p-6 sm:p-8" direction="right" delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-md bg-background",
                      "border border-input focus:border-primary",
                      "text-foreground placeholder:text-muted-foreground",
                      "transition-colors focus:outline-none"
                    )}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-md bg-background",
                      "border border-input focus:border-primary",
                      "text-foreground placeholder:text-muted-foreground",
                      "transition-colors focus:outline-none"
                    )}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-2.5 rounded-md bg-background",
                    "border border-input focus:border-primary",
                    "text-foreground placeholder:text-muted-foreground",
                    "transition-colors focus:outline-none min-h-[120px] resize-y"
                  )}
                  placeholder="Your message"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "rounded-md px-5 py-2.5",
                  "text-sm font-medium",
                  "bg-primary text-primary-foreground",
                  "transition-all duration-300 ease-out",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={16} />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

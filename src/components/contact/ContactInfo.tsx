
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
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
                Karachi, Pakistan
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
            href="www.linkedin.com/in/anas-ahmed01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
            whileHover={{ y: -3, backgroundColor: "#333", color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/AnasAhmed001"
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
    </div>
  );
};

export default ContactInfo;

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "Email service is not configured. Please contact the site administrator."
      );
      console.error("EmailJS environment variables are not set.");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
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
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        <Send size={16} />
      </motion.button>
    </form>
  );
};

export default ContactForm;

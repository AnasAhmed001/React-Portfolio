
import AnimatedSection from "./AnimatedSection";
import ContactHeader from "./contact/ContactHeader";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <ContactHeader />
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-10">
          <AnimatedSection className="md:col-span-2" direction="left" delay={0.2}>
            <ContactInfo />
          </AnimatedSection>

          <AnimatedSection className="md:col-span-3 glass rounded-xl p-6 sm:p-8" direction="right" delay={0.4}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

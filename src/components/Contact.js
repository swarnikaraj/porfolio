// components/Contact.js
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { availableFor, contactInfo } from "@/utils/contanst";

const Contact = () => {
  return (
    <section id="contact" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Available For
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden mb-12">
          {availableFor.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface p-6"
            >
              <h3 className="text-foreground font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200"
          >
            <FaEnvelope size={14} /> {contactInfo.email}
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-border-hover transition-colors duration-200"
          >
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
          >
            <FaGithub size={14} /> GitHub <FaArrowRight size={10} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


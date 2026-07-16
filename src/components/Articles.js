// components/Articles.js
"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const writingFocus = [
  "Distributed Systems",
  "Platform Engineering",
  "Production Lessons",
  "Golang",
  "Scaling",
  "Architecture",
];

const Articles = () => {
  return (
    <section id="articles" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl"
        >
          <p className="section-label mb-4">Writing</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Things worth writing down.
          </h2>
          <p className="text-sm text-muted mt-4 leading-relaxed">
            No generic how-tos. Writing focused on production lessons from
            building platforms and distributed systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {writingFocus.map((topic) => (
            <span
              key={topic}
              className="text-xs text-muted border border-border rounded-full px-3 py-1.5"
            >
              {topic}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://swarnnika.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground border border-border rounded-md px-5 py-3 hover:border-border-hover transition-colors"
          >
            Latest on the blog <FaArrowRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/swarnnika/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors px-5 py-3"
          >
            Latest LinkedIn posts <FaArrowRight size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;

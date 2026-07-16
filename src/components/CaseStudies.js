// components/CaseStudies.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { caseStudies } from "@/utils/contanst";

const fields = [
  { key: "problem", label: "Problem" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "tradeoffs", label: "Tradeoffs" },
  { key: "outcome", label: "Outcome" },
  { key: "lessons", label: "Lessons Learned" },
];

const CaseStudyCard = ({ study, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-border rounded-lg bg-surface"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-6"
      >
        <div>
          <span className="text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl text-foreground font-medium mt-2 mb-2">
            {study.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            {study.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <FaChevronDown
          className={`text-muted mt-2 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map(({ key, label }) => (
                <div key={key}>
                  <p className="text-xs uppercase tracking-wider text-accent mb-2">
                    {label}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {study[key]}
                  </p>
                </div>
              ))}
            </div>
            {(study.githubLink || study.liveLink) && (
              <div className="px-6 pb-6 flex flex-wrap items-center gap-6">
                {study.githubLink && (
                  <a
                    href={study.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <FaGithub /> View repository
                  </a>
                )}
                {study.liveLink && (
                  <a
                    href={study.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt size={12} /> View live site
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Engineering thinking, not screenshots.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

// components/OpenSource.js
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch } from "react-icons/fa";
import { openSourceRepos, openSourceRoadmap } from "@/utils/contanst";

const OpenSource = () => {
  return (
    <section id="open-source" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Open Source</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Pinned repositories &amp; experiments.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {openSourceRepos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-lg p-6 bg-surface hover:border-border-hover transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <FaGithub className="text-muted" />
                  {repo.name}
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-lg p-6 bg-surface"
        >
          <p className="text-xs uppercase tracking-wider text-accent mb-4">
            Roadmap
          </p>
          <ul className="space-y-3">
            {openSourceRoadmap.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <FaCodeBranch className="text-muted mt-1 flex-shrink-0" size={12} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;

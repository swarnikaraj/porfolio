// components/TrustedBy.js
"use client";
import { motion } from "framer-motion";
import { experience, credentials } from "@/utils/contanst";

const TrustedBy = () => {
  return (
    <section className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label text-center mb-12"
        >
          Trusted By
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {experience.map((role, index) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface px-6 py-5 flex items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-foreground font-medium">{role.company}</h3>
                  {role.current && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                      Current
                    </span>
                  )}
                </div>
                {role.team && (
                  <p className="text-sm text-muted mt-0.5">{role.team}</p>
                )}
                <p className="text-sm text-muted mt-0.5">{role.role}</p>
              </div>
              <span className="text-xs text-muted whitespace-nowrap">
                {role.period}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {credentials.map((item) => (
            <span
              key={item}
              className="text-xs text-muted border border-border rounded-full px-3 py-1.5"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;

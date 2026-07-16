// components/WhatIBuild.js
"use client";
import { motion } from "framer-motion";
import { buildAreas } from "@/utils/contanst";

const WhatIBuild = () => {
  return (
    <section id="what-i-build" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">What I Build</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Grouped by the problem, not the stack.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {buildAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface p-6 hover:bg-surface-hover transition-colors duration-200"
            >
              <h3 className="text-foreground font-medium mb-3">{area.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{area.problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;

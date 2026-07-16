// components/EngineeringPhilosophy.js
"use client";
import { motion } from "framer-motion";
import { philosophy } from "@/utils/contanst";

const EngineeringPhilosophy = () => {
  return (
    <section id="philosophy" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Engineering Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            How I think about building systems.
          </h2>
        </motion.div>

        <div className="divide-y divide-border border-t border-b border-border">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-8"
            >
              <h3 className="text-foreground font-medium">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;

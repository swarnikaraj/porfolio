// components/BeyondCode.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { beyondCode } from "@/utils/contanst";

const BeyondCode = () => {
  return (
    <section id="beyond-code" className="section px-6 bg-background border-t border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Beyond Code</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            A few things that matter just as much.
          </h2>
          <p className="text-sm text-muted mt-4 leading-relaxed">
            Animal rights matter to me like family, not a side interest.
            Beyond that: veganism, fitness, and generative art.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {beyondCode.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="border border-border rounded-lg bg-surface overflow-hidden"
            >
              {item.image && (
                <div className="relative h-40 w-full grayscale opacity-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-foreground font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.links && (
                  <div className="flex flex-wrap items-center gap-4">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label} <FaArrowRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;

// components/Hero.js
"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  const metaTags = [
    "Platform Engineer @ IBM/HashiCorp",
    "Distributed Systems",
    "Golang",
    "Kubernetes",
    "gRPC",
    "AI Infrastructure",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6  bg-background">
      <div className="max-w-content mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          Swarnnika Raj Singh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-display-lg font-semibold text-foreground max-w-4xl mx-auto"
        >
          Building cloud platforms for the AI era.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl md:text-2xl text-muted font-light h-10"
        >
          <TypeAnimation
            sequence={[
              "Platform Engineer",
              1800,
              "Distributed Systems",
              1800,
              "AI Infrastructure",
              1800,
              "Cloud Platforms",
              1800,
              "Kubernetes",
              1800,
              "Golang",
              1800,
              "Builder",
              1800,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {metaTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#case-studies"
            className="px-6 py-3 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200"
          >
            View Case Studies
          </Link>
          <Link
            href="#articles"
            className="px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-border-hover transition-colors duration-200"
          >
            Read Articles
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
          >
            Get In Touch →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


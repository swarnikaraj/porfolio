// components/Skills.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaDatabase, FaBrain } from "react-icons/fa";

const CategoryIcon = ({ category }) => {
  switch (category) {
    case "Frontend Development":
      return <FaCode size={16} />;
    case "Backend Development":
      return <FaServer size={16} />;
    case "Cloud & DevOps":
      return <FaCloud size={16} />;
    case "Database & Storage":
      return <FaDatabase size={16} />;
    case "AI & Tools":
      return <FaBrain size={16} />;
    default:
      return <FaCode size={16} />;
  }
};

const skillsData = {
  "Backend Development": [
    "Node.js",
    "Python",
    "Golang",
    "REST APIs",
    "WebRTC",
    "WebSocket",
    "Microservices",
  ],
  "Frontend Development": [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "HTML5/CSS3",
    "Redux",
    "Material UI",
    "Webpack",
  ],

  "Cloud & DevOps": [
    "AWS Services",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "Shell Scripting",
  ],
  "Database & Storage": [
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "MySQL",
    "DynamoDB",
    "Elasticsearch",
    "S3",
    "Firebase",
  ],
  "AI & Tools": ["OpenAI", "LangChain", "Vector Databases", "Git", "Terraform"],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Backend Development");

  return (
    <section id="skills" className="py-20 px-4 bg-[#0a0a0a] relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit crafted through years of building scalable
            solutions and solving complex problems.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-transparent"
              }`}
            >
              <CategoryIcon category={category} />
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <span className="text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Cloud Architecture",
              description:
                "Designing and implementing scalable cloud solutions across AWS, GCP, and Azure.",
              Icon: FaCloud,
            },
            {
              title: "Full Stack Development",
              description:
                "Building end-to-end applications with modern frameworks and best practices.",
              Icon: FaCode,
            },
            {
              title: "AI Integration",
              description:
                "Implementing AI solutions using latest technologies and vector databases.",
              Icon: FaBrain,
            },
          ].map((expertise, index) => (
            <div
              key={index}
              className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <expertise.Icon className="text-blue-400 mb-4" size={24} />
              <h3 className="text-xl font-semibold text-white mb-2">
                {expertise.title}
              </h3>
              <p className="text-gray-400">{expertise.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

// components/Experience.js
"use client";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendar } from "react-icons/fa";

const experiences = [
  {
    company: "UST",
    position: "Software Development Engineer(III)",
    period: "June 2024 - Present",
    location: "Bangalore",
    achievements: [
      "Led migration of on-premise applications to AWS, reducing costs by 40%",
      "Implemented Cloudwatch-to-S3 data pipeline with QuickSight dashboard",
      "Built RAG-based chatbot for intelligent documentation search",
    ],
    tech: ["Python", "AWS", "ReactJs", "Langchain", "OpenAI", "Golang"],
  },
  {
    company: "HealthworksAI",
    position: "Software Development Engineer (II)",
    period: "Dec 2022 - May 2024",
    location: "Remote",
    achievements: [
      "Designed no-code analytics dashboard platform with micro-services",
      "Migrated backend APIs to Azure serverless, reducing costs by 30%",
      "Built central hub for company products with 50% user engagement increase",
    ],
    tech: [
      "Python",
      "NodeJs",
      "TypeScript",
      "Azure",
      "React",
      "NextJs",
      "Golang",
    ],
  },
  {
    company: "Omnicell",
    position: "Software Development Engineer (I)",
    period: "Mar 2022 - Aug 2022",
    location: "Bangalore",
    achievements: [
      "Developed ticketing system for streamlined issue tracking",
      "Implemented real-time notification system",
    ],
    tech: ["NodeJs", "React", "AWS SNS", "SQS", "Docker"],
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-800 group-last:h-[50%]" />

      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-blue-500" />

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <FaBuilding className="text-blue-400" />
              <span>{experience.company}</span>
              <span className="text-gray-600">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaCalendar className="text-blue-400" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* <ul className="mb-4 space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300">
              <span className="text-blue-400 mt-1">›</span>
              {achievement}
            </li>
          ))}
        </ul> */}

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[#0a0a0a] relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A track record of building innovative solutions and driving
            technological advancement.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900/30 rounded-xl p-8 backdrop-blur-sm border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white">
                National Institute of Food Technology Entrepreneurship and
                Management
              </h4>
              <p className="text-gray-400">Sonipat</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 mt-2 md:mt-0">
              <span>Aug 2017 - Jun 2021</span>
              <span className="text-blue-400">CGPA: 8.30/10</span>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-gray-300 font-medium mb-2">
              Relevant Coursework:
            </h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Object Oriented Programming",
                "Databases",
                "Data Structures and Algorithms",
                "Operating Systems",
                "Computer Networks",
                "Linux",
              ].map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

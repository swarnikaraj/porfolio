// components/Projects.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "AI Powered Real-time Chat",
    description:
      "Real-time chat app with face recognition auth, WebSocket messaging, and speech-to-text functionality using AWS Rekognition.",
    tech: [
      "Python",
      "Next.js",
      "Node.js",
      "TypeScript",
      "WebSocket",
      "AWS",
      "Redis",
    ],
    category: "AI",
    year: "2025",
    image: "/chatsphere.png",
    github: "https://github.com/swarnikaraj/chatsphere",
    live: "https://chatsphere-mzgl.vercel.app/",
  },
  {
    title: "Cloud Managed Vector Database",
    description:
      "Serverless subscription-based vector database platform with instant provisioning and connection string generation.",
    tech: ["Next.js", "Golang", "Kubernetes", "Docker", "GCP", "C++", "Python"],
    category: "Cloud",
    year: "2025",
    image: "/vector-db.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Creation Platform",
    description:
      "Subscription-based platform for YouTubers and content creators, reducing content creation time by 20-30%.",
    tech: [
      "Python",
      "Next.js",
      "Node.js",
      "GCP",
      "FFMPEG",
      "Razorpay",
      "OpenAI",
    ],
    category: "AI",
    year: "2025",
    image: "/gentuber.png",
    github: "https://github.com/swarnikaraj/tubeAI/",
    live: "https://www.gentuber.com/",
  },

  {
    title: "NFT Minter Platform",
    description:
      "Full-stack NFT Minting Platform with 3k+ minters, generating 15 ETH in transaction volume.",
    tech: ["React", "Solidity", "IPFS", "Ethereum", "Web3.js"],
    category: "Blockchain",
    year: "2024",
    image: "/minter.png",
    github: "https://github.com/swarnikaraj/BBMintNew/",
    live: "https://bb-mint-new.vercel.app/",
  },
  {
    title: "Video Transcoder",
    description:
      "event-driven video transcoding platform designed to process and convert video files into multiple formats and resolutions for seamless playback across device",
    tech: [
      "Nextjs",
      "Golang",
      "AWS Lambda",
      "Redis Queue",
      "Redis PubSub",
      "Docker",
      "AWS ECS",
      "Event driven",
    ],
    category: "Cloud",
    year: "2024",
    image: "/videotranscode.jpg",
    github: "https://github.com/swarnikaraj/videotranscoder12",
    live: "#",
  },
  {
    title: "Vercel Clone",
    description:
      "One click deployment for Web application, a Vercel like platform enabling developers to deploy frontend with a single click, providing seamless CI/CD ,ensuring  availability 99.9% uptime",
    tech: [
      "NodeJs",
      "NextJs",
      "AWS batch",
      "Docker",
      "S3",
      "SQS",
      "message queue",
      "Redis",
      "Pubsub",
      "Shell Script",
    ],
    category: "Cloud",
    year: "2024",
    image: "/vercel.jpg",
    github: "https://github.com/swarnikaraj/vercel-clone",
    live: "https://vercel-clone-lake.vercel.app/",
  },
  {
    title: "Multi-User Video Calling",
    description:
      "A scalable, real-time video communication platform built with WebRTC technology that enables seamless multi-user video conferencing",
    tech: ["WebRTC", "React", "Nodejs", "WebSocket"],
    category: "WebRTC",
    year: "2024",
    image: "/videocalling.jpg",
    github: "https://github.com/swarnikaraj/videocall",
    live: "#",
  },

  {
    title: "NFT Market Place",
    description: "NFT Market Place platform to buy, sell, aution nfts",
    tech: [
      "React",
      "Mongodb",
      "Nodejs",
      "Alchemy",
      "Solidity",
      "IPFS",
      "Ethereum",
      "Web3.js",
    ],
    category: "Blockchain",
    year: "2022",
    image: "/nftmarket.png",
    github: "https://github.com/swarnikaraj/nftExchangeFrontEnd",
    live: "https://bb-mint-new.vercel.app/",
  },
  {
    title: "Facebook clone",
    description:
      "Facebook is a social networking site, Allow user to connect with friends, Debounced search system, User friendly dashboard",
    tech: ["React", "Nodejs", "Express", "Mongodbimage.png"],
    category: "Web",
    year: "2021",
    image: "/fb.png",
    github: "https://github.com/swarnikaraj/Facebook-Clone",
    live: "https://facebook-cloners.vercel.app",
  },
  // {
  //   title: "Frontend Master-Clone",
  //   description:
  //     "Full-stack block chain based application to exchange ethereum.",
  //   tech: ["JavaScript", "Mongodb", "Express", "EJS", "Node"],
  //   category: "Web",
  //   year: "2021",
  //   image: "/frontendmaster.png",
  //   github: "https://github.com/swarnikaraj/front-end-master",
  //   live: "https://frontendmasters.vercel.app/",
  // },
  // {
  //   title: "Forest Essential Clone",
  //   description:
  //     "Forest Essential is an ecommerce cosmetic and consultancy application",
  //   tech: ["Javascript", "HTML", "CSS", "Nodejs"],
  //   category: "Web",
  //   year: "2021",
  //   image: "/ecom.png",
  //   github: "https://github.com/swarnikaraj/forest-essential",
  //   live: "https://iampankajk.github.io/Forest-Project/",
  // },
  // Add more projects...
];

const categories = ["All", "AI", "Cloud", "WebRTC", "Blockchain", "Web"];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <Image
          width={400}
          height={300}
          src={project.image || "https://via.placeholder.com/400x300"}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-400 text-sm">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
          <span className="text-sm text-gray-500">{project.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From AI-powered applications to blockchain solutions, explore my
            journey through code.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

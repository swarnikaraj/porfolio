// components/Hero.js
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEthereum,
  FaYoutube,
  FaArrowDown,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/swarnikaraj",
      icon: FaGithub,
      color: "hover:text-gray-100 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/swarnnika-raj-singh-a6731914b",
      icon: FaLinkedin,
      color: "hover:text-blue-400 hover:bg-blue-900/20",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/swarnika.eth/",
      icon: FaInstagram,
      color: "hover:text-pink-400 hover:bg-pink-900/20",
    },
    {
      name: "OpenSea",
      url: "https://opensea.io/0xCffbF030F0d41009EfD6800AA56FB9C8d9F5EEf2",
      icon: FaEthereum,
      color: "hover:text-blue-500 hover:bg-blue-900/20",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@FurryMitra/",
      icon: FaYoutube,
      color: "hover:text-red-500 hover:bg-red-900/20",
    },
  ];

  // Generate stars with different sizes and initial positions
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 0.05 + 0.01,
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Star Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              x: [0, (mousePosition.x - 0.5) * 50 * star.speed],
              y: [0, (mousePosition.y - 0.5) * 50 * star.speed],
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <div
          className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              -mousePosition.y * 20
            }px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ y }} className="text-center space-y-8">
          {/* Central Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-2 border-gray-700/50 border-dashed"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Swarnnika Raj Singh
            </span>
          </motion.h1>

          {/* Dynamic Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-400 font-light h-12"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Cloud Architect",
                2000,
                "AI Enthusiast",
                2000,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <FaArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

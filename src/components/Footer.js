// components/Footer.js
"use client";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEthereum,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Creative Work", href: "#creative" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/swarnikaraj" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/swarnnika-raj-singh-a6731914b",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/swarnika.eth/",
    },
    {
      name: "OpenSea",
      icon: FaEthereum,
      href: "https://opensea.io/0xCffbF030F0d41009EfD6800AA56FB9C8d9F5EEf2",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@FurryMitra/",
    },
  ];

  const techStack = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  return (
    <footer className="bg-[#0a0a0a] relative">
      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Swarnnika Raj Singh
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer crafting digital experiences with code and
              creativity. Building solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Built With
            </h3>
            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <tech.icon className="text-gray-500" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Swarnnika Raj Singh. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="text-red-500" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

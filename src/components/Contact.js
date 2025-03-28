// components/Contact.js
"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEthereum,
  FaYoutube,
  FaEnvelope,
  FaGlobe,
  FaRocket,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "swarnikarajsingh@gmail.com",
      icon: FaEnvelope,
      url: "mailto:swarnikarajsingh@gmail.com",
      color: "hover:text-purple-400",
    },
    {
      name: "Phone",
      value: "+91 7643-871-359",
      icon: FaPhone,
      url: "tel:+917643871359",
      color: "hover:text-green-400",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/swarnikaraj",
      icon: FaGithub,
      color: "hover:text-gray-100",
      description: "Check out my code repositories",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/swarnnika-raj-singh-a6731914b",
      icon: FaLinkedin,
      color: "hover:text-blue-400",
      description: "Connect with me professionally",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/swarnika.eth/",
      icon: FaInstagram,
      color: "hover:text-pink-400",
      description: "Follow my creative journey",
    },
    {
      name: "OpenSea",
      url: "https://opensea.io/0xCffbF030F0d41009EfD6800AA56FB9C8d9F5EEf2",
      icon: FaEthereum,
      color: "hover:text-blue-500",
      description: "Explore my NFT collections",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@FurryMitra/",
      icon: FaYoutube,
      color: "hover:text-red-500",
      description: "Watch our animal rescue stories",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0a] relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration or just want to say hi? Feel free to
            reach out!
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <FaGlobe className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Location</h3>
                <p className="text-gray-400">
                  Currently orbiting Planet Earth 🌍
                </p>
              </div>
            </div>
            <FaRocket className="text-3xl text-blue-400 animate-bounce" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <contact.icon className="text-2xl text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {contact.name}
                    </h3>
                    <p className="text-gray-400">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <social.icon
                    className={`text-2xl text-gray-400 ${social.color} group-hover:scale-110 transition-all duration-300`}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {social.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </a>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/Swarnnika_resume.pdf"
              download
              className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium 
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

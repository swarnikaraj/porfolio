import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Header = () => {
  return (
    <header className="bg-[#161A30]   text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 lg:mb-0">
          <span className="text-[#FC6736] ">S</span>warnnika{" "}
          <span className="text-[#FC6736] ">R</span>aj{" "}
          <span className="text-[#FC6736] ">S</span>ingh
        </div>
        <nav className="flex gap-4 flex-wrap justify-center lg:justify-end items-center">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Projects
          </a>
          <a href="https://swarnnika.hashnode.dev/" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Courses
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            Resume
          </a>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <a href="https://github.com/swarnikaraj" className="social-icon">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/swarnnika-raj-singh-a6731914b/"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>

            <a href="mailto:swarnikarajsingh@gmail.com" className="social-icon">
              <IoMail />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

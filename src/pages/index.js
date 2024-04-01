import * as THREE from "three";
import { useMemo, useState } from "react";
import { Inter } from "next/font/google";
import Pointer from "./Pointer";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Profile from "./Profile";
import Animatedbg from "./Animatedbg";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedSection, setSelectedSection] = useState({});

  const socialLinks = [
    { Icon: SlSocialGithub, link: "https://github.com/swarnikaraj" },
    {
      Icon: TiSocialLinkedin,
      link: "https://linkedin.com/in/swarnnika-raj-singh-a6731914b/",
    },
    { Icon: IoMail, link: "mailto:swarnikarajsingh@example.com" },
    { Icon: FaDiscord, link: "https://discordapp.com/yourusername" },
    { Icon: TiSocialYoutube, link: "https://youtube.com/swarnnikarajsingh" },
  ];

  const cardData = useMemo(
    () => [
      { text: "Profile", icon: "👤" },
      { text: "Skills", icon: "🛠️" },
      { text: "Projects", icon: "💻" },
      { text: "Work Experience", icon: "💼" },
    ],
    []
  );
  return (
    <main
      className={`flex flex-col bg-[rgba(0,0,0)] justify-center items-center ${inter.className}`}
    >
      <div className=" w-full z-20 py-8 flex items-center justify-center      ">
        <div className="flex  w-full px-4 fixed  flex-row-reverse gap-4 text-xl font-mono">
          <div className="underline cursor-pointer">Profile</div>
          <div className="underline cursor-pointer">Skills</div>
          <div className="underline cursor-pointer">Work Experince</div>
          <div className="underline cursor-pointer">Projects</div>
          <div className="underline cursor-pointer">Contact</div>
          <div className="underline cursor-pointer">Courses</div>
          <a href="https://swarnnika.hashnode.dev/">
            <div className="underline cursor-pointer">Blogs</div>
          </a>
        </div>
      </div>
      <div
        className={`flex font-mono text-gray-400  px-10 py-4 items-center justify-center`}
      >
        <div className="lg:flex xl:flex w-full ">
          {/* Profile Section (Sidebar) */}
          {selectedSection?.text == "Profile" && <Profile />}
          {selectedSection?.text == "Projects" && <Projects />}
          {selectedSection?.text == "Skills" && <Skills />}
          {selectedSection?.text == "Work Experience" && <Work />}

          {/* Animated Background Section (Center) */}
          <div
            style={{ width: "70vw" }}
            className="flex justify-center  items-center   "
          >
            <Animatedbg
              cardData={cardData}
              setSelectedSection={setSelectedSection}
              selectedSection={selectedSection}
            />
          </div>

          {/* Social Icons Section (Floating Bar on Right) */}
          <div className="  flex flex-col  px-4 gap-3 items-center justify-center  ">
            {socialLinks.map((item, index) => (
              <div key={index} className="">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <item.Icon className="text-gray-400 text-5xl hover:text-white" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pointer />
      <div className="py-2 text-sm text-gray-500  z-20  ">
        <div className="flex items-center justify-center">
          © Copyright {new Date().getFullYear()} - Developed by Swarnnika Raj
          Singh. All right reserved
        </div>
      </div>
    </main>
  );
}

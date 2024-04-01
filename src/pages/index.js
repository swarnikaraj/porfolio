import * as THREE from "three";
import { useMemo, useState } from "react";
import { Inter } from "next/font/google";

import Header from "./Header";
import HeroSection from "./Hero";
import ProjectSection from "./Project";
import ContactSection from "./Contact";
import Fun from "./Fun";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedSection, setSelectedSection] = useState({});

  const cardData = useMemo(
    () => [
      { text: "Profile", icon: "👤" },
      { text: "Skills", icon: "🛠️" },
      { text: "Projects", icon: "💻" },
      { text: "Work Experience", icon: "💼" },
    ],
    []
  );
  // bg col #161A30
  return (
    <main
      className={`flex items-center justify-center bg-[#111]  ${inter.className}`}
    >
      <div className="px-4 w-full lg:px-20 md:px-20 ">
        <Header />
        <div className=" flex items-center justify-center">
          <HeroSection />
        </div>
        <div className=" flex items-center justify-center">
          <ProjectSection />
        </div>
        <div className="py-10 flex items-center justify-center">
          <Fun />
        </div>

        <ContactSection />
        <div className="py-4 border-t border-gray-600 text-sm text-gray-500  z-20  ">
          <div className="flex items-center justify-center">
            © Copyright {new Date().getFullYear()} - Developed by Swarnnika Raj
            Singh. All right reserved
          </div>
        </div>
      </div>
    </main>
  );
}

import * as THREE from "three";
import { useMemo, useState } from "react";
import { Inter } from "next/font/google";

import Header from "./Header";
import HeroSection from "./Hero";
import ProjectSection from "./Project";
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
  return (
    <main
      className={`flex items-center justify-center bg-[#1F2544]  ${inter.className}`}
    >
      <div className="px-4 w-full">
        <Header />
        <div className="lg:px-28 md:px-24 px-4 flex items-center justify-center">
          <HeroSection />
        </div>
        <div className="lg:px-28 md:px-24 px-4 flex items-center justify-center">
          <ProjectSection />
        </div>

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

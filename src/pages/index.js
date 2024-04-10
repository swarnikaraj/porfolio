import * as THREE from "three";
import { useMemo, useState } from "react";
import { Inter } from "next/font/google";

import Header from "./Header";
import HeroSection from "./Hero";
import ProjectSection from "./Project";
import ContactSection from "./Contact";
import Fun from "./Fun";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedSection, setSelectedSection] = useState({});

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
        <Footer />
      </div>
    </main>
  );
}

import * as THREE from "three";
import Image from "next/image";
import { Inter } from "next/font/google";
import Pointer from "./Pointer";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Animatedbg from "./Animatedbg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
  return (
    <main
      className={`flex font-mono text-gray-400 px-10 py-4 items-center justify-center ${inter.className}`}
    >
      <div className="flex w-full h-full">
        {/* Profile Section (Sidebar) */}
        <div className="flex w-1/3 flex-col items-center px-2 uppercase border-l border-t border-b ">
          <p className="uppercase text-2xl">Profile</p>
          <div className="relative">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQHm5qVEZ2seeA/profile-displayphoto-shrink_800_800/0/1711647686431?e=1717632000&v=beta&t=BdU-0WhUXWPPM1LV4F33B-5ZhAEnoId9vSXNs43UFSY"
              width={250}
              height={250}
              alt="Picture of the author"
              className="rounded shadow shadow-gray-300 hover:shadow-sm"
            />
          </div>
          <p className="uppercase font-mono py-1">Swarnnika Raj SIngh</p>
          <p className="uppercase font-mono py-2">Full stack Developer</p>
          <div className="font-mono max-w-60 py-2">
            Passionate full-stack developer skilled in end-to-end project
            development and deployment. Known for agility with new technologies
            and innovative problem-solving.
          </div>
        </div>

        {/* Animated Background Section (Center) */}
        <div className="flex justify-center items-center w-3/4">
          <Animatedbg />
        </div>

        {/* Social Icons Section (Floating Bar on Right) */}
        <div className="py-8 flex flex-col  px-4 gap-3 items-center justify-center  ">
          {socialLinks.map((item, index) => (
            <div key={index} className="">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <item.Icon className="text-gray-400 text-5xl hover:text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Pointer />
    </main>
  );
}

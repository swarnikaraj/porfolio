import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className=" text-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <div className="text-[#FC6736]">Hi there,</div>
              <div>I&apos;m Swarnnika</div>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              I&apos;m a Full-Stack Developer passionate about programming &
              techtacks. Experienced in end-to-end project development and
              deployment. Known for agility with new technologies and innovative
              problem-solving.
            </p>

            <a
              href="#projects"
              className="hover:bg-[#FC6736] bg-teal-700 text-white font-semibold py-2 px-6 rounded-md mr-4"
            >
              View Projects
            </a>
            {/* <a
              href="#contact"
              className="bg-transparent hover:bg-gray-600 text-gray-300 font-semibold py-2 px-6 rounded-md border border-gray-300"
            >
              Contact Me
            </a> */}
          </div>
          <div className="text-center md:text-right  flex items-center justify-center">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQHm5qVEZ2seeA/profile-displayphoto-shrink_800_800/0/1711647686431?e=1717632000&v=beta&t=BdU-0WhUXWPPM1LV4F33B-5ZhAEnoId9vSXNs43UFSY"
              alt="Profile Picture"
              width={450}
              height={450}
              className="mx-auto md:mx-0  rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

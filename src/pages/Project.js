import React from "react";
import ProjectCard from "./ProjectCard";
const ProjectSection = () => {
  return (
    <section className=" py-10" id="projects">
      <div className=" pb-10">
        <h2 className="text-3xl font-bold pb-2 text-left text-[#FC6736]">
          __Projects
        </h2>
        {/* <p className="text-xl text-[#FFD0EC]">Check out my cool projects</p> */}
      </div>

      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProjectCard
            opensource={true}
            projectName={"Video Transcoder"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={"/videotranscode.jpg"}
            techStacks={[
              "Golang",
              "AWS Lambda",
              "AWS Queue",
              "Docker",
              "AWS ECS",
              "Event driven",
              "Nextjs",
            ]}
            liveLink={"https://github.com/swarnikaraj/videocall"}
          />
          <ProjectCard
            opensource={false}
            projectName={"Vercel Clone"}
            githubLink={"https://github.com/swarnikaraj/vercel-clone"}
            imageSrc={"/vercel.jpg"}
            techStacks={[
              "Nodejs",
              "AWS ECS",
              "Reactjs",
              "Redis",
              "EventDriven",
              "Redis",
              "Websocket",
            ]}
            liveLink={"https://vercel-clone-lake.vercel.app/"}
          />
          <ProjectCard
            opensource={false}
            projectName={"Multi-User Video Calling"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={"/videocalling.jpg"}
            techStacks={["WebRTC", "Nodejs", "Reactjs", "Websocket"]}
            liveLink={"https://github.com/swarnikaraj/videocall"}
          />
          <ProjectCard
            opensource={false}
            projectName={"NFT Minting Dapp"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={"/nftapp.jpg"}
            techStacks={[
              "Reactjs",
              "Solidity",
              "Ethers.js",
              "Metamask",
              "ERC-721A",
            ]}
            liveLink={"https://bb-mint-new.vercel.app/"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

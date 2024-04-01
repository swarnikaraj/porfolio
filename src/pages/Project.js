import React from "react";
import ProjectCard from "./ProjectCard";
const ProjectSection = () => {
  return (
    <section className=" py-10">
      <div className=" pb-10">
        <h2 className="text-3xl font-bold pb-2 text-left text-[#FC6736]">
          __Projects
        </h2>
        <p className="text-xl text-[#FFD0EC]">Check out my cool projects</p>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            projectName={"Video Transcoder"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={
              "https://tse1.mm.bing.net/th?id=OIP.vzym19RQDmYfN5wrWUDrUgHaEK&pid=Api&P=0&h=180"
            }
            techStacks={["Reactjs", "WebRTC", "Nodejs", "Docker"]}
            liveLink={"https://github.com/swarnikaraj/videocall"}
          />
          <ProjectCard
            projectName={"Vercel Clone"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={
              "https://logowik.com/content/uploads/images/vercel1868.jpg"
            }
            techStacks={["Reactjs", "Nodejs", "Golang"]}
            liveLink={"https://github.com/swarnikaraj/videocall"}
          />
          <ProjectCard
            projectName={"GMeet Clone"}
            githubLink={"https://github.com/swarnikaraj/videocall"}
            imageSrc={
              "https://tse1.mm.bing.net/th?id=OIP.vzym19RQDmYfN5wrWUDrUgHaEK&pid=Api&P=0&h=180"
            }
            techStacks={["Reactjs", "WebRTC", "Nodejs"]}
            liveLink={"https://github.com/swarnikaraj/videocall"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

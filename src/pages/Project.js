import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { projects } from "@/utils/contanst";
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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              opensource={project.opensource}
              projectName={project.projectName}
              githubLink={project.githubLink}
              imageSrc={project.imageSrc}
              techStacks={project.techStacks}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <button
          disabled={true}
          className="disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold py-2 text-right text-[#FC6736] cursor-pointer"
        >
          _More
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;

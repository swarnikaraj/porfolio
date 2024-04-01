import Image from "next/image";
const ProjectCard = ({
  projectName,
  imageSrc,
  liveLink,
  githubLink,
  techStacks,
}) => {
  return (
    <div className=" rounded overflow-hidden shadow shadow-gray-300">
      <Image
        width={300}
        height={100}
        src={imageSrc}
        alt={projectName}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl ">{projectName}</div>
        <div className="flex flex-wrap">
          {techStacks.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-2">
        <a
          href={liveLink}
          className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex overflow-y-auto lg:w-1/3 w-full mid:w-1/3 flex-col items-center px-2 border-teal-600 border-l border-t border-b max-h-[calc(2*300px)]">
      <p className="py-2 text-2xl uppercase">Projects</p>
      <div className="flex flex-col gap-4">
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
          imageSrc={"https://logowik.com/content/uploads/images/vercel1868.jpg"}
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
  );
};

export default Projects;

import Image from "next/image";
const ProjectCard = ({
  projectName,
  imageSrc,
  liveLink,
  githubLink,
  techStacks,
  opensource,
  monetized,
}) => {
  //bg-[#293050]
  return (
    <div className="relative rounded overflow-hidden hover:shadow-sm shadow-lg bg-[#181818]">
      {opensource && (
        <div className="absolute top-0 right-0 bg-green-500 text-white font-bold py-1 px-2 rounded-br">
          Open Source
        </div>
      )}

      {monetized && (
        <div className="absolute top-0 right-0 bg-green-500 text-white font-bold py-1 px-2 rounded-br">
          Commercialized
        </div>
      )}

      <Image
        width={300}
        height={100}
        src={imageSrc}
        alt={projectName}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-[#fff] hover:text-gray-500 ">
          {projectName}
        </div>
        <div className="flex flex-wrap">
          {techStacks?.map((tech, index) => (
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
        <button
          disabled={opensource}
          onClick={() => window.open(liveLink, "_blank")}
          href={liveLink}
          className="inline-block hover:bg-[#FC6736] disabled:bg-slate-400 bg-teal-700  text-white font-bold py-2 px-4 rounded mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </button>
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

export default ProjectCard;

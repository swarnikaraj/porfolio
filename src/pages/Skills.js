const Skills = () => {
  const skillsset = [
    "Nodejs",
    "Golang",
    "Reactjs",
    "Nextjs",
    "Tailwind/CSS",
    "Microservices",
    "Microfrontends",
    "AWS/AZure",
    "Docker",
    "WebRTC",
    "Websocket",
    "Nginx",
    "Mongodb",
    "MySQL",
    "Redis",
  ];
  return (
    <div className="flex h-full overflow-y-auto lg:w-1/3 w-full mid:w-1/3 flex-col items-center px-2 border-blue-800  border-l border-t border-b ">
      <p className="py-2 text-2xl uppercase">Techstacks & Skillset</p>
      <div className="flex flex-wrap gap-2">
        {skillsset.map((d, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

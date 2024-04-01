const ExperienceCard = ({ companyName, projects, duration, position }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{companyName}</div>
        <div className="text-gray-700 text-base mb-2">{position}</div>
        <div className="text-gray-700 text-base mb-2">{duration}</div>
        <div className="text-gray-700 text-base mb-4">
          <strong>Projects:</strong>
          <ul className="list-disc ml-6">
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}:</strong>{" "}
                {project.contributions.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const Work = () => {
  return (
    <div className="flex h-full overflow-y-auto lg:w-1/3 w-full mid:w-1/3 flex-col items-center px-2 border-blue-800  border-l border-t border-b ">
      <p className=" uppercase text-2xl">Work Experience</p>
    </div>
  );
};
export default Work;

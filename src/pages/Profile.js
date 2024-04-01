import Image from "next/image";
const Profile = () => {
  return (
    <div className="flex h-full overflow-y-auto lg:w-1/3 w-full mid:w-1/3 flex-col items-center px-2 border-teal-600 border-l border-t border-b">
      <p className="py-2 text-2xl uppercase font-bold text-teal-600">Profile</p>
      <div className="relative">
        <Image
          src="https://media.licdn.com/dms/image/D5603AQHm5qVEZ2seeA/profile-displayphoto-shrink_800_800/0/1711647686431?e=1717632000&v=beta&t=BdU-0WhUXWPPM1LV4F33B-5ZhAEnoId9vSXNs43UFSY"
          alt="Profile Picture"
          className="rounded-full shadow-lg border-4 border-teal hover:shadow-md"
          width={250}
          height={250}
        />
      </div>
      <div className="text-teal-600 font-bold text-lg">Hello!</div>
      <p className="font-mono py-1 text-xl">
        <span>I&apos;m</span>{" "}
        <span className="text-teal-600 font-bold">Swarnnika</span>{" "}
        <span className="text-teal-600 font-bold">Raj</span>{" "}
        <span className="text-teal-600 font-bold">Singh</span>
      </p>
      <p className="font-mono py-2 text-lg text-teal-600">
        Fullstack Developer
      </p>
      <div className="font-mono max-w-md py-2 text-lg text-center text-gray-400">
        Passionate full-stack developer skilled in end-to-end project
        development and deployment. Known for agility with new technologies and
        innovative problem-solving.
      </div>
    </div>
  );
};

export default Profile;

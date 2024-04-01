import Image from "next/image";
const Profile = () => {
  return (
    <div className="flex h-full overflow-y-auto lg:w-1/3 w-full mid:w-1/3 flex-col items-center px-2 border-blue-800  border-l border-t border-b ">
      <p className="py-2 text-2xl uppercase">Profile</p>
      <div className="relative">
        <Image
          src="https://media.licdn.com/dms/image/D5603AQHm5qVEZ2seeA/profile-displayphoto-shrink_800_800/0/1711647686431?e=1717632000&v=beta&t=BdU-0WhUXWPPM1LV4F33B-5ZhAEnoId9vSXNs43UFSY"
          width={250}
          height={250}
          alt="Picture of the author"
          className="rounded-full shadow shadow-gray-300 border-4 border-blue-800 hover:shadow-sm"
        />
      </div>
      <div className="text-blue-800 font-bold ">--Hello</div>
      <p className=" font-mono py-1 text-xl">
        <span>I&apos;m</span>{" "}
        <span className="text-blue-800 font-bold ">S</span>warnnika{" "}
        <span className="text-blue-800 font-bold">R</span>aj{" "}
        <span className="text-blue-800 font-bold">S</span>ingh
      </p>
      <p className=" font-mono py-2">Fullstack Developer</p>
      <div className="font-mono max-w-60 py-2">
        Passionate full-stack developer skilled in end-to-end project
        development and deployment. Known for agility with new technologies and
        innovative problem-solving.
      </div>
    </div>
  );
};

export default Profile;

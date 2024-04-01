import React from "react";

const Card = ({ title, description, link }) => {
  return (
    <div className=" p-4 border border-solid border-[#FC6736] border-t-0 border-l-0 rounded-lg">
      <h3 className="text-xl font-semibold mb-1 text-gray-500">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <a href={link} className="text-teal-600 hover:underline">
        Visit
      </a>
    </div>
  );
};

const Fun = () => {
  const cards = [
    {
      title: "Follow me on GitHub",
      description: "Check out my latest projects and contributions.",
      link: "https://github.com/swarnikaraj",
    },
    {
      title: "Checkout my Math Arts",
      description: "Explore my creative mathematical art creations.",
      link: "https://opensea.io/collection/magic-of-costheta",
    },
    {
      title: "Connect on LinkedIn",
      description: "Let's connect and explore professional opportunities.",
      link: "nkedin.com/in/swarnnika-raj-singh-a6731914b/",
    },
    {
      title: "Check out my NFTs",
      description: "Discover my unique and creative NFT collections.",
      link: "https://opensea.io/0xCffbF030F0d41009EfD6800AA56FB9C8d9F5EEf2",
    },
    {
      title: "Checkout my Memes",
      description: "Have a laugh with my collection of memes.",
      link: "/memes",
    },
    {
      title: "Follow me on Twitter",
      description: "Stay updated with my latest thoughts and updates.",
      link: "https://twitter.com/_flammingo",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Fun;

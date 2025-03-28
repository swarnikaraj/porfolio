// components/CreativeWork.js
"use client";
import { motion } from "framer-motion";
import {
  FaEthereum,
  FaPaw,
  FaYoutube,
  FaPencilAlt,
  FaSeedling,
  FaLeaf,
  FaHandHoldingHeart,
} from "react-icons/fa";
import Image from "next/image";

const CreativeWork = () => {
  const nftCollections = [
    {
      title: "Magic of CosTheta",
      description:
        "Mathematical art creations exploring the beauty of trigonometry and geometric patterns.",
      link: "https://opensea.io/collection/magic-of-costheta",
      image: "/math-art.png",
    },
    {
      title: "NFT Collection",
      description: "Unique digital art pieces on Ethereum Mainnet.",
      link: "https://opensea.io/0xCffbF030F0d41009EfD6800AA56FB9C8d9F5EEf2",
      image: "/nft.png",
    },
  ];

  return (
    <section id="creative" className="py-20 px-4 bg-[#0a0a0a] relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Beyond Engineering
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring creativity and impact through digital art, sustainability
            initiatives, and compassionate living.
          </p>
        </motion.div>

        {/* NFT Collections */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaEthereum className="text-purple-500" />
            <span className="text-purple-500">NFT Collections</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nftCollections.map((collection, index) => (
              <motion.a
                key={index}
                href={collection.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <Image
                    src={collection.image}
                    className="w-auto he-auto"
                    width={600}
                    height={400}
                    alt="colection"
                  />
                  <div className="w-full h-full bg-gray-800 animate-pulse" />
                </div>
                <div className="p-6 relative z-20">
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {collection.title}
                  </h4>
                  <p className="text-gray-400">{collection.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaSeedling className="text-green-500" />
            <span className="text-green-500">Sustainability Initiatives</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plant & Soil Work */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-green-800 transition-all duration-300">
              <div className="flex items-start gap-4">
                <FaLeaf className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Plant & Soil Advocacy
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Working on soil health initiatives and promoting sustainable
                    gardening practices to combat climate change and improve
                    food security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Soil Health",
                      "Sustainable Gardening",
                      "Native Plants",
                      "Composting",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vegan Advocacy */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-green-800 transition-all duration-300">
              <div className="flex items-start gap-4">
                <FaLeaf className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Vegan Lifestyle Mentorship
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Providing guidance and resources for those interested in
                    transitioning to a plant-based lifestyle for environmental
                    sustainability, health, and ethical reasons.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <span>Reach out for guidance</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animal Rescue Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaPaw className="text-pink-500" />
            <span className="text-pink-500">Furry Mitra</span>
          </h3>
          <div className="bg-gray-900/50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Animal Welfare Initiative
                </h4>
                <p className="text-gray-400 mb-4">
                  Working with a team to rescue and care for animals in need.
                  Documenting our journey and raising awareness through our
                  YouTube channel.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/@FurryMitra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <FaYoutube size={24} />
                    <span>Watch our rescue stories</span>
                  </a>

                  <div className="pt-4 border-t border-gray-800">
                    <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <FaHandHoldingHeart className="text-pink-500" />
                      Support Our Work
                    </h5>
                    <p className="text-gray-400 mb-3">
                      We&apos;re working toward establishing an animal shelter.
                      Your support can help make this dream a reality.
                    </p>
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg border border-pink-500/30 hover:bg-pink-500/30 transition-colors"
                    >
                      Inquire about donations
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 min-h-[300px]">
                <Image
                  src="/furrymitra.png"
                  width={700}
                  height={400}
                  className="w-auto h-auto"
                  alt="furrymitra"
                />
                <div className="w-full h-full animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Creative Writing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaPencilAlt className="text-blue-500" />
            <span className="text-blue-500">Creative Expression</span>
          </h3>
          <a
            href="https://www.instagram.com/swarnika.eth/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-white">
                  Poetry, Memes & Portait Arts
                </h4>
                <p className="text-gray-400">
                  Sharing thoughts, verses, and tech humor through creative
                  content on Instagram.
                </p>
              </div>
              <div className="flex gap-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-gray-800 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeWork;

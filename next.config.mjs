/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
      },
      {
        hostname: "tse1.mm.bing.net",
      },
      {
        hostname: "logowik.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.catbox.moe", // Updated hostname
      },
    ],
  },
};

export default nextConfig;

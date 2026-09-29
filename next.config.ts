import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sign-in",
        destination: "/signin",
        permanent: true,
      },
      {
        source: "/join-us",
        destination: "/signup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

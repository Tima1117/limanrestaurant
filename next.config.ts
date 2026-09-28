import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "limanrestaurant.ge" },
    ],
  },
};

export default nextConfig;

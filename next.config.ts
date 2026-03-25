import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.example.com/account123/**", "placehold.co/600x400/any"],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.alburyhotwater.com" }],
      destination: "https://alburyhotwater.com/:path*",
      permanent: true,
    }];
  },
};

export default nextConfig;

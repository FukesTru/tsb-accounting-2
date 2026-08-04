import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Construction accounting was promoted to a top-level page/nav tab
        source: "/services/accounting-advisory/construction-accounting",
        destination: "/construction-accounting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

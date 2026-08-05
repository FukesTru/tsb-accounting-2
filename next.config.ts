import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Static images in /public are content-hashed by filename only when
        // replaced, so cache them hard and bust by renaming if ever needed.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
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

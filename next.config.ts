import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // better perf
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dilshad.online",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

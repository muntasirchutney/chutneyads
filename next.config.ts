import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import "./src/libs/Env";

const baseConfig: NextConfig = {
  devIndicators: { position: "bottom-right" },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  outputFileTracingIncludes: {
    "/": ["./migrations/**/*"],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

let config: NextConfig = baseConfig;

if (process.env.ANALYZE === "true") {
  config = withBundleAnalyzer()(config);
}

export default config;

import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";
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

let config: NextConfig = createNextIntlPlugin("./src/libs/I18n.ts")(baseConfig);

if (process.env.ANALYZE === "true") {
  config = withBundleAnalyzer()(config);
}

// ✅ Cloudflare Pages: treat CF_PAGES as a boolean flag (exists = true)
const isCloudflarePages = !!process.env.CF_PAGES;

// accept "1"/"true"/"TRUE"
const envTrue = (v?: string) => v === "1" || v === "true" || v === "TRUE";

// ✅ Allow manual override via env var too
const sentryDisabled = isCloudflarePages || envTrue(process.env.NEXT_PUBLIC_SENTRY_DISABLED);

if (!sentryDisabled) {
  config = withSentryConfig(
    config,
    {
      org: process.env.SENTRY_ORGANIZATION,
      project: process.env.SENTRY_PROJECT,
      silent: !envTrue(process.env.CI),
      // authToken: process.env.SENTRY_AUTH_TOKEN, // optional
    },
    {
      widenClientFileUpload: true,
      reactComponentAnnotation: { enabled: true },
      tunnelRoute: "/monitoring",
      disableLogger: true,
      telemetry: false,
    }
  );
}

export default config;

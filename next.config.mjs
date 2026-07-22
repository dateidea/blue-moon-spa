import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = isPagesBuild ? "/gold-spa-sd" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  output: isPagesBuild ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: isPagesBuild,
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async redirects() {
    if (isPagesBuild) return [];
    return [
      { source: "/", destination: "/gold-spa/", permanent: false },
    ];
  },
  async rewrites() {
    if (isPagesBuild) return [];
    return [
      { source: "/gold-spa", destination: "/gold-spa/index.html" },
      { source: "/gold-spa/", destination: "/gold-spa/index.html" },
    ];
  },
};

export default nextConfig;

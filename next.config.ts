import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.6949393020.com", "images.6440949940.com"],
  },
};

if (process.env.NODE_ENV === "development") {
  (async () => {
    await setupDevPlatform(); // ✅ now valid inside async function
  })();
}

export default nextConfig;

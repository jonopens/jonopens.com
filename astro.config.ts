import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://jonopens.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("/demos/") &&
        !page.includes("/tests/"),
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "Contents",
          maxDepth: 3,
          tight: true,
        },
      ],
    ],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});

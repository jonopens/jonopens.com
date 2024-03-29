import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: page =>
        page !== 'https://jonopens.com/search/' &&
        page !== 'https://jonopens.com/search' &&
        page !== 'https://jonopens.com/disco-floor/' &&
        page !== 'https://jonopens.com/tags/' &&
        page !== 'https://jonopens.com/tags' &&
        page !== 'https://jonopens.com/posts/1' &&
        !page.includes('/tags'),
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: 'Contents',
          maxDepth: 2,
          tight: true,
        },
      ],
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  scopedStyleStrategy: 'where',
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://zakelijk.proman.be',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  output: "hybrid",
  adapter: cloudflare()
});
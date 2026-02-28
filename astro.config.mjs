// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const SITE = process.env.SITE ?? 'https://example.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  integrations: [mdx(), sitemap()],
});

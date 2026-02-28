import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const people = defineCollection({
  loader: glob({ base: './src/content/people', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    interests: z.array(z.string()).default([]),
    order: z.number().default(100),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    links: z.object({
      paper: z.string().url().optional(),
      code: z.string().url().optional(),
      project: z.string().url().optional(),
    }).optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'completed', 'planned']),
    lead: z.string(),
    links: z.object({
      website: z.string().url().optional(),
      repo: z.string().url().optional(),
    }).optional(),
    order: z.number().default(100),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['award', 'publication', 'event', 'general']).default('general'),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { people, publications, projects, news };

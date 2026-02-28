import { defineCollection, z } from 'astro:content';

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    interests: z.string().optional(),
    order: z.number().default(100),
    bio: z.string().optional(),
    education: z
      .array(
        z.object({
          degree: z.string(),
          school: z.string(),
          year: z.union([z.string(), z.number()]),
        }),
      )
      .default([]),
    recruitment: z.string().optional(),
    office: z.string().optional(),
  }),
});

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        project: z.string().url().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'completed', 'planned']),
    lead: z.string(),
    links: z
      .object({
        website: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .optional(),
    order: z.number().default(100),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['award', 'publication', 'event', 'general']).default('general'),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { people, publications, projects, news };

import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    region: z.string(),
    services: z.array(z.string()),
    brand: z.string(),
    challenge: z.string(),
    solution: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
    description: z.string(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default('PROMAN Redactie'),
    category: z.enum(['Trends', 'Wetgeving', 'Praktijk', 'Sectoren', 'Onderzoek']),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().default(5),
    featured: z.boolean().default(false),
  }),
});

export const collections = { cases, articles };

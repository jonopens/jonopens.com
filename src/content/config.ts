import { SITE } from "@/config";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional(),
      title: z.string(),
      slug: z.string().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["general"]),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const development = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional(),
      author: z.string().default(SITE.author),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      tags: z.array(z.string()).default(["code"]),
      projectUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

const writing = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional(),
      author: z.string().default(SITE.author),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      type: z.enum(["poetry", "essay", "fiction"]).default("essay"),
      tags: z.array(z.string()).default(["writing"]),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

export const collections = { posts, development, writing };

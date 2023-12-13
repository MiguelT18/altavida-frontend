import { defineCollection, z } from "astro:content";

export const blogCollection = {
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			views: z.number(),
			image: z.object({
				src: z.string(),
				alt: z.string(),
			}),
		})
	})
};

export const collections = {
	blog: blogCollection
}
import rss from "@astrojs/rss";
import { SITE } from "@/config";
import { getPosts, getDevelopmentProjects, getWriting } from "@/utils/collections";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const projects = await getDevelopmentProjects();
  const writing = await getWriting();

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
      link: `/posts/${post.slug}`,
      categories: post.data.tags,
    })),
    ...projects.map((project) => ({
      title: `[Dev] ${project.data.title}`,
      description: project.data.description,
      pubDate: project.data.pubDatetime,
      link: `/development/${project.slug}`,
      categories: project.data.tags,
    })),
    ...writing.map((piece) => ({
      title: `[${piece.data.type}] ${piece.data.title}`,
      description: piece.data.description,
      pubDate: piece.data.pubDatetime,
      link: `/writing/${piece.slug}`,
      categories: piece.data.tags,
    })),
  ];

  // Sort by date, newest first
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site?.toString() || SITE.website,
    items,
    customData: `<language>en-us</language>`,
  });
}

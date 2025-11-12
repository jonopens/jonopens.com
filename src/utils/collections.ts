import { getCollection, type CollectionEntry } from "astro:content";

// Get all posts, optionally filtering out drafts
export async function getPosts(includeDrafts = false) {
  const posts = await getCollection("posts", ({ data }) => {
    return includeDrafts || !data.draft;
  });
  return posts.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
}

// Get all development projects, optionally filtering out drafts
export async function getDevelopmentProjects(includeDrafts = false) {
  const projects = await getCollection("development", ({ data }) => {
    return includeDrafts || !data.draft;
  });
  return projects.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
}

// Get all writing pieces, optionally filtering out drafts
export async function getWriting(includeDrafts = false) {
  const writing = await getCollection("writing", ({ data }) => {
    return includeDrafts || !data.draft;
  });
  return writing.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
}

// Get unique tags from a collection
export function getUniqueTags(
  collection: CollectionEntry<"posts" | "development" | "writing">[]
) {
  const tags = new Set<string>();
  collection.forEach((item) => {
    item.data.tags?.forEach((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).sort();
}

// Filter items by tag
export function filterByTag<T extends CollectionEntry<"posts" | "development" | "writing">>(
  items: T[],
  tag: string
): T[] {
  return items.filter((item) =>
    item.data.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}


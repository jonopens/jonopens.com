export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  siteTitle: string;
  lightAndDarkMode: boolean;
  postsPerPage: number;
  ogImage?: string;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Mastodon"
  | "Discord"
  | "Reddit";

export type CollectionEntry = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: any;
};

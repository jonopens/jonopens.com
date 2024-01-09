import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.jonopens.com", // replace this with your deployed domain
  author: "Jon Openshaw",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Jon Openshaw",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const sitemapBlacklist = ["/tags/", "/search/"];

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jonopens",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jopenshaw",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jonopensdev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "CodePen",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "URL_TO_ADD_AS_NEEDED",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

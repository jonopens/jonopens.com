import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jonopens.com",
  author: "Jon Openshaw",
  desc: "Personal site of Jon Openshaw. Fullstack Software Engineer & Experienced SEO Leader. Ruminations, roundups and the like on code, SEO, and being alive.",
  title: "Jon Openshaw | Fullstack Software Engineer & Experienced SEO Leader",
  siteTitle: "Jon Openshaw",
  lightAndDarkMode: true,
  postsPerPage: 10,
};

export const LOCALE = ["en-EN"];

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 46,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jonopens",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jopenshaw",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jonopensdev@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];

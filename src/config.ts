import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://jonopens.com',
  author: 'Jon Openshaw',
  desc: 'Personal site of Jon Opensive. I mean Openshaw. Pensiveshaw. Ruminations, roundups and the like on code and SEO and being alive.',
  title: 'Jon Openshaw | Fullstack Software Engineer & Experienced SEO Leader',
  siteTitle: 'Jon Openshaw',
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const sitemapBlacklist = ['/tags/', '/search/'];

export const LOCALE = ['en-EN']; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 46,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/jonopens',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jopenshaw',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:jonopensdev@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];

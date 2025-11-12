import { slug as githubSlug } from "github-slugger";

export const slugifyStr = (str: string) => githubSlug(str);

export const slugifyAll = (arr: string[]) => arr.map((str) => slugifyStr(str));

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export const RESEARCH_CATEGORIES = [
  "모듈러 건축",
  "비구조요소 내진",
  "시장 및 정책",
  "제품개발",
] as const;

export type ResearchCategory = (typeof RESEARCH_CATEGORIES)[number];

export type ResearchFrontmatter = {
  title: string;
  date: string;
  category: ResearchCategory;
  thumbnail?: string;
  tags?: string[];
  period?: string;
  featured?: boolean;
};

export type ResearchSummary = ResearchFrontmatter & {
  slug: string;
};

export type ResearchPost = ResearchSummary & {
  contentHtml: string;
};

const RESEARCH_DIR = path.join(process.cwd(), "content", "research");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const PLACEHOLDER_THUMBNAIL = "/images/research/placeholder.svg";

function resolveThumbnail(raw?: string): string {
  if (!raw) return PLACEHOLDER_THUMBNAIL;
  if (!raw.startsWith("/")) return PLACEHOLDER_THUMBNAIL;
  const absolute = path.join(PUBLIC_DIR, raw);
  return fs.existsSync(absolute) ? raw : PLACEHOLDER_THUMBNAIL;
}

function normalizeCategory(raw: unknown): ResearchCategory {
  if (
    typeof raw === "string" &&
    (RESEARCH_CATEGORIES as readonly string[]).includes(raw)
  ) {
    return raw as ResearchCategory;
  }
  return "모듈러 건축";
}

function readResearchFile(filename: string): ResearchSummary | null {
  if (!filename.endsWith(".md")) return null;
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(RESEARCH_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  const fm = data as Partial<ResearchFrontmatter>;
  return {
    slug,
    title: fm.title ?? slug,
    date: fm.date ?? "",
    category: normalizeCategory(fm.category),
    thumbnail: resolveThumbnail(fm.thumbnail),
    tags: fm.tags ?? [],
    period: fm.period,
    featured: fm.featured === true,
  };
}

export function getAllResearch(): ResearchSummary[] {
  if (!fs.existsSync(RESEARCH_DIR)) {
    console.warn(`[research] content directory missing: ${RESEARCH_DIR}`);
    return [];
  }
  const entries = fs
    .readdirSync(RESEARCH_DIR)
    .map(readResearchFile)
    .filter((x): x is ResearchSummary => x !== null);
  entries.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.date < b.date ? 1 : -1;
  });
  return entries;
}

export function getLatestResearch(limit = 6): ResearchSummary[] {
  return getAllResearch().slice(0, limit);
}

export function getResearchByCategory(): Record<
  ResearchCategory,
  ResearchSummary[]
> {
  const grouped = Object.fromEntries(
    RESEARCH_CATEGORIES.map((c) => [c, [] as ResearchSummary[]]),
  ) as Record<ResearchCategory, ResearchSummary[]>;
  for (const post of getAllResearch()) {
    grouped[post.category].push(post);
  }
  return grouped;
}

export async function getResearchBySlug(
  slug: string,
): Promise<ResearchPost | null> {
  const fullPath = path.join(RESEARCH_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as ResearchFrontmatter;
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: fm.title ?? slug,
    date: fm.date ?? "",
    category: normalizeCategory(fm.category),
    thumbnail: resolveThumbnail(fm.thumbnail),
    tags: fm.tags ?? [],
    period: fm.period,
    featured: fm.featured === true,
    contentHtml: processed.toString(),
  };
}

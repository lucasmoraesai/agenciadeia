import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFaq = { q: string; a: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  faq?: PostFaq[];
};

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = data as Omit<PostMeta, "slug">;
  return {
    slug,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    date: meta.date ?? "",
    cover: meta.cover ?? "",
    coverAlt: meta.coverAlt ?? meta.title ?? "",
    tags: meta.tags ?? [],
    faq: meta.faq ?? [],
    content,
  };
}

export function getAllPosts(): Post[] {
  return readSlugs()
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  return readPost(slug);
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

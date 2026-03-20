import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NewsPost {
  title: string;
  date: string;
  category: string;
  slug: string;
  excerpt?: string;
  body?: string;
}

const contentDir = path.join(process.cwd(), "content/news");

export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filepath = path.join(contentDir, filename);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);
    const excerpt =
      content
        .replace(/[#*`>\-\[\]()]/g, "")
        .split("\n")
        .filter(Boolean)[0]
        ?.slice(0, 120) ?? "";

    return {
      title: data.title ?? slug,
      date: data.date ?? "",
      category: data.category ?? "お知らせ",
      slug,
      excerpt,
      body: content,
    } as NewsPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const filepath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "お知らせ",
    slug,
    body: content,
  };
}

import type { Metadata } from "next";
import Link from "next/link";
import { getNewsBySlug, getAllNews } from "@/lib/getNews";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const news = getAllNews();
  return news.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.body?.slice(0, 120).replace(/[#*`>\-\[\]()]/g, "") ?? "",
  };
}

const categoryColors: Record<string, string> = {
  "試合結果": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "お知らせ": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "イベント": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "ブログ": "bg-[#EDE7D9] text-[#6B7A99] border-[#DDD8CF]",
};

// Markdownのシンプルなレンダリング（実際のプロジェクトではreact-markdownを推奨）
function renderMarkdown(text: string): string {
  return text
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-black text-[#002B5C] mt-8 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#002B5C] mt-6 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#002B5C] mt-5 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1B2A4A] font-bold">$1</strong>')
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line.split(" | ").map((c) => c.trim().replace(/^\|/, "").replace(/\|$/, ""));
      return `<div class="flex gap-4 border-b border-[#D4C9B8] py-2">${cells.map((c) => `<span class="text-[#1B2A4A] text-sm flex-1">${c}</span>`).join("")}</div>`;
    })
    .replace(/^- (.+)$/gm, '<li class="text-[#1B2A4A] text-sm leading-relaxed ml-4">· $1</li>')
    .replace(/\n\n/g, '</p><p class="text-[#1B2A4A] leading-relaxed mt-4">')
    .replace(/^(?!<)(.+)$/gm, '$1');
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  const colorClass = categoryColors[post.category] ?? categoryColors["ブログ"];

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* パンくずリスト */}
        <nav className="flex items-center gap-2 text-[#A0AAB8] text-xs mb-8"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          <Link href="/" className="hover:text-[#C41E3A] transition-colors">HOME</Link>
          <span>›</span>
          <Link href="/news" className="hover:text-[#C41E3A] transition-colors">NEWS</Link>
          <span>›</span>
          <span className="text-[#6B7A99]">{post.title.slice(0, 30)}...</span>
        </nav>

        {/* ヘッダー */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-block px-2.5 py-0.5 text-xs border rounded-full ${colorClass}`}>
              {post.category}
            </span>
            <time className="text-[#A0AAB8] text-xs" dateTime={post.date}
              style={{ fontFamily: "var(--font-cormorant)" }}>
              {post.date}
            </time>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-black text-[#002B5C] leading-tight"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            {post.title}
          </h1>
        </div>

        {/* 区切り線 */}
        <div className="flex gap-2 mb-10">
          <div className="h-[4px] flex-1" style={{ background: 'linear-gradient(to right, #C41E3A 0%, #C41E3A 30%, rgba(196,30,58,0.15) 70%, transparent 100%)' }} />
        </div>

        {/* 本文 */}
        <article
          className="prose max-w-none"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          <div
            className="text-[#1B2A4A] leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: `<p class="text-[#1B2A4A] leading-relaxed">${renderMarkdown(post.body ?? "")}</p>`,
            }}
          />
        </article>

        {/* 区切り線 */}
        <div className="flex gap-2 my-12">
          <div className="h-[3px] flex-1" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.4), rgba(196,30,58,0.1), transparent)' }} />
        </div>

        {/* ナビゲーション */}
        <div className="flex justify-between">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#C41E3A] text-sm hover:gap-4 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>ニュース一覧へ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

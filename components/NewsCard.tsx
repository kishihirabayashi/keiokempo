import Link from "next/link";
import type { NewsPost } from "@/lib/getNews";

const categoryColors: Record<string, string> = {
  "試合結果": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/25",
  "お知らせ": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "イベント": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "ブログ":   "bg-[#E8DFD0] text-[#6B7A99] border-[#DDD8CF]",
};

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

export default function NewsCard({ post, featured }: NewsCardProps) {
  const colorClass = categoryColors[post.category] ?? categoryColors["ブログ"];

  return (
    <Link
      href={`/news/${post.slug}`}
      className="group relative flex flex-col overflow-hidden bg-white rounded-xl card-lift"
      style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.07), 0 0 0 1px rgba(27,42,74,0.05)' }}
    >
      {/* ── 画像エリア ── */}
      <div className="relative w-full h-44 overflow-hidden bg-[#E8DFD0] rounded-t-xl">
        {/* 明るいプレースホルダー */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #D8E4EE 0%, #C8D8E8 50%, #D0DDE8 100%)",
          }}
        />
        {/* カテゴリー初文字 */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span
            className="font-black text-[#002B5C]/[0.08] transition-all duration-500 group-hover:text-[#002B5C]/[0.12] group-hover:scale-105"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              fontSize: "6rem",
              lineHeight: 1,
            }}
          >
            {post.category[0]}
          </span>
        </div>
        {/* オーバーレイ */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#002B5C]/0 group-hover:bg-[#002B5C]/40 transition-colors duration-400 rounded-t-xl">
          <span
            className="text-white/0 group-hover:text-white/90 text-xs tracking-[0.35em] uppercase transition-all duration-300 translate-y-3 group-hover:translate-y-0"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Read More
          </span>
        </div>
        {/* バッジ */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-xs px-2.5 py-0.5 border rounded-full ${colorClass}`}
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            {post.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <time
            className="text-[#6B7A99] text-xs bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full"
            dateTime={post.date}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {post.date}
          </time>
        </div>
      </div>

      {/* ── テキストエリア ── */}
      <div className="flex-1 p-5 bg-white rounded-b-xl">
        <h3
          className={`text-[#002B5C] font-bold leading-snug group-hover:text-[#C41E3A] transition-colors duration-250 ${
            featured ? "text-xl" : "text-base"
          }`}
          style={{ fontFamily: "var(--font-noto-serif-jp)", fontWeight: 700 }}
        >
          {post.title}
        </h3>
        {post.excerpt && (
          <p
            className="text-[#6B7A99] text-sm mt-2 line-clamp-2 leading-relaxed"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

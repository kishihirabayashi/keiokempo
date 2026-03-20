import Link from "next/link";
import type { NewsPost } from "@/lib/getNews";

const categoryColors: Record<string, string> = {
  "試合結果": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/25",
  "お知らせ": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "イベント": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "ブログ":   "bg-[#DDD4C2] text-[#6B7A99] border-[#C9BEAC]",
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
      className="group relative flex flex-col overflow-hidden bg-[#FAF7F0] rounded-xl card-lift"
      style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.06), 0 0 0 1px rgba(27,42,74,0.04)" }}
    >
      {/* ── 画像エリア ── */}
      <div className="relative w-full h-44 overflow-hidden rounded-t-xl photo-placeholder">
        {/* クリームのプレースホルダー（ズーム対応） */}
        <div
          className="absolute inset-0 photo-placeholder transition-transform duration-700 ease-out group-hover:scale-107"
        />
        {/* カメラアイコン */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 select-none pointer-events-none">
          <svg className="w-10 h-10 text-[#B0A090] group-hover:text-[#9A8878] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[#B0A090] text-[0.6rem] tracking-[0.5em] uppercase" style={{ fontFamily: "var(--font-cormorant)" }}>PHOTO</span>
        </div>
        {/* hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#002B5C]/0 group-hover:bg-[#002B5C]/35 transition-colors duration-400 rounded-t-xl">
          <span
            className="text-white/0 group-hover:text-white/90 text-xs tracking-[0.4em] uppercase transition-all duration-300 translate-y-3 group-hover:translate-y-0"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Read More
          </span>
        </div>
        {/* バッジ */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-xs px-2.5 py-0.5 border rounded-full ${colorClass}`} style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            {post.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <time
            className="text-[#6B7A99] text-xs bg-[#FAF7F0]/80 backdrop-blur-sm px-2 py-0.5 rounded-full"
            dateTime={post.date}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {post.date}
          </time>
        </div>
      </div>

      {/* ── テキストエリア ── */}
      <div className="flex-1 p-5 bg-[#FAF7F0] rounded-b-xl">
        <h3
          className={`text-[#002B5C] font-bold leading-snug group-hover:text-[#C41E3A] transition-colors duration-250 ${
            featured ? "text-xl" : "text-base"
          }`}
          style={{ fontFamily: "var(--font-noto-serif-jp)", fontWeight: 700, letterSpacing: "0.03em" }}
        >
          {post.title}
        </h3>
        {post.excerpt && (
          <p
            className="text-[#6B7A99] text-sm mt-2 line-clamp-2"
            style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.85 }}
          >
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

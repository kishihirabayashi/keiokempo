"use client";

import { useState } from "react";
import Link from "next/link";

// ニュースデータ（実際はMarkdownファイルから取得）
const allNews = [
  {
    title: "第72回全日本学生拳法選手権大会 ベスト8進出",
    date: "2024-11-15",
    category: "試合結果",
    slug: "2024-zennihon-result",
    excerpt: "11月15日〜16日、大阪市立武道センターにて開催された第72回全日本学生拳法選手権大会に出場し、団体戦でベスト8に進出しました。",
  },
  {
    title: "副将・佐藤翔のブログ「日本拳法と慶應での4年間」",
    date: "2024-12-01",
    category: "ブログ",
    slug: "blog-sato",
    excerpt: "こんにちは、法学部4年・副将の佐藤翔です。引退が近づいてきた今、4年間を振り返ってみたいと思います。",
  },
  {
    title: "関東学生拳法選手権大会 準優勝報告",
    date: "2024-06-20",
    category: "試合結果",
    slug: "kanto-junyu",
    excerpt: "6月20日に開催された関東学生拳法選手権大会にて、本部団体チームが準優勝を果たしました。",
  },
  {
    title: "2025年度新歓体験入部のお知らせ",
    date: "2025-03-01",
    category: "お知らせ",
    slug: "2025-shinkansen",
    excerpt: "慶應義塾體育會拳法部では、2025年度の新入部員を募集しています。4月から体験入部を実施します。",
  },
];

const categories = ["全て", "試合結果", "お知らせ", "イベント", "ブログ"];

const categoryColors: Record<string, string> = {
  "試合結果": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "お知らせ": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "イベント": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "ブログ": "bg-[#EDE7D9] text-[#6B7A99] border-[#DDD8CF]",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("全て");

  const filtered =
    activeCategory === "全て"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* ヘッダービジュアル */}
      <div className="relative bg-[#EDE7D9] pt-36 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-title-en mb-4">News & Blog</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            ニュース・ブログ
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-[#C41E3A] border-[#C41E3A] text-white font-bold"
                  : "bg-[#FAF7F0] border-[#D4C9B8] text-[#6B7A99] hover:border-[#C41E3A]/40 hover:text-[#2D3748]"
              }`}
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ニュース一覧 */}
        <div className="space-y-4">
          {filtered.map((post) => {
            const colorClass = categoryColors[post.category] ?? categoryColors["ブログ"];
            return (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="flex flex-col sm:flex-row gap-4 bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-5 hover:border-[#C41E3A]/30 transition-all duration-300 group"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.05)' }}
              >
                <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 w-auto sm:w-28">
                  <time
                    className="text-[#A0AAB8] text-xs"
                    dateTime={post.date}
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {post.date}
                  </time>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-xs border rounded-full ${colorClass}`}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h2
                    className="text-[#002B5C] font-bold text-lg mb-2 group-hover:text-[#C41E3A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                  >
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[#6B7A99] text-sm leading-relaxed line-clamp-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                      {post.excerpt}
                    </p>
                  )}
                </div>
                <div className="shrink-0 self-center text-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#A0AAB8] py-20">
            該当する記事が見つかりません
          </p>
        )}
      </div>
    </div>
  );
}

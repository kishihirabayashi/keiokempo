"use client";

import { useState } from "react";
import Link from "next/link";

const allNews = [
  {
    title: "2025年度 団体戦 戦績まとめ",
    date: "2025-11-30",
    category: "試合結果",
    slug: "2025-team-results",
    excerpt: "2025年度の団体戦戦績をまとめました。早慶定期戦2連覇達成など、充実した1年となりました。",
  },
  {
    title: "2025年度 個人戦 戦績まとめ",
    date: "2025-11-30",
    category: "試合結果",
    slug: "2025-individual-results",
    excerpt: "2025年度の個人戦戦績をまとめました。東日本学生個人選手権 優勝をはじめ多数入賞しました。",
  },
  {
    title: "2024年度 団体戦 戦績まとめ",
    date: "2024-11-30",
    category: "試合結果",
    slug: "2024-team-results",
    excerpt: "2024年度の団体戦戦績をまとめました。東日本大学新人戦・早慶定期戦の2冠を達成しました。",
  },
  {
    title: "2024年度 個人戦 戦績まとめ",
    date: "2024-11-30",
    category: "試合結果",
    slug: "2024-individual-results",
    excerpt: "2024年度の個人戦戦績をまとめました。各大会で優勝・入賞を果たしました。",
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

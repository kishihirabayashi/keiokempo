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
  "試合結果": "bg-[#B01E33]/10 text-[#B01E33] border-[#B01E33]/30",
  "お知らせ": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "イベント": "bg-[#B01E33]/10 text-[#B01E33] border-[#B01E33]/30",
  "ブログ": "bg-[#E0D8B9] text-[#6B7A99] border-[#D4C9B8]",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("全て");

  const filtered =
    activeCategory === "全て"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#E0D8B9]">
      {/* ─── ヘッダービジュアル ─── */}
      <div className="relative bg-[#E0D8B9] pt-36 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #B01E33 35%, #B01E33 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(176,30,51,0.45)',
          }}
        />
        {/* 縦書き装飾 */}
        <div
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none vertical-text text-[#002B5C] font-black"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 10vw, 8rem)", opacity: 0.04, letterSpacing: "0.1em" }}
          aria-hidden="true"
        >
          News
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-title-en mb-4">News &amp; Blog</p>
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
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-[#B01E33] border-[#B01E33] text-white font-bold"
                  : "bg-[#E4DCBE] border-[#D4C9B8] text-[#6B7A99] hover:border-[#B01E33]/40 hover:text-[#2D3748]"
              }`}
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── ニュース一覧 ─── */}
        {filtered.length > 0 && (
          <div>
            {/* 1件目: フィーチャー大 */}
            <Link
              href={`/news/${filtered[0].slug}`}
              className="block mb-5 bg-[#E4DCBE] rounded-xl border border-[#D4C9B8] p-8 lg:p-10 group hover:border-[#B01E33]/30 transition-all duration-300 relative overflow-hidden"
              style={{ boxShadow: '0 4px 16px rgba(27,42,74,0.08)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                {/* 左: 日付・カテゴリ */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-2">
                  <span
                    className={`inline-block px-3 py-1 text-xs border rounded-full ${categoryColors[filtered[0].category] ?? categoryColors["ブログ"]}`}
                  >
                    {filtered[0].category}
                  </span>
                  <time
                    className="text-[#A0AAB8] text-sm"
                    dateTime={filtered[0].date}
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {filtered[0].date}
                  </time>
                </div>
                {/* 右: タイトル + 本文 */}
                <div className="lg:col-span-9">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5C] mb-4 group-hover:text-[#B01E33] transition-colors duration-300 leading-snug"
                    style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                  >
                    {filtered[0].title}
                  </h2>
                  {filtered[0].excerpt && (
                    <p
                      className="text-[#6B7A99] leading-relaxed line-clamp-3"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                    >
                      {filtered[0].excerpt}
                    </p>
                  )}
                  <div
                    className="mt-4 flex items-center gap-2 text-[#B01E33] text-xs tracking-[0.3em]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <span>READ MORE</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* 2件目以降: コンパクト横並びリスト */}
            {filtered.length > 1 && (
              <div className="space-y-3">
                {filtered.slice(1).map((post) => {
                  const colorClass = categoryColors[post.category] ?? categoryColors["ブログ"];
                  return (
                    <Link
                      key={post.slug}
                      href={`/news/${post.slug}`}
                      className="flex flex-col sm:flex-row gap-4 bg-[#E4DCBE] rounded-xl border border-[#D4C9B8] p-5 hover:border-[#B01E33]/30 transition-all duration-300 group"
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
                        <span className={`inline-block px-2.5 py-0.5 text-xs border rounded-full ${colorClass}`}>
                          {post.category}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h2
                          className="text-[#002B5C] font-bold text-base mb-1 group-hover:text-[#B01E33] transition-colors duration-300"
                          style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                        >
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p
                            className="text-[#6B7A99] text-sm leading-relaxed line-clamp-1"
                            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                          >
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 self-center text-[#B01E33] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-[#A0AAB8] py-20">
            該当する記事が見つかりません
          </p>
        )}
      </div>
    </div>
  );
}

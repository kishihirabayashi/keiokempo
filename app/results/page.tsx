"use client";

import { useState } from "react";
import ResultTable from "@/components/ResultTable";
import type { TournamentResult } from "@/lib/getResults";

const results: TournamentResult[] = [
  // 2026年度 団体戦
  { year: 2026, tournament: "第39回 全国大学選抜選手権大会", category: "団体戦", result: "男子の部 第3位（部史上初）", details: "Cブロックを勝ち進み準決勝進出 → 準決勝敗退 → 3位決定戦 勝利。近畿大○・同志社大○・龍谷大○・関西大×・関西学院大○" },
  { year: 2026, tournament: "第39回 東日本大学リーグ戦", category: "団体戦", result: "男子の部 第3位", details: "予選1位通過 → 決勝リーグ進出 → 3位決定戦 勝利" },
  // 2025年度 団体戦
  { year: 2025, tournament: "早慶定期戦", category: "団体戦", result: "優勝", details: "2連覇達成" },
  { year: 2025, tournament: "東日本大学新人戦", category: "団体戦", result: "準優勝" },
  { year: 2025, tournament: "東日本大学リーグ戦", category: "団体戦", result: "3位" },
  { year: 2025, tournament: "東日本大学選手権大会", category: "団体戦", result: "3位" },
  { year: 2025, tournament: "全国大学選抜選手権大会", category: "団体戦", result: "ベスト16" },
  { year: 2025, tournament: "全日本学生拳法選手権大会", category: "団体戦", result: "ベスト8" },
  // 2025年度 個人戦
  { year: 2025, tournament: "東日本学生個人選手権 級の部", category: "個人戦", result: "優勝" },
  { year: 2025, tournament: "全日本体重別選手権 男子81kg以上の部", category: "個人戦", result: "準優勝" },
  { year: 2025, tournament: "全日本体重別選手権 男子73kg未満の部", category: "個人戦", result: "ベスト4" },
  { year: 2025, tournament: "埼玉県選手権大会 級の部", category: "個人戦", result: "4位" },
  // 2024年度 団体戦
  { year: 2024, tournament: "東日本大学新人戦", category: "団体戦", result: "優勝" },
  { year: 2024, tournament: "早慶定期戦", category: "団体戦", result: "優勝" },
  { year: 2024, tournament: "東日本大学選手権大会", category: "団体戦", result: "4位" },
  { year: 2024, tournament: "全日本学生拳法選手権大会", category: "団体戦", result: "ベスト8" },
  // 2024年度 個人戦
  { year: 2024, tournament: "高幡不動尊奉納大会 級の部", category: "個人戦", result: "優勝" },
  { year: 2024, tournament: "高幡不動尊奉納大会 級の部", category: "個人戦", result: "4位" },
  { year: 2024, tournament: "埼玉県錬成大会 級の部", category: "個人戦", result: "優勝", details: "ゴジラ賞受賞" },
  { year: 2024, tournament: "埼玉県錬成大会 級の部", category: "個人戦", result: "3位" },
  { year: 2024, tournament: "埼玉県錬成大会 級の部", category: "個人戦", result: "4位" },
  { year: 2024, tournament: "全日本体重別選手権大会 男子73kg未満の部", category: "個人戦", result: "3位" },
];

const years = [...new Set(results.map((r) => r.year))].sort((a, b) => b - a);

const highlights = [
  { year: "2026", title: "団体戦 第3位（部史上初）", name: "男子の部", tournament: "第39回 全国大学選抜選手権大会" },
  { year: "2026", title: "団体戦 第3位", name: "男子の部", tournament: "第39回 東日本大学リーグ戦" },
  { year: "2025", title: "団体戦 優勝", name: "2連覇達成", tournament: "早慶定期戦" },
  { year: "2025", title: "個人戦 優勝", name: "級の部", tournament: "東日本学生個人選手権" },
  { year: "2024", title: "団体戦 優勝", name: "団体戦", tournament: "東日本大学新人戦" },
  { year: "2024", title: "団体戦 優勝", name: "団体戦", tournament: "早慶定期戦" },
  { year: "2024", title: "個人戦 優勝", name: "級の部", tournament: "高幡不動尊奉納大会" },
  { year: "2024", title: "個人戦 優勝", name: "級の部・ゴジラ賞", tournament: "埼玉県錬成大会" },
];

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const filtered =
    selectedYear === "all"
      ? results
      : results.filter((r) => r.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* ─── ヘッダービジュアル ─── */}
      <div className="relative bg-[#F5F0E6] pt-36 pb-24 overflow-hidden">
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
          Results
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-title-en mb-4">Results</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            戦績・試合結果
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ─── ハイライト ─── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Highlights</p>
            <div className="red-bar" />
          </div>

          {/* 1件目: 全幅フィーチャー */}
          {highlights.length > 0 && (
            <div className="mb-5">
              <div
                className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
                style={{ boxShadow: '0 4px 18px rgba(27,42,74,0.10)' }}
              >
                {/* 左: 大きな年度パネル */}
                <div className="lg:col-span-3 bg-[#002B5C] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-white/35 text-xs tracking-[0.55em] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>YEAR</p>
                    <span
                      className="font-black text-white leading-none block"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3.5rem, 6vw, 5.5rem)", letterSpacing: "-0.03em" }}
                    >
                      {highlights[0].year}
                    </span>
                    <span className="text-[#B8860B] text-sm mt-1 block" style={{ fontFamily: "var(--font-cormorant)" }}>年度</span>
                  </div>
                </div>
                {/* 右: 詳細 */}
                <div className="lg:col-span-9 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                  <span className="inline-block px-3 py-1 bg-[#B01E33]/10 text-[#B01E33] text-xs border border-[#B01E33]/30 rounded-full mb-4 w-fit">
                    {highlights[0].title}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5C] mb-3 relative z-10"
                    style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                  >
                    {highlights[0].tournament}
                  </h3>
                  <p className="text-[#A0AAB8] text-sm relative z-10">{highlights[0].name}</p>
                </div>
              </div>
            </div>
          )}

          {/* 残り: 3カラムグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.slice(1).map((h, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6 relative overflow-hidden"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}
              >
                <span className="inline-block px-3 py-1 bg-[#B01E33]/10 text-[#B01E33] text-xs border border-[#B01E33]/30 rounded-full mb-4">
                  {h.title}
                </span>
                <p
                  className="text-[#002B5C] font-bold text-sm mb-1 relative z-10"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {h.tournament}
                </p>
                <p className="text-[#A0AAB8] text-xs">{h.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 全戦績テーブル ─── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <p className="section-title-en">All Results</p>
            <div className="red-bar" />
          </div>
          {/* 年度フィルター */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                selectedYear === "all"
                  ? "bg-[#B01E33] border-[#B01E33] text-white font-bold"
                  : "bg-[#FAF7F0] border-[#D4C9B8] text-[#6B7A99] hover:border-[#B01E33]/40 hover:text-[#2D3748]"
              }`}
            >
              全年度
            </button>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                  selectedYear === y
                    ? "bg-[#B01E33] border-[#B01E33] text-white font-bold"
                    : "bg-[#FAF7F0] border-[#D4C9B8] text-[#6B7A99] hover:border-[#B01E33]/40 hover:text-[#2D3748]"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {y}
              </button>
            ))}
          </div>

          <div
            className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] overflow-hidden"
            style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}
          >
            <ResultTable results={filtered} />
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ResultTable from "@/components/ResultTable";
import type { TournamentResult } from "@/lib/getResults";

const results: TournamentResult[] = [
  { year: 2024, tournament: "第72回全日本学生拳法選手権大会", category: "団体戦", result: "ベスト8", details: "準々決勝で関西大学に惜敗" },
  { year: 2024, tournament: "第72回全日本学生拳法選手権大会", category: "個人戦", result: "ベスト16" },
  { year: 2024, tournament: "関東学生拳法選手権大会", category: "団体戦", result: "準優勝", details: "決勝で日本大学と対戦" },
  { year: 2024, tournament: "関東学生拳法選手権大会", category: "個人戦", result: "3位", details: "田中主将がベスト4進出" },
  { year: 2024, tournament: "東日本大学拳法選手権大会", category: "団体戦", result: "ベスト8" },
  { year: 2023, tournament: "第71回全日本学生拳法選手権大会", category: "団体戦", result: "ベスト16" },
  { year: 2023, tournament: "関東学生拳法選手権大会", category: "団体戦", result: "ベスト8" },
  { year: 2023, tournament: "関東学生拳法選手権大会", category: "個人戦", result: "優勝", details: "佐藤翔（現副将）が個人タイトル獲得" },
  { year: 2022, tournament: "第70回全日本学生拳法選手権大会", category: "団体戦", result: "ベスト8" },
  { year: 2022, tournament: "関東学生拳法選手権大会", category: "団体戦", result: "3位" },
  { year: 2021, tournament: "関東学生拳法選手権大会", category: "団体戦", result: "準優勝" },
];

const years = [...new Set(results.map((r) => r.year))].sort((a, b) => b - a);

const highlights = [
  { year: "2023", title: "個人戦 優勝", name: "佐藤翔（現副将）", tournament: "関東学生拳法選手権大会" },
  { year: "2024", title: "団体戦 準優勝", name: "チーム全体", tournament: "関東学生拳法選手権大会" },
  { year: "2021", title: "団体戦 準優勝", name: "チーム全体", tournament: "関東学生拳法選手権大会" },
];

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const filtered =
    selectedYear === "all"
      ? results
      : results.filter((r) => r.year === selectedYear);

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

        {/* ハイライト */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Highlights</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6 relative overflow-hidden"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <div className="absolute right-4 top-4 text-[#002B5C]/[0.06] text-6xl font-black"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {h.year}
                </div>
                <span className="inline-block px-3 py-1 bg-[#C41E3A]/10 text-[#C41E3A] text-xs border border-[#C41E3A]/30 rounded-full mb-4">
                  {h.title}
                </span>
                <p className="text-[#002B5C] font-bold text-sm mb-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                  {h.tournament}
                </p>
                <p className="text-[#A0AAB8] text-xs">{h.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年度フィルター */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <p className="section-title-en">All Results</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                selectedYear === "all"
                  ? "bg-[#C41E3A] border-[#C41E3A] text-white font-bold"
                  : "bg-[#FAF7F0] border-[#D4C9B8] text-[#6B7A99] hover:border-[#C41E3A]/40 hover:text-[#2D3748]"
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
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white font-bold"
                    : "bg-[#FAF7F0] border-[#D4C9B8] text-[#6B7A99] hover:border-[#C41E3A]/40 hover:text-[#2D3748]"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {y}
              </button>
            ))}
          </div>

          <div className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] overflow-hidden"
            style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
            <ResultTable results={filtered} />
          </div>
        </section>
      </div>
    </div>
  );
}

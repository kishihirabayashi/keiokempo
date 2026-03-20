"use client";

import { useState } from "react";
import MemberCard from "@/components/MemberCard";

// membersデータをクライアントサイドで扱うためにデータをインライン化
// 実際の実装ではサーバーコンポーネント化を推奨
const members = [
  {
    name: "田中 雄介", grade: 4, faculty: "法学部", role: "主将",
    origin: "慶應義塾高校", comment: "最後の一年、全力で戦います。", type: "player" as const,
  },
  {
    name: "佐藤 翔", grade: 4, faculty: "経済学部", role: "副将",
    origin: "栄光学園高校", comment: "日本拳法は人生を変える武道です。", type: "player" as const,
  },
  {
    name: "鈴木 誠一", grade: 4, faculty: "理工学部", role: "主務",
    origin: "浅野高校", comment: "部を支える縁の下の力持ちとして頑張ります。", type: "staff" as const,
  },
  {
    name: "高橋 健太", grade: 3, faculty: "商学部",
    origin: "横浜翠嵐高校", comment: "初心者から始めて今があります。諦めないことが大事。", type: "player" as const,
  },
  {
    name: "伊藤 優斗", grade: 3, faculty: "文学部",
    origin: "東京都立西高校", comment: "武道の精神と学問の両立を目指して。", type: "player" as const,
  },
  {
    name: "渡辺 稜", grade: 3, faculty: "環境情報学部",
    origin: "SFC高校", comment: "ここでの経験が将来の財産になると信じています。", type: "player" as const,
  },
  {
    name: "中村 彩", grade: 3, faculty: "総合政策学部", role: "マネージャー",
    origin: "フェリス女学院高校", comment: "選手の皆さんが全力で戦える環境を作ります。", type: "manager" as const,
  },
  {
    name: "山田 太郎", grade: 2, faculty: "法学部",
    origin: "聖光学院高校", comment: "先輩方の背中を追いかけて成長したい。", type: "player" as const,
  },
  {
    name: "小林 拓也", grade: 2, faculty: "経済学部",
    origin: "武蔵高校", comment: "日本拳法の奥深さに毎日驚かされています。", type: "player" as const,
  },
  {
    name: "加藤 美咲", grade: 2, faculty: "文学部", role: "マネージャー",
    origin: "桜蔭高校", comment: "文武両道を体現する部の一員として精進します。", type: "manager" as const,
  },
  {
    name: "吉田 蒼", grade: 1, faculty: "理工学部",
    origin: "麻布高校", comment: "入部してまだ半年ですが、毎日が新鮮な発見です。", type: "player" as const,
  },
  {
    name: "西村 海斗", grade: 1, faculty: "商学部",
    origin: "開成高校", comment: "格闘技は初めてですが、先輩たちが丁寧に教えてくれます。", type: "player" as const,
  },
  {
    name: "松本 凛", grade: 1, faculty: "総合政策学部", role: "マネージャー",
    origin: "雙葉高校", comment: "新歓で見た試合に感動して入部を決めました。", type: "manager" as const,
  },
];

type GradeFilter = "all" | 1 | 2 | 3 | 4;
type TypeFilter = "all" | "player" | "manager" | "staff";

export default function MembersPage() {
  const [gradeFilter, setGradeFilter] = useState<GradeFilter>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const filtered = members.filter((m) => {
    const gradeOk = gradeFilter === "all" || m.grade === gradeFilter;
    const typeOk = typeFilter === "all" || m.type === typeFilter;
    return gradeOk && typeOk;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* ヘッダービジュアル */}
      <div className="relative bg-[#F2F0EB] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-title-en mb-4">Members</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            部員紹介
          </h1>
          <p className="text-[#6B7A99] text-lg"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            {new Date().getFullYear()}年度 部員一覧
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* フィルター */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex flex-wrap gap-2">
            <span className="text-[#A0AAB8] text-xs self-center mr-2"
              style={{ fontFamily: "var(--font-cormorant)" }}>GRADE</span>
            {(["all", 1, 2, 3, 4] as GradeFilter[]).map((g) => (
              <button
                key={g}
                onClick={() => setGradeFilter(g)}
                className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                  gradeFilter === g
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white font-bold"
                    : "bg-white border-[#E8DFD0] text-[#6B7A99] hover:border-[#C41E3A]/40 hover:text-[#1B2A4A]"
                }`}
              >
                {g === "all" ? "全学年" : `${g}年`}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 ml-4">
            <span className="text-[#A0AAB8] text-xs self-center mr-2"
              style={{ fontFamily: "var(--font-cormorant)" }}>ROLE</span>
            {[
              { v: "all" as TypeFilter, l: "全員" },
              { v: "player" as TypeFilter, l: "選手" },
              { v: "manager" as TypeFilter, l: "マネージャー" },
              { v: "staff" as TypeFilter, l: "スタッフ" },
            ].map(({ v, l }) => (
              <button
                key={v}
                onClick={() => setTypeFilter(v)}
                className={`px-4 py-1.5 text-sm border rounded-md transition-colors duration-150 ${
                  typeFilter === v
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white font-bold"
                    : "bg-white border-[#E8DFD0] text-[#6B7A99] hover:border-[#C41E3A]/40 hover:text-[#1B2A4A]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((member) => (
            <MemberCard key={`${member.name}-${member.grade}`} member={member} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#A0AAB8] py-20">
            該当する部員が見つかりません
          </p>
        )}
      </div>
    </div>
  );
}

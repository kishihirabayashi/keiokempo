import type { Metadata } from "next";
import MemberCard from "@/components/MemberCard";
import { getAllMembers } from "@/lib/getMembers";

export const metadata: Metadata = {
  title: "部員紹介",
  description:
    "慶應義塾大学體育會拳法部の現役部員紹介。26名（男女）が蝮谷拳法道場を拠点に活動中。9割が大学から日本拳法を始めた初心者出身。",
  alternates: { canonical: "https://keiokempo.com/members" },
  openGraph: {
    title: "部員紹介 | 慶應義塾大学體育會拳法部",
    description: "慶應拳法部の現役部員26名を紹介。9割が大学から日本拳法を始めた初心者出身。",
    url: "https://keiokempo.com/members",
  },
};

const GRADE_ORDER = ["4年", "3年", "2年"];
const GRADE_EN: Record<string, string> = {
  "4年": "4th Year",
  "3年": "3rd Year",
  "2年": "2nd Year",
};

export default function MembersPage() {
  const members = getAllMembers();

  const grouped = GRADE_ORDER.reduce((acc, grade) => {
    acc[grade] = members.filter((m) => m.grade === grade);
    return acc;
  }, {} as Record<string, ReturnType<typeof getAllMembers>>);

  return (
    <div className="min-h-screen bg-[#D6CEAD]">
      {/* ─── ヘッダービジュアル ─── */}
      <div className="relative bg-[#D6CEAD] pt-40 pb-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: "linear-gradient(to right, #002B5C 0%, #002B5C 18%, #B01E33 35%, #B01E33 65%, #002B5C 82%, #002B5C 100%)",
            boxShadow: "0 2px 14px rgba(176,30,51,0.45)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-title-en mb-4">Members</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            部員紹介
          </h1>
          <div className="flex items-center gap-4">
            <p
              className="text-[#6B7A99] text-lg"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {new Date().getFullYear()}年度 現役部員一覧
            </p>
            <span
              className="font-black text-[#B01E33]"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", lineHeight: 1 }}
            >
              {members.length}
            </span>
            <span className="text-[#6B7A99] text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>名</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {GRADE_ORDER.map((grade) => {
          const gradeMembers = grouped[grade];
          if (!gradeMembers?.length) return null;
          return (
            <section key={grade} className="mb-20 last:mb-0 relative">
              {/* ─── 学年見出し（エディトリアル） ─── */}
              <div className="flex items-end gap-4 mb-10 relative">
                {/* 見出し本体 */}
                <div className="pl-4 border-l-[6px] border-[#B01E33] relative z-10">
                  <p
                    className="text-[#B01E33] text-xs tracking-[0.45em] uppercase mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {GRADE_EN[grade]}
                  </p>
                  <h2
                    className="text-3xl font-black text-[#002B5C]"
                    style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                  >
                    {grade}
                  </h2>
                </div>
                {/* 赤グラデーションバー */}
                <div className="red-bar ml-4" />
                <span
                  className="text-[#A0AAB8] text-sm shrink-0"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {gradeMembers.length} members
                </span>
              </div>

              {/* カードグリッド */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {gradeMembers.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

import MemberCard from "@/components/MemberCard";
import { getAllMembers } from "@/lib/getMembers";

const GRADE_ORDER = ["4年", "3年", "2年", "修士1年"];
const GRADE_EN: Record<string, string> = {
  "4年": "4th Year",
  "3年": "3rd Year",
  "2年": "2nd Year",
  "修士1年": "Master's 1st Year",
};

export default function MembersPage() {
  const members = getAllMembers();

  const grouped = GRADE_ORDER.reduce((acc, grade) => {
    acc[grade] = members.filter((m) => m.grade === grade);
    return acc;
  }, {} as Record<string, ReturnType<typeof getAllMembers>>);

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* ヘッダービジュアル */}
      <div className="relative bg-[#EDE7D9] pt-36 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: "linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)",
            boxShadow: "0 2px 14px rgba(196,30,58,0.45)",
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
          <p
            className="text-[#6B7A99] text-lg"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            {new Date().getFullYear()}年度 現役部員一覧 — {members.length}名
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {GRADE_ORDER.map((grade) => {
          const gradeMembers = grouped[grade];
          if (!gradeMembers?.length) return null;
          return (
            <section key={grade} className="mb-16 last:mb-0">
              {/* 学年見出し */}
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <p
                    className="text-[#C41E3A] text-xs tracking-[0.45em] uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {GRADE_EN[grade]}
                  </p>
                  <h2
                    className="text-2xl font-black text-[#002B5C]"
                    style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                  >
                    {grade}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-[#D4C9B8]" />
                <span
                  className="text-[#A0AAB8] text-sm"
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

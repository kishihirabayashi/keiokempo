import Image from "next/image";
import type { Member } from "@/lib/getMembers";

interface MemberCardProps {
  member: Member;
}

function getInitials(name: string): string {
  return name.replace(/\s+/g, "").slice(0, 2);
}

const importantRoles = ["主将", "副将", "主務", "副務"];

export default function MemberCard({ member }: MemberCardProps) {
  const hasImportantRole = member.role && importantRoles.includes(member.role);

  return (
    <div
      className="bg-[#FAF7F0] rounded-2xl overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(27,42,74,0.18),0_0_0_1px_rgba(196,30,58,0.14)]"
      style={{ boxShadow: "0 2px 12px rgba(27,42,74,0.07), 0 0 0 1px rgba(27,42,74,0.05)" }}
    >
      {/* 写真エリア */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        {member.photo ? (
          <Image
            src={`/images/members/${member.photo}`}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#002B5C]">
            <span
              className="text-5xl font-black text-white/80 tracking-wider"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* 学年バッジ */}
        <div
          className="absolute top-3 left-3 bg-[#FAF7F0]/90 backdrop-blur-sm px-2.5 py-0.5 text-[#002B5C] text-xs rounded-full"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {member.grade}
        </div>

        {/* 役職バッジ（重要役職のみ・赤バッジ） */}
        {hasImportantRole && (
          <div
            className="absolute top-3 right-3 bg-[#C41E3A] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            {member.role}
          </div>
        )}

        {/* 下部グラデーション */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      {/* 情報エリア */}
      <div className="p-4">
        {/* 名前 */}
        <h3
          className="text-[#002B5C] font-black text-lg leading-snug mb-1"
          style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.05em" }}
        >
          {member.name}
        </h3>

        <p
          className="text-[#6B7A99] text-xs mb-3"
          style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.6 }}
        >
          {member.faculty}
          {member.origin && (
            <>
              <br />
              {member.origin}
            </>
          )}
        </p>

        {/* 段位・得意技 */}
        <div className="flex flex-wrap gap-1.5">
          {member.rank && (
            <span
              className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 bg-[#002B5C]/8 border border-[#002B5C]/20 text-[#002B5C] rounded-full"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {member.rank}
            </span>
          )}
          {member.skill && (
            <span
              className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 bg-[#C41E3A]/8 border border-[#C41E3A]/20 text-[#C41E3A] rounded-full"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {member.skill}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

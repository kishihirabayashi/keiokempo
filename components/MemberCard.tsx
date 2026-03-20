import Image from "next/image";
import type { Member } from "@/lib/getMembers";

interface MemberCardProps {
  member: Member;
}

const roleColors: Record<string, string> = {
  "主将": "text-[#C41E3A] border-[#C41E3A]/40 bg-[#C41E3A]/8",
  "副将": "text-[#C41E3A] border-[#C41E3A]/30 bg-[#C41E3A]/5",
  "主務": "text-[#002B5C] border-[#002B5C]/40 bg-[#002B5C]/8",
  "マネージャー": "text-[#6B7A99] border-[#DDD8CF] bg-[#F2F0EB]",
};

export default function MemberCard({ member }: MemberCardProps) {
  const roleColor = (member.role ? roleColors[member.role] : undefined) ?? "text-[#6B7A99] border-[#DDD8CF] bg-[#F2F0EB]";

  return (
    <div className="bg-white rounded-xl overflow-hidden card-lift"
      style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.07), 0 0 0 1px rgba(27,42,74,0.05)' }}>
      {/* 写真 */}
      <div className="relative w-full aspect-[4/5] bg-[#E8DFD0] overflow-hidden rounded-t-xl">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-[#C8D0DC]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
        {/* グレードバッジ */}
        <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm px-2.5 py-0.5 text-[#002B5C] text-xs rounded-full"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          {member.grade}年
        </div>
      </div>

      {/* 情報 */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-[#002B5C] font-bold text-lg"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            {member.name}
          </h3>
          {member.role && (
            <span
              className={`shrink-0 text-xs px-2 py-0.5 border rounded-full ${roleColor}`}
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {member.role}
            </span>
          )}
        </div>
        <p className="text-[#6B7A99] text-xs mb-3">
          {member.faculty}　{member.origin && `出身：${member.origin}`}
        </p>
        {member.comment && (
          <p className="text-[#1B2A4A]/70 text-sm leading-relaxed italic border-l-[3px] border-[#C41E3A]/30 pl-3 bg-[#FAFAF7] py-2 rounded-r-md">
            「{member.comment}」
          </p>
        )}
      </div>
    </div>
  );
}

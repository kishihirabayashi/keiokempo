import Image from "next/image";
import type { Member } from "@/lib/getMembers";

interface MemberCardProps {
  member: Member;
}

const roleColors: Record<string, string> = {
  "主将": "text-[#C41E3A] border-[#C41E3A]/40 bg-[#C41E3A]/8",
  "副将": "text-[#C41E3A] border-[#C41E3A]/30 bg-[#C41E3A]/5",
  "主務": "text-[#002B5C] border-[#002B5C]/40 bg-[#002B5C]/8",
  "マネージャー": "text-[#6B7A99] border-[#C9BEAC] bg-[#EDE7D9]",
};

export default function MemberCard({ member }: MemberCardProps) {
  const roleColor = (member.role ? roleColors[member.role] : undefined) ?? "text-[#6B7A99] border-[#C9BEAC] bg-[#EDE7D9]";

  return (
    <div
      className="bg-[#FAF7F0] rounded-xl overflow-hidden card-lift"
      style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.06), 0 0 0 1px rgba(27,42,74,0.04)" }}
    >
      {/* 写真 */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl group">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 photo-placeholder">
            <svg className="w-16 h-16 text-[#B0A090]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
            <span>PHOTO</span>
          </div>
        )}
        {/* グレードバッジ */}
        <div
          className="absolute top-3 left-3 bg-[#FAF7F0]/88 backdrop-blur-sm px-2.5 py-0.5 text-[#002B5C] text-xs rounded-full"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {member.grade}年
        </div>
      </div>

      {/* 情報 */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-[#002B5C] font-bold text-lg"
            style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
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
        <p className="text-[#6B7A99] text-xs mb-3" style={{ lineHeight: 1.85 }}>
          {member.faculty}　{member.origin && `出身：${member.origin}`}
        </p>
        {member.comment && (
          <p
            className="text-[#1B2A4A]/70 text-sm italic border-l-[3px] border-[#C41E3A]/30 pl-3 bg-[#EDE7D9] py-2 rounded-r-md"
            style={{ lineHeight: 1.85 }}
          >
            「{member.comment}」
          </p>
        )}
      </div>
    </div>
  );
}

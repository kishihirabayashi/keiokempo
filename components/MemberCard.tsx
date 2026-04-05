"use client";

import { useState } from "react";
import Image from "next/image";
import type { Member } from "@/lib/getMembers";

interface MemberCardProps {
  member: Member;
}

const roleColors: Record<string, string> = {
  "主将": "text-[#C41E3A] border-[#C41E3A]/40 bg-[#C41E3A]/8",
  "副将": "text-[#C41E3A] border-[#C41E3A]/30 bg-[#C41E3A]/5",
  "主務": "text-[#002B5C] border-[#002B5C]/40 bg-[#002B5C]/8",
  "副務": "text-[#002B5C] border-[#002B5C]/30 bg-[#002B5C]/5",
  "マネージャー": "text-[#6B7A99] border-[#C9BEAC] bg-[#EDE7D9]",
};

export default function MemberCard({ member }: MemberCardProps) {
  const [expanded, setExpanded] = useState(false);
  const roleColor =
    (member.role ? roleColors[member.role] : undefined) ??
    "text-[#6B7A99] border-[#C9BEAC] bg-[#EDE7D9]";
  const hasDetails = member.rank || member.skill || member.origin;

  return (
    <div
      className={`bg-[#FAF7F0] rounded-xl overflow-hidden card-lift ${hasDetails ? "cursor-pointer select-none" : ""}`}
      style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.06), 0 0 0 1px rgba(27,42,74,0.04)" }}
      onClick={() => hasDetails && setExpanded((v) => !v)}
    >
      {/* 写真 */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl group">
        {member.photo ? (
          <Image
            src={`/images/members/${member.photo}`}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
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
        {/* 学年バッジ */}
        <div
          className="absolute top-3 left-3 bg-[#FAF7F0]/88 backdrop-blur-sm px-2.5 py-0.5 text-[#002B5C] text-xs rounded-full"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {member.grade}
        </div>
      </div>

      {/* 基本情報（常に表示） */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-[#002B5C] font-bold text-base leading-snug"
            style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
          >
            {member.name}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {member.role && (
              <span
                className={`text-xs px-2 py-0.5 border rounded-full ${roleColor}`}
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {member.role}
              </span>
            )}
            {hasDetails && (
              <svg
                className={`w-3.5 h-3.5 text-[#A0AAB8] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>

        <p
          className="text-[#6B7A99] text-xs"
          style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.6 }}
        >
          {member.faculty}
        </p>

        {/* アコーディオン詳細 */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 border-t border-[#D4C9B8] flex flex-col gap-1.5">
            {member.origin && (
              <span
                className="inline-flex items-center text-[0.65rem] px-2 py-0.5 bg-[#EDE7D9] border border-[#D4C9B8] text-[#6B7A99] rounded-full"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                出身：{member.origin}
              </span>
            )}
            <div className="flex flex-wrap gap-1.5">
              {member.rank && (
                <span
                  className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 bg-[#002B5C]/8 border border-[#002B5C]/20 text-[#002B5C] rounded-full"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {member.rank}
                </span>
              )}
              {member.skill && (
                <span
                  className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 bg-[#C41E3A]/8 border border-[#C41E3A]/20 text-[#C41E3A] rounded-full"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {member.skill}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

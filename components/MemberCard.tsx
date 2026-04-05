"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, mounted]);

  const roleColor =
    (member.role ? roleColors[member.role] : undefined) ??
    "text-[#6B7A99] border-[#C9BEAC] bg-[#EDE7D9]";

  const modal = open ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      {/* モーダル本体 */}
      <div
        className="animate-modal-in relative bg-[#FAF7F0] rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-3 right-3 z-10 bg-[#FAF7F0]/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-[#6B7A99] hover:text-[#C41E3A] transition-colors duration-200"
          onClick={() => setOpen(false)}
          aria-label="閉じる"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 写真 */}
        <div className="relative w-full aspect-[3/4]">
          {member.photo ? (
            <Image
              src={`/images/members/${member.photo}`}
              alt={member.name}
              fill
              sizes="400px"
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 photo-placeholder">
              <svg className="w-20 h-20 text-[#B0A090]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <span>PHOTO</span>
            </div>
          )}
          {/* 下部グラデーション */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F0] to-transparent" />
        </div>

        {/* 情報エリア */}
        <div className="px-6 pb-6 -mt-2">
          {/* 名前・役職 */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <h2
              className="text-[#002B5C] font-black text-2xl leading-snug"
              style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.03em" }}
            >
              {member.name}
            </h2>
            {member.role && (
              <span
                className={`shrink-0 mt-1 text-xs px-3 py-1 border rounded-full ${roleColor}`}
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {member.role}
              </span>
            )}
          </div>

          {/* 詳細 */}
          <dl className="space-y-2.5">
            <div className="flex gap-4">
              <dt className="shrink-0 text-[#A0AAB8] text-xs w-14" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>学年</dt>
              <dd className="text-[#2D3748] text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{member.grade}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="shrink-0 text-[#A0AAB8] text-xs w-14" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>学部</dt>
              <dd className="text-[#2D3748] text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{member.faculty}</dd>
            </div>
            {member.origin && (
              <div className="flex gap-4">
                <dt className="shrink-0 text-[#A0AAB8] text-xs w-14" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>出身校</dt>
                <dd className="text-[#2D3748] text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{member.origin}</dd>
              </div>
            )}
            {member.rank && (
              <div className="flex gap-4">
                <dt className="shrink-0 text-[#A0AAB8] text-xs w-14" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>段位</dt>
                <dd className="text-[#2D3748] text-sm" style={{ fontFamily: "var(--font-cormorant)" }}>{member.rank}</dd>
              </div>
            )}
            {member.skill && (
              <div className="flex gap-4">
                <dt className="shrink-0 text-[#A0AAB8] text-xs w-14" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>得意技</dt>
                <dd className="text-[#C41E3A] text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{member.skill}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* カード（写真＋名前のみ） */}
      <div
        className="bg-[#FAF7F0] rounded-xl overflow-hidden card-lift cursor-pointer"
        style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.06), 0 0 0 1px rgba(27,42,74,0.04)" }}
        onClick={() => setOpen(true)}
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
        </div>

        {/* 名前のみ */}
        <div className="p-3 text-center">
          <h3
            className="text-[#002B5C] font-bold text-sm leading-snug"
            style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
          >
            {member.name}
          </h3>
        </div>
      </div>

      {mounted && createPortal(modal, document.body)}
    </>
  );
}

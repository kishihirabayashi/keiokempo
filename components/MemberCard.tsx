"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Member } from "@/lib/getMembers";

interface MemberCardProps {
  member: Member;
}

// ロールバッジスタイル
const roleBadgeStyle: Record<string, string> = {
  "主将": "bg-gradient-to-r from-[#C41E3A] to-[#a01530] text-white shadow-md shadow-[#C41E3A]/30",
  "副将": "bg-[#C41E3A]/10 text-[#C41E3A] border border-[#C41E3A]/40",
  "主務": "bg-[#002B5C] text-white shadow-md shadow-[#002B5C]/25",
  "副務": "bg-[#002B5C]/10 text-[#002B5C] border border-[#002B5C]/40",
  "マネージャー": "bg-[#6B7A99]/10 text-[#6B7A99] border border-[#6B7A99]/30",
};

// 情報フィールド定義（6項目固定順）
const FIELDS = [
  { en: "GRADE",    key: "grade"   },
  { en: "FACULTY",  key: "faculty" },
  { en: "ROLE",     key: "role"    },
  { en: "HOMETOWN", key: "origin"  },
  { en: "RANK",     key: "rank"    },
  { en: "SKILL",    key: "skill"   },
] as const;

// アニメーション variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  exit:   { opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const, delay: 0.05 } },
};

const modalVariants = {
  hidden:  { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0, scale: 0.95, y: 12,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

// 写真: 0.5sでフェードイン（delay 0.2s）
const photoVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.1 } },
};

// 情報エリアのコンテナ: 写真の後に0.1s間隔でstagger
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
  exit:    {},
};

const itemVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
  exit:    { opacity: 0, transition: { duration: 0.1 } },
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

  const badgeClass =
    (member.role ? roleBadgeStyle[member.role] : undefined) ??
    "bg-[#6B7A99]/10 text-[#6B7A99] border border-[#6B7A99]/30";

  const memberData: Record<string, string> = {
    grade:   member.grade,
    faculty: member.faculty,
    role:    member.role ?? "",
    origin:  member.origin ?? "",
    rank:    member.rank ?? "",
    skill:   member.skill ?? "",
  };

  return (
    <>
      {/* ─── カード（写真＋名前のみ） ─── */}
      <div
        className="bg-[#FAF7F0] rounded-xl overflow-hidden card-lift cursor-pointer"
        style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.06), 0 0 0 1px rgba(27,42,74,0.04)" }}
        onClick={() => setOpen(true)}
      >
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
        <div className="p-3 text-center">
          <h3
            className="text-[#002B5C] font-bold text-sm leading-snug break-words"
            style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
          >
            {member.name}
          </h3>
        </div>
      </div>

      {/* ─── ポップアップ ─── */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setOpen(false)}
            >
              {/* オーバーレイ */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              {/* モーダル本体 — overflow-hidden を外し overflowY:auto のみで制御 */}
              <motion.div
                className="relative w-full max-w-sm bg-[#FAF7F0]"
                style={{
                  borderRadius: 20,
                  boxShadow: "0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* ─ 写真エリア（aspect-ratio で高さ確保） ─ */}
                <motion.div
                  className="relative w-full"
                  style={{ aspectRatio: "3 / 4" }}
                  variants={photoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
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
                      <svg className="w-24 h-24 text-[#B0A090]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                  )}

                  {/* 閉じるボタン */}
                  <button
                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(0,0,0,0.28)",
                      backdropFilter: "blur(8px)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                    onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                    aria-label="閉じる"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>

                {/* ─ 情報エリア（写真の真下・余白しっかり） ─ */}
                <motion.div
                  className="px-6 pt-8 pb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* 名前 + 役職バッジ */}
                  <motion.div
                    className="flex items-start justify-between gap-3 mb-6"
                    variants={itemVariants}
                  >
                    <h2
                      className="break-words flex-1"
                      style={{
                        fontFamily: "var(--font-noto-serif-jp)",
                        letterSpacing: "0.03em",
                        fontSize: member.name.length > 12 ? "1.15rem" : member.name.length > 8 ? "1.35rem" : "1.6rem",
                        fontWeight: 900,
                        color: "#002B5C",
                        lineHeight: 1.25,
                        wordBreak: "break-word",
                      }}
                    >
                      {member.name}
                    </h2>
                    {member.role && (
                      <span
                        className={`shrink-0 mt-1 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide ${badgeClass}`}
                        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                      >
                        {member.role}
                      </span>
                    )}
                  </motion.div>

                  {/* 6項目 縦一列 */}
                  <div className="flex flex-col gap-5">
                    {FIELDS.map(({ en, key }) => {
                      const value = memberData[key];
                      return (
                        <motion.div key={en} variants={itemVariants}>
                          <p
                            style={{
                              fontFamily: "var(--font-cormorant)",
                              fontSize: "0.58rem",
                              letterSpacing: "0.2em",
                              color: "#A0AAB8",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              marginBottom: 4,
                            }}
                          >
                            {en}
                          </p>
                          <p
                            style={{
                              fontFamily: key === "rank" ? "var(--font-cormorant)" : "var(--font-noto-sans-jp)",
                              fontSize: key === "rank" ? "0.95rem" : "0.82rem",
                              color: key === "skill" ? "#C41E3A" : "#2D3748",
                              lineHeight: 1.6,
                              fontWeight: key === "skill" ? 600 : 400,
                              minHeight: "1.2em",
                            }}
                          >
                            {value}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

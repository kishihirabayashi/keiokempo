"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ID  = "service_esg7kxt";
const TEMPLATE_ID = "template_ngv07oh";
const PUBLIC_KEY  = "ABx9f1RNPki2m64SU";

type Status = "idle" | "submitting" | "success" | "error" | "limit";

interface FormData {
  name: string;
  faculty: string;
  email: string;
  inquiryType: "見学" | "体験入部" | "その他";
  message: string;
}

const fadeVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" as const } },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    faculty: "",
    email: "",
    inquiryType: "体験入部",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          faculty:      form.faculty,
          from_email:   form.email,
          inquiry_type: form.inquiryType,
          message:      form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
    } catch (err: unknown) {
      const anyErr = err as { status?: number; text?: string; message?: string };
      const isLimit =
        anyErr?.status === 429 ||
        String(anyErr?.text ?? "").toLowerCase().includes("limit") ||
        String(anyErr?.message ?? "").toLowerCase().includes("limit");

      setStatus(isLimit ? "limit" : "error");
    }
  };

  const reset = () => {
    setForm({ name: "", faculty: "", email: "", inquiryType: "体験入部", message: "" });
    setStatus("idle");
  };

  const inputClass =
    "w-full bg-[#FAF7F0] border border-[#D4C9B8] text-[#2D3748] px-4 py-3 text-sm focus:outline-none focus:border-[#002B5C] focus:ring-2 focus:ring-[#002B5C]/10 transition-all duration-300 rounded-lg placeholder-[#B0A090]";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* ── メインフォームエリア ── */}
      <div className="lg:col-span-2">
        <AnimatePresence mode="wait">

          {/* ── 送信成功 ── */}
          {status === "success" && (
            <motion.div
              key="success"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-8 text-center"
              style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.05)" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#C41E3A]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3
                className="text-[#002B5C] font-bold text-xl mb-3"
                style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
              >
                送信完了しました。ご連絡ありがとうございました。
              </h3>
              <p
                className="text-[#6B7A99] text-sm mb-6"
                style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.95 }}
              >
                内容を確認の上、2〜3日以内にご連絡いたします。
                <br />
                お急ぎの場合はInstagramのDMまたはメールにてご連絡ください。
              </p>
              <button
                onClick={reset}
                className="text-[#6B7A99] hover:text-[#002B5C] text-sm underline underline-offset-4 transition-colors duration-200"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                別のお問い合わせをする
              </button>
            </motion.div>
          )}

          {/* ── 送信上限エラー ── */}
          {status === "limit" && (
            <motion.div
              key="limit"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-8"
              style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.05)" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#EDE7D9] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#6B7A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                </svg>
              </div>
              <p
                className="text-[#2D3748] text-sm leading-relaxed text-center mb-6"
                style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.95 }}
              >
                申し訳ございません。フォームの月間送信上限に達しました。<br />
                お手数ですが、直接{" "}
                <a
                  href="mailto:keio.kempo1@gmail.com"
                  className="text-[#C41E3A] hover:underline font-medium"
                >
                  keio.kempo1@gmail.com
                </a>{" "}
                宛にメールでお問い合わせいただくか、Instagram（
                <a
                  href="https://www.instagram.com/keio_kempo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C41E3A] hover:underline font-medium"
                >
                  @keio_kempo
                </a>
                ）のDMまでご連絡ください。
              </p>
            </motion.div>
          )}

          {/* ── フォーム（idle / submitting / error） ── */}
          {(status === "idle" || status === "submitting" || status === "error") && (
            <motion.form
              key="form"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#2D3748] text-xs font-medium mb-2"
                    style={{ fontFamily: "var(--font-noto-sans-jp)", letterSpacing: "0.05em" }}
                  >
                    お名前 <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="faculty"
                    className="block text-[#2D3748] text-xs font-medium mb-2"
                    style={{ fontFamily: "var(--font-noto-sans-jp)", letterSpacing: "0.05em" }}
                  >
                    学部（任意）
                  </label>
                  <input
                    id="faculty"
                    type="text"
                    value={form.faculty}
                    onChange={(e) => setForm({ ...form, faculty: e.target.value })}
                    className={inputClass}
                    placeholder="法学部"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#2D3748] text-xs font-medium mb-2"
                  style={{ fontFamily: "var(--font-noto-sans-jp)", letterSpacing: "0.05em" }}
                >
                  メールアドレス <span className="text-[#C41E3A]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="taro@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-[#2D3748] text-xs font-medium mb-3"
                  style={{ fontFamily: "var(--font-noto-sans-jp)", letterSpacing: "0.05em" }}
                >
                  お問い合わせ種別 <span className="text-[#C41E3A]">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {(["見学", "体験入部", "その他"] as const).map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value={t}
                        checked={form.inquiryType === t}
                        onChange={() => setForm({ ...form, inquiryType: t })}
                        className="accent-[#C41E3A]"
                      />
                      <span
                        className="text-[#2D3748] text-sm"
                        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                      >
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#2D3748] text-xs font-medium mb-2"
                  style={{ fontFamily: "var(--font-noto-sans-jp)", letterSpacing: "0.05em" }}
                >
                  ご質問・メッセージ（任意）
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="ご質問があればお気軽にどうぞ"
                />
              </div>

              {status === "error" && (
                <p
                  className="text-[#C41E3A] text-sm bg-[#C41E3A]/5 border border-[#C41E3A]/20 rounded-lg px-4 py-3"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  送信に失敗しました。もう一度お試しください。
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative w-full sm:w-auto px-8 py-4 bg-[#C41E3A] text-white font-bold text-sm tracking-widest overflow-hidden rounded-lg disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-500 ease-out" />
                <span className="relative z-10">
                  {status === "submitting" ? "送信中..." : "送信する"}
                </span>
              </button>
            </motion.form>
          )}

        </AnimatePresence>
      </div>

      {/* ── 右側：直接連絡先 ── */}
      <div className="space-y-4">
        <div
          className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6"
          style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.05)" }}
        >
          <h3
            className="text-[#002B5C] text-xs tracking-widest mb-4 uppercase font-semibold"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Direct Contact
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[#6B7A99] text-xs mb-1">メール</p>
              <a
                href="mailto:keio.kempo1@gmail.com"
                className="text-[#2D3748] text-sm hover:text-[#C41E3A] transition-colors"
              >
                keio.kempo1@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[#6B7A99] text-xs mb-1">Instagram DM</p>
              <a
                href="https://www.instagram.com/keio_kempo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D3748] text-sm hover:text-[#C41E3A] transition-colors"
              >
                @keio_kempo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#EDE7D9] rounded-xl border border-[#D4C9B8] p-6">
          <h3
            className="text-[#002B5C] text-xs tracking-widest mb-3 uppercase font-semibold"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Practice Visit
          </h3>
          <p
            className="text-[#6B7A99] text-xs"
            style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.95 }}
          >
            事前連絡なしでの見学も歓迎です。練習日に武道場へ直接お越しください。
          </p>
        </div>
      </div>
    </div>
  );
}

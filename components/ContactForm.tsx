"use client";

import { useState } from "react";

interface FormData {
  name: string;
  faculty: string;
  email: string;
  type: "見学" | "体験入部" | "その他";
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    faculty: "",
    email: "",
    type: "体験入部",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
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
          お問い合わせありがとうございます
        </h3>
        <p
          className="text-[#6B7A99] text-sm"
          style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.95 }}
        >
          内容を確認の上、2〜3日以内にご連絡いたします。
          <br />
          お急ぎの場合はInstagramのDMまたはメールにてご連絡ください。
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#FAF7F0] border border-[#D4C9B8] text-[#2D3748] px-4 py-3 text-sm focus:outline-none focus:border-[#002B5C] focus:ring-2 focus:ring-[#002B5C]/10 transition-all duration-300 rounded-lg placeholder-[#B0A090]";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
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
                  name="type"
                  value={t}
                  checked={form.type === t}
                  onChange={() => setForm({ ...form, type: t })}
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

        <button
          type="submit"
          className="group relative w-full sm:w-auto px-8 py-4 bg-[#C41E3A] text-white font-bold text-sm tracking-widest overflow-hidden rounded-lg"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-500 ease-out" />
          <span className="relative z-10">送信する</span>
        </button>
      </form>

      {/* 右側：直接連絡先 */}
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
                href="mailto:keio.kempo@example.com"
                className="text-[#2D3748] text-sm hover:text-[#C41E3A] transition-colors"
              >
                keio.kempo@example.com
              </a>
            </div>
            <div>
              <p className="text-[#6B7A99] text-xs mb-1">Instagram DM</p>
              <a
                href="https://instagram.com"
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

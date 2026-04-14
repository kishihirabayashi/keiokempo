import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1
          className="text-3xl sm:text-4xl font-black text-[#F5F0E8] mb-10"
          style={{ fontFamily: "var(--font-noto-serif-jp)" }}
        >
          プライバシーポリシー
        </h1>
        <div className="space-y-8 text-[#C8C0B0] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
          <section>
            <h2 className="text-[#F5F0E8] font-bold text-lg mb-3"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
              1. 個人情報の取り扱いについて
            </h2>
            <p>
              慶應義塾體育會拳法部（以下「当部」）は、お問い合わせフォーム等を通じてご提供いただいた個人情報を、
              お問い合わせへの対応・入部に関するご連絡の目的にのみ使用します。
            </p>
          </section>
          <section>
            <h2 className="text-[#F5F0E8] font-bold text-lg mb-3"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
              2. 個人情報の第三者提供
            </h2>
            <p>
              当部は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>
          <section>
            <h2 className="text-[#F5F0E8] font-bold text-lg mb-3"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
              3. お問い合わせ
            </h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、
              <a href="mailto:keio.kempo@example.com" className="text-[#C41E3A] hover:underline">
                keio.kempo@example.com
              </a>
              までご連絡ください。
            </p>
          </section>
          <p className="text-[#555] text-xs">
            制定日：{new Date().getFullYear()}年4月1日
          </p>
        </div>
      </div>
    </div>
  );
}

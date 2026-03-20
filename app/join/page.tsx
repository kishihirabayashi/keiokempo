import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import type { FAQItem } from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "入部案内",
  description:
    "慶應義塾體育會拳法部への入部案内。大学から始めた部員が8割。未経験者・初心者大歓迎。見学・体験入部随時受付中。",
};

const steps = [
  {
    step: "01",
    title: "見学",
    description:
      "まずは練習を見に来てください。事前連絡不要。動きやすい服装で、三田武道場または日吉記念館武道場へお越しください。",
  },
  {
    step: "02",
    title: "体験入部",
    description:
      "実際に防具を着けて体験できます。基礎練習から丁寧に指導します。複数回参加して雰囲気をつかんでください。",
  },
  {
    step: "03",
    title: "正式入部",
    description:
      "入部を決めたら、主務に申し出てください。入部届と必要書類を提出し、正式な部員として活動を開始します。",
  },
];

const faqs: FAQItem[] = [
  {
    question: "運動経験がなくても大丈夫ですか？",
    answer:
      "はい、まったく問題ありません。現在の部員の8割以上が大学から日本拳法を始めています。基礎から丁寧に指導しますので、格闘技・武道の経験がなくても安心してください。体力に自信がなくても、練習を通じて自然と身についていきます。",
  },
  {
    question: "学業との両立はできますか？",
    answer:
      "はい、可能です。慶應の学業は確かに忙しいですが、多くの部員が学業と拳法を両立しています。試験期間前後は練習頻度を落とす配慮もあります。むしろ、練習で身につく集中力と時間管理能力が、学業にもプラスに働くという声が多いです。",
  },
  {
    question: "費用はどのくらいかかりますか？",
    answer:
      "入部後の月々の部費は数千円程度です。防具（面・胴・グローブ）は初めのうちは部の備品を借りることができるので、入部直後の費用負担は少なく済みます。慣れてきたら自分の防具を購入することを推奨しており、防具一式で10〜15万円程度が目安です（中古品も活用できます）。",
  },
  {
    question: "女子部員はいますか？",
    answer:
      "はい、女子部員も活躍しています。選手として試合に出場するメンバーもいますし、マネージャーとして部を支えるメンバーもいます。女子の体験入部も歓迎しており、先輩女子部員が丁寧にサポートします。",
  },
  {
    question: "マネージャーの募集もしていますか？",
    answer:
      "はい、マネージャーも積極的に募集しています。試合の記録・管理、遠征のサポート、SNS運営など、部の活動を多方面から支える役割です。武道に興味があるけれど競技はちょっと…という方も大歓迎です。",
  },
  {
    question: "他のサークルや部活との掛け持ちはできますか？",
    answer:
      "体育会に所属するため、掛け持ちは原則として難しいです。ただし、文化系サークルとの両立は認められることが多いです。詳しくは見学の際に直接ご相談ください。",
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* ヒーロービジュアル */}
      <div className="relative bg-[#EDE7D9] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
          }}
        />
        <div className="absolute right-0 bottom-0 w-1/3 opacity-[0.04] select-none">
          <svg viewBox="0 0 300 400" className="w-full">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              fontSize="200" fill="#002B5C">門</text>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-title-en mb-4">Join Us</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            入部案内
          </h1>
          <p className="text-[#1B2A4A] text-xl font-bold mb-3"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
            大学から始めても、大丈夫。
          </p>
          <p className="text-[#6B7A99] text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            部員の8割以上が大学から日本拳法を始めました。
            未経験者でも、基礎からしっかり指導します。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* 入部の流れ */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">How to Join</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-10"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            入部までの流れ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={step.step} className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-8 relative"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-[#C41E3A] rotate-45 rounded-sm" />
                )}
                <div
                  className="text-[#C41E3A]/20 text-7xl font-black mb-4 leading-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-[#002B5C] font-black text-2xl mb-4"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 練習日程 */}
        <section className="mb-20 bg-[#EDE7D9] rounded-xl border border-[#D4C9B8] p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="section-title-en mb-4">Practice Schedule</p>
              <h2
                className="text-2xl font-black text-[#002B5C] mb-6"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                練習スケジュール
              </h2>
              <div className="space-y-4">
                {[
                  { place: "三田武道場", days: "火・木・土曜日", time: "18:00〜21:00" },
                  { place: "日吉記念館武道場", days: "月・水・金曜日", time: "18:30〜21:30" },
                ].map((s) => (
                  <div key={s.place} className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-[#C41E3A] mt-2 shrink-0 rounded-full" />
                    <div>
                      <p className="text-[#002B5C] font-bold text-sm">{s.place}</p>
                      <p className="text-[#6B7A99] text-xs mt-0.5">{s.days}　{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-title-en mb-4">Cost Guide</p>
              <h2
                className="text-2xl font-black text-[#002B5C] mb-6"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                費用の目安
              </h2>
              <div className="space-y-3">
                {[
                  { item: "部費（月額）", cost: "約3,000〜5,000円" },
                  { item: "防具一式（初年度）", cost: "0円（部の備品を貸出）" },
                  { item: "防具購入（任意）", cost: "10〜15万円程度" },
                  { item: "道着・練習着", cost: "5,000〜10,000円程度" },
                ].map(({ item, cost }) => (
                  <div key={item} className="flex justify-between items-center pb-3 border-b border-[#D4C9B8]">
                    <span className="text-[#6B7A99] text-sm">{item}</span>
                    <span className="text-[#1B2A4A] text-sm font-bold">{cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">FAQ</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            よくある質問
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* お問い合わせフォーム */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Contact</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-4"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            体験入部・お問い合わせ
          </h2>
          <p className="text-[#6B7A99] text-sm mb-8"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            気軽にお問い合わせください。見学・体験入部の希望でも構いません。
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

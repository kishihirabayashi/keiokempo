import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "日本拳法とは",
  description:
    "1932年創始の総合格闘技・日本拳法について。突き・蹴り・投げ・関節技のすべてを許された武道の歴史・ルール・防具を解説。",
};

const comparisons = [
  {
    sport: "空手",
    similarity: "突き・蹴りの技術",
    difference: "日本拳法は防具を着用し、フルコンタクトで投げ・関節技も許可",
  },
  {
    sport: "柔道",
    similarity: "投げ技・関節技の要素",
    difference: "日本拳法は打撃（突き・蹴り）も組み合わせた総合武道",
  },
  {
    sport: "ボクシング",
    similarity: "グローブを使用した打撃",
    difference: "日本拳法は全身への蹴り・投げ・関節技も技術の一部",
  },
  {
    sport: "MMA（総合格闘技）",
    similarity: "打・投・関節の総合性",
    difference: "日本拳法は防具着用で安全性を確保しつつ総合技術を鍛錬",
  },
];

export default function AboutKempoPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* ヘッダービジュアル */}
      <div className="relative bg-[#F2F0EB] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
          }}
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 vertical-text text-[#002B5C]/[0.06] text-8xl font-black select-none"
          style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          拳法
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-title-en mb-4">What is Nippon Kempo?</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            日本拳法とは
          </h1>
          <p className="text-[#6B7A99] text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            突き、蹴り、投げ、関節技。すべてを許された武道がある。
            防具を纏い、拳ひとつで相手と向き合う——それが日本拳法。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* 歴史 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">History</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-6"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                1932年、澤山宗海が創始
              </h2>
              <div className="space-y-4 text-[#1B2A4A] leading-relaxed"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                <p>
                  日本拳法は1932年（昭和7年）、澤山宗海（さわやまむねとし）によって大阪で創始された日本発祥の総合武道です。
                  空手・柔道・ボクシングなど様々な格闘技の長所を融合させ、
                  「真の実戦性を持つ総合武道」として体系化されました。
                </p>
                <p>
                  防具（面・胴・グローブ）を着用してフルコンタクトで戦うスタイルは、
                  安全性を担保しながら実戦に近い技術を磨くことを可能にしました。
                  この革新的なアプローチが、日本拳法を他の武道と一線を画するものにしています。
                </p>
                <p>
                  戦後は全国に普及し、現在では自衛隊・警察・海上保安庁などの
                  実務機関でも採用されています。大学スポーツとしても盛んで、
                  全国の主要大学に部が存在しています。
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-[#E8DFD0] p-6"
              style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
              <h3 className="text-[#C41E3A] text-sm tracking-widest mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}>TIMELINE</h3>
              <div className="space-y-5">
                {[
                  { year: "1932", event: "澤山宗海が大阪で日本拳法を創始" },
                  { year: "1947", event: "全日本拳法連盟（現：日本拳法全国連盟）設立" },
                  { year: "1950年代", event: "大学への普及開始。各地に大学拳法部が誕生" },
                  { year: "1960年代", event: "自衛隊・警察での採用が本格化" },
                  { year: "現在", event: "全国で約3万人の競技者が活動" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="shrink-0 w-20 text-[#C41E3A] text-sm font-bold"
                      style={{ fontFamily: "var(--font-cormorant)" }}>
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-1.5 -ml-1 float-left mr-3" />
                      <p className="text-[#1B2A4A] text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ルール */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Rules</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            競技ルールの概要
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "試合形式",
                icon: "⚔️",
                content: "3本勝負制。先に2本先取した側が勝者。試合時間は通常3〜5分で、時間内に決着がつかない場合は延長戦へ。",
              },
              {
                title: "有効技",
                icon: "👊",
                content: "突き・蹴り・投げ・関節技のすべてが有効。面（頭部）・胴（胴体）への突き蹴りが主な攻撃ポイント。投げや関節技でも「一本」が取れる。",
              },
              {
                title: "防具",
                icon: "🛡️",
                content: "面（剣道の面に類似）、胴（ボクシング用グローブ付き）、その他の防具を着用。フルコンタクトでも安全に競技できる設計。",
              },
              {
                title: "勝敗の決め方",
                icon: "🏆",
                content: "「一本」（有効な打撃・投げ・関節技）で1本ずつ加算。2本先取か、時間終了時点での本数差で勝敗を決定。",
              },
              {
                title: "団体戦",
                icon: "👥",
                content: "複数名が出場する団体戦形式。大学対抗戦では通常5〜7名で構成。チーム全体の本数で勝敗を決める。",
              },
              {
                title: "礼節",
                icon: "🙏",
                content: "試合前後の礼を重んじる武道精神が基本。技術だけでなく、人格の陶冶も日本拳法の重要な柱。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8DFD0] p-6 hover:border-[#C41E3A]/30 transition-colors duration-200"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3
                  className="text-[#002B5C] font-bold text-lg mb-3"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 防具説明 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Equipment</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            防具について
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "面",
                description:
                  "剣道の面に類似した頭部保護具。格子状の鉄格子で顔面を保護しながら視界を確保。突き・蹴りを受けても安全。",
              },
              {
                name: "胴",
                description:
                  "胴体を保護するプロテクター。ボクシング用グローブが一体化しており、打撃の攻守両方を担う独特の構造。",
              },
              {
                name: "その他",
                description:
                  "拳サポーター・脛サポーター・マウスピースなど。初心者は部の備品を借用できるため、入部直後の費用負担は少ない。",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-[#E8DFD0] p-6"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <div className="w-full aspect-video bg-[#F2F0EB] rounded-lg border border-[#E8DFD0] mb-4 flex items-center justify-center">
                  <span className="text-[#C8D0DC] text-4xl">🥋</span>
                </div>
                <h3
                  className="text-[#002B5C] font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {item.name}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 他武道との比較 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Comparison</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            他格闘技との違い
          </h2>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#E8DFD0]"
            style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-[3px]" style={{ borderColor: 'rgba(196,30,58,0.15)' }}>
                  <th className="text-left py-4 px-5 text-[#C41E3A] font-normal text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-cormorant)" }}>格闘技</th>
                  <th className="text-left py-4 px-5 text-[#C41E3A] font-normal text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-cormorant)" }}>共通点</th>
                  <th className="text-left py-4 px-5 text-[#C41E3A] font-normal text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-cormorant)" }}>日本拳法との違い</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c, i) => (
                  <tr key={i} className="border-b border-[#E8DFD0] hover:bg-[#F2F0EB] transition-colors duration-150">
                    <td className="py-4 px-5 font-bold text-[#002B5C]"
                      style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                      {c.sport}
                    </td>
                    <td className="py-4 px-5 text-[#6B7A99]"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                      {c.similarity}
                    </td>
                    <td className="py-4 px-5 text-[#1B2A4A]"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                      {c.difference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 実用性 */}
        <section className="bg-white rounded-xl border border-[#E8DFD0] p-8 lg:p-12 mb-12"
          style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="section-title-en mb-4">Practical Use</p>
              <h2
                className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-4"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                実用武道として
              </h2>
              <p className="text-[#1B2A4A] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                日本拳法は自衛隊・警察・海上保安庁など、実際の護身・逮捕術として採用されている実用武道です。
                そのフルコンタクトの実戦的な技術体系が、各機関から高い評価を受けています。
              </p>
              <div className="flex flex-wrap gap-3">
                {["自衛隊", "警察", "海上保安庁", "大学スポーツ"].map((org) => (
                  <span key={org} className="px-3 py-1 border border-[#C41E3A]/40 text-[#C41E3A] text-xs rounded-full"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                    {org}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center select-none">
              <span className="vertical-text text-[#002B5C]/[0.06] text-8xl font-black block"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                武
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B7A99] text-sm mb-6"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            日本拳法に興味が湧いたら、まずは体験してみてください。
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C41E3A] text-white font-black text-sm tracking-widest hover:bg-[#a01530] transition-colors duration-200 rounded-md"
          >
            入部案内・体験申し込み
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

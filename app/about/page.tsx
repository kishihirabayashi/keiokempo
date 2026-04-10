import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "部の紹介",
  description:
    "慶應拳法部について。1953年創部の歴史、蝮谷拳法道場（日吉キャンパス）での練習、年間スケジュール、指導体制をご紹介。部費¥10,000/年、初心者歓迎。",
  alternates: { canonical: "https://keiokempo.vercel.app/about" },
  openGraph: {
    title: "部の紹介 | 慶應義塾體育會拳法部",
    description: "慶應拳法部について。1953年創部の歴史、蝮谷拳法道場での練習、年間スケジュールをご紹介。",
    url: "https://keiokempo.vercel.app/about",
  },
};

const schedule = [
  { month: "1月", events: ["鏡開き大会", "冬合宿", "始動式"] },
  { month: "2月", events: ["強化練習期間"] },
  { month: "3月", events: ["通い合宿", "春合宿", "新歓準備"] },
  { month: "4月", events: ["春季新歓体験入部", "第1回 本部昇段級審査会"] },
  { month: "5月", events: ["東日本大学リーグ戦", "矢野杯争奪 東日本学生拳法個人選手権（5/31予定）"] },
  { month: "6月", events: ["全国大学選抜選手権（6/21予定）", "第2回 本部昇段級審査会"] },
  { month: "7月", events: ["夏合宿（4泊5日）"] },
  { month: "8月", events: ["オープン大会参加"] },
  { month: "9月", events: ["夏合宿", "第3回 本部昇段級審査会"] },
  { month: "10月", events: ["東日本学生拳法選手権（10/11予定）", "全日本学生拳法個人選手権（10/18予定）", "秋季部内試合", "OB戦"] },
  { month: "11月", events: ["早慶戦", "全日本学生拳法選手権"] },
  { month: "12月", events: ["全日本学生拳法選手権（12/6予定）", "第4回 本部昇段級審査会", "忘年会・引退式（4年生）"] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* ヘッダービジュアル */}
      <div className="relative bg-[#EDE7D9] pt-36 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[10px]"
          style={{
            background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
            boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-title-en mb-4">About the Club</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            部の紹介
          </h1>
          <p className="text-[#6B7A99] text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            慶應義塾體育會拳法部について
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* 沿革・歴史 */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">History</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2
                className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-6"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                慶應義塾體育會拳法部の歩み
              </h2>
              <div className="space-y-4 text-[#2D3748] leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                <p>
                  慶應義塾體育會拳法部は1953年（昭和28年）に創部されました。
                  以来、「文武両道」の慶應精神を体現する部として、
                  多くの優秀な選手を輩出してきました。
                </p>
                <p>
                  日本拳法とは、防具とグローブを着用して打撃技・投げ技・寝技を駆使して勝敗を競い合う競技武道です。
                  防具をつけているので安全性は確保されており、経験豊富なコーチ陣によるサポート体制も充実しています。
                  主な実績として、東日本大学選手権大会（形部門）優勝、東日本学生個人選手権大会 優勝、
                  東日本大学新人戦 優勝など、多数の上位入賞を果たしています。
                </p>
                <p>
                  卒業生は「三田拳法会」としてOB会を組織し、
                  現役部員への指導・支援を継続的に行っています。
                  社会に出てからも繋がり続ける強固なネットワークは、
                  慶應拳法部の大きな財産のひとつです。
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6 h-full"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <h3 className="text-[#C41E3A] text-xs tracking-widest mb-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}>CLUB DATA</h3>
                <dl className="space-y-4">
                  {[
                    { dt: "所属", dd: "慶應義塾體育會" },
                    { dt: "創部", dd: "1953年（昭和28年）" },
                    { dt: "種目", dd: "日本拳法" },
                    { dt: "主な活動拠点", dd: "蝮谷拳法道場（神奈川県横浜市港北区日吉4-16-1、tel. 045-563-5904）" },
                    { dt: "合宿", dd: "年2回（3月・9月）" },
                    { dt: "部費", dd: "¥10,000/年" },
                    { dt: "部員数", dd: "26名（男女）" },
                    { dt: "OB会", dd: "三田拳法会" },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="flex gap-4">
                      <dt className="shrink-0 text-[#A0AAB8] text-xs w-28"
                        style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                        {dt}
                      </dt>
                      <dd className="text-[#2D3748] text-sm"
                        style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                        {dd}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 練習場所・時間 */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Practice</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            練習場所・練習時間
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: "蝮谷拳法道場",
                campus: "日吉キャンパス｜神奈川県横浜市港北区日吉4-16-1",
                items: [
                  { label: "練習日", value: "平日（火・水・木・金）＋ 日曜日" },
                  { label: "時間", value: "平日 18:00〜20:30 ／ 日曜 10:30〜13:00" },
                  { label: "参加条件", value: "水木はどちらか参加。日曜日参加必須。" },
                ],
              },
              {
                name: "活動費用",
                campus: "Activity Cost",
                items: [
                  { label: "部費", value: "¥10,000/年" },
                  { label: "合宿", value: "年2回（3月・9月）" },
                  { label: "その他", value: "道着代等（詳細は入部後にご案内）" },
                ],
              },
            ].map((place) => (
              <div key={place.name} className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <h3
                  className="text-[#002B5C] font-bold text-xl mb-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {place.name}
                </h3>
                <p className="text-[#C41E3A] text-xs tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {place.campus}
                </p>
                <dl className="space-y-2">
                  {place.items.map(({ label, value }) => (
                    <div key={label} className="flex gap-3">
                      <dt className="text-[#A0AAB8] text-xs w-16 shrink-0">{label}</dt>
                      <dd className="text-[#2D3748] text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* 年間スケジュール */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Annual Schedule</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            年間スケジュール
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {schedule.map(({ month, events }) => (
              <div key={month} className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-4"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.04)' }}>
                <div className="text-[#C41E3A] font-bold text-sm mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {month}
                </div>
                <ul className="space-y-1">
                  {events.map((e) => (
                    <li key={e} className="text-[#6B7A99] text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                      · {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 指導体制 */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <p className="section-title-en">Coaching Staff</p>
            <div className="flex-1 h-[4px]" style={{ background: 'linear-gradient(to right, rgba(196,30,58,0.65), rgba(196,30,58,0.15), transparent)' }} />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-8"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            指導体制
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                role: "部長",
                name: "石塚 壮太郎",
                dept: "",
                note: "",
              },
              {
                role: "監督",
                name: "岡田 勇介",
                dept: "",
                note: "",
              },
              {
                role: "コーチ",
                name: "吉澤 斗吾",
                dept: "",
                note: "",
              },
            ].map((staff) => (
              <div key={staff.role} className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6"
                style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.06)' }}>
                <span className="inline-block px-2 py-0.5 border border-[#C41E3A]/40 text-[#C41E3A] text-xs rounded-full mb-3">
                  {staff.role}
                </span>
                <h3
                  className="text-[#002B5C] font-bold text-xl mb-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  {staff.name}
                </h3>
                <p className="text-[#A0AAB8] text-xs mb-3">{staff.dept}</p>
                <p className="text-[#6B7A99] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                  {staff.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OB会 */}
        <section className="bg-[#EDE7D9] rounded-xl border border-[#D4C9B8] p-8 lg:p-12 mb-12">
          <p className="section-title-en mb-4">Alumni</p>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-4"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            OB会「三田拳法会」
          </h2>
          <p className="text-[#2D3748] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            卒業生は「三田拳法会」として組織され、定期的な親睦会や現役部員への
            指導・支援活動を行っています。慶應のネットワークと拳法を通じて
            生涯にわたって繋がれるのが、この部の大きな魅力のひとつです。
            各界で活躍するOBが多数在籍しており、就職活動でのサポートも充実しています。
          </p>
        </section>

        {/* SNS・入部情報 */}
        <section className="bg-[#EDE7D9] rounded-xl border border-[#D4C9B8] p-8 lg:p-12 mb-12">
          <p className="section-title-en mb-4">Contact & SNS</p>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#002B5C] mb-4"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            お問い合わせ・SNS
          </h2>
          <p className="text-[#2D3748] leading-relaxed mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            入部は年中365日受け付けています。興味を持ったタイミングでいつでもお気軽にご連絡ください。
            SNSのDMやフォームからのご連絡も歓迎します。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/keio_kempo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] px-5 py-3 transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:border-[#C41E3A]/30"
              style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.04)' }}
            >
              <p className="text-[#A0AAB8] text-xs mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>Instagram</p>
              <p className="text-[#002B5C] font-bold text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                @keio_kempo
              </p>
            </a>
            <a
              href="https://x.com/KeioNikken"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] px-5 py-3 transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:border-[#002B5C]/30"
              style={{ boxShadow: '0 2px 8px rgba(27,42,74,0.04)' }}
            >
              <p className="text-[#A0AAB8] text-xs mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>X (Twitter)</p>
              <p className="text-[#002B5C] font-bold text-sm" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                @KeioNikken
              </p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/join"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C41E3A] text-white font-black text-sm tracking-widest hover:bg-[#a01530] transition-colors duration-300 rounded-md"
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

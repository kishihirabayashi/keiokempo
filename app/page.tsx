import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import ParallaxBand from "@/components/ParallaxBand";
import { getAllNews } from "@/lib/getNews";

const STATS = [
  { end: 93,  suffix: "年", label: "創部からの歴史",   prefix: "" },
  { end: 30,  suffix: "名", label: "現役部員数",       prefix: "約" },
  { end: 80,  suffix: "%",  label: "大学から始めた部員", prefix: "" },
  { end: 5,   suffix: "冠", label: "直近の主要タイトル", prefix: "" },
];

const ATMOSPHERE = [
  {
    num: "01",
    label: "練習後のひとコマ",
    desc: "汗を流した後の一言に、本音が出る。",
    colorFrom: "#D4C8B4",
    colorTo: "#C5B8A4",
  },
  {
    num: "02",
    label: "みんなで飯",
    desc: "ご飯を一緒に食べるだけで、仲間になれる。",
    colorFrom: "#D8CCBA",
    colorTo: "#C9BDA8",
  },
  {
    num: "03",
    label: "合宿の集合写真",
    desc: "4泊5日の夏合宿、笑顔が絶えない。",
    colorFrom: "#DCCFC0",
    colorTo: "#CEC0B2",
  },
  {
    num: "04",
    label: "初心者歓迎の体験会",
    desc: "はじめての防具、はじめての一本。",
    colorFrom: "#D0C5B0",
    colorTo: "#C2B5A0",
  },
];

const NEXT_MATCH = {
  opponent: "早稲田大学",
  date: "2025年4月20日（日）",
  time: "13:00",
  venue: "慶應義塾大学 日吉記念館武道場",
  event: "関東学生拳法春季大会",
};

export default function HomePage() {
  const news = getAllNews().slice(0, 3);

  return (
    <>
      {/* ── ヒーロー ── */}
      <HeroSection />

      {/* ── 部の雰囲気（ヒーロー直後） ── */}
      <section className="bg-[#FAF7F0] py-24 lg:py-32 relative overflow-hidden">
        {/* 巨大bg watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <p
            className="font-black leading-none text-[#002B5C]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(8rem, 22vw, 22rem)",
              opacity: 0.025,
              letterSpacing: "-0.02em",
            }}
          >
            PEOPLE
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14">
            <p
              className="text-[#C41E3A] text-xs tracking-[0.55em] uppercase mb-4 font-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Club Atmosphere
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002B5C] leading-tight mb-5"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              強さだけじゃない。
            </h2>
            <p
              className="text-[#6B7A99] text-base max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              激しく戦う拳法部が、なぜこんなに温かいのか。
              <br className="hidden sm:block" />
              ここにいる人たちを見れば、わかる。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ATMOSPHERE.map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.1}>
                <div
                  className="group bg-[#FAF7F0] rounded-2xl overflow-hidden card-lift"
                  style={{
                    boxShadow:
                      "0 2px 12px rgba(27,42,74,0.08), 0 0 0 1px rgba(27,42,74,0.05)",
                  }}
                >
                  {/* 写真エリア */}
                  <div className="relative h-52 overflow-hidden rounded-t-2xl">
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.colorFrom} 0%, ${item.colorTo} 100%)`,
                      }}
                    />
                    {/* 番号装飾 */}
                    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                      <span
                        className="text-[#2D3748]/[0.08] font-black"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "9rem",
                          lineHeight: 1,
                        }}
                      >
                        {item.num}
                      </span>
                    </div>
                    {/* カメラアイコン */}
                    <div className="absolute inset-0 flex items-end p-4">
                      <svg
                        className="w-8 h-8 text-[#B0A090]/50 group-hover:text-[#8B7870]/70 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-[#002B5C]/0 group-hover:bg-[#002B5C]/20 transition-colors duration-400 rounded-t-2xl" />
                  </div>
                  {/* テキスト */}
                  <div className="p-5">
                    <p
                      className="text-[#C41E3A] text-[0.6rem] tracking-[0.45em] uppercase mb-2 font-light"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[#2D3748] text-sm font-bold leading-snug"
                      style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* 見学誘導リンク */}
          <AnimatedSection delay={0.4} className="mt-10 text-center">
            <Link
              href="/join"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-[#002B5C] text-[#002B5C] text-sm tracking-[0.18em] overflow-hidden rounded-md"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <span className="absolute inset-0 bg-[#002B5C] -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" aria-hidden="true" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">まずは雰囲気を見に来てください</span>
              <svg className="relative z-10 w-4 h-4 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <AnimatedSection className="bg-[#EDE7D9] py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#D4C9B8]">
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center py-10 px-4">
                <p
                  className="number-glow font-black leading-none mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(4rem, 7.5vw, 8rem)",
                  }}
                >
                  {s.prefix && (
                    <span className="text-[#6B7A99]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>
                      {s.prefix}
                    </span>
                  )}
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p
                  className="text-[#6B7A99] text-xs tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── パララックス帯 #1 ── */}
      <ParallaxBand
        height="200px"
        bgStyle={{
          backgroundImage:
            "url('/images/hero/hero.jpg'), linear-gradient(160deg, #001830 0%, #002B5C 55%, #001830 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
        }}
        overlayStyle={{ background: "rgba(0,12,30,0.82)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <p
            className="font-black leading-none text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(6rem, 20vw, 18rem)",
              opacity: 0.06,
              letterSpacing: "-0.02em",
            }}
          >
            KEMPO
          </p>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <p
            className="text-white/45 text-xs tracking-[0.7em] uppercase"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Keio University Athletic Association · Nippon Kempo
          </p>
        </div>
      </ParallaxBand>

      {/* ── NEWS ── */}
      <section className="bg-[#FAF7F0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between gap-4 mb-12">
            <SectionHeading en="News" jp="最新情報" />
            <Link
              href="/news"
              className="text-[#6B7A99] hover:text-[#C41E3A] text-xs tracking-[0.35em] transition-colors duration-300 pb-1 shrink-0"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              ALL NEWS →
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.12}>
                <NewsCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 日本拳法とは（非対称レイアウト） ── */}
      <section className="bg-[#EDE7D9] py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

            {/* 左: 縦書き大文字 */}
            <AnimatedSection
              distance={100}
              className="lg:col-span-4 flex items-center justify-center lg:justify-start mb-8 lg:mb-0"
            >
              <div className="relative select-none flex items-center lg:items-start">
                <p
                  aria-hidden="true"
                  className="font-black text-[#002B5C]/[0.06] leading-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-noto-serif-jp)",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    fontSize: "clamp(5rem, 14vw, 11rem)",
                    letterSpacing: "-0.02em",
                    userSelect: "none",
                  }}
                >
                  日本拳法
                </p>
                <div
                  className="absolute left-0 top-0 bottom-0 w-[5px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, #C41E3A 0%, #C41E3A 55%, rgba(196,30,58,0.3) 85%, transparent 100%)",
                  }}
                />
              </div>
            </AnimatedSection>

            {/* 右: テキストコンテンツ */}
            <AnimatedSection delay={0.15} className="lg:col-span-8 lg:pl-12 xl:pl-20 flex flex-col justify-center">
              <div className="max-w-xl">
                <p
                  className="text-[#C41E3A] text-xs tracking-[0.45em] uppercase mb-5 font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  What is Nippon Kempo?
                </p>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002B5C] mb-8 leading-snug"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  突き・蹴り・投げ・<br className="hidden sm:block" />関節技。すべてを許された武道。
                </h2>

                <div className="space-y-4 mb-10">
                  <p
                    className="text-[#2D3748] leading-relaxed text-base"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    防具を纏い、拳ひとつで相手と向き合う——それが日本拳法。
                    打撃・組み技・寝技を融合した日本発祥の総合武道であり、
                    競技としての激しさと礼節の精神を兼ね備えています。
                  </p>
                  <p
                    className="text-[#6B7A99] leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    1932年、澤山宗海が創始。自衛隊・警察でも採用される実用性を誇りながら、
                    礼と道を重んじる武道精神を脈々と受け継いできました。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-10">
                  {["打撃技（突き・蹴り）", "組み技・投げ技", "関節技・絞め技", "全身防具スタイル"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-[#C41E3A] rounded-full shrink-0" />
                        <span
                          className="text-[#2D3748] text-xs"
                          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                        >
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <Link
                  href="/about-kempo"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-[#002B5C] text-[#002B5C] text-sm tracking-[0.2em] overflow-hidden rounded-md"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  <span className="absolute inset-0 bg-[#002B5C] -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" aria-hidden="true" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">日本拳法をもっと知る</span>
                  <svg className="relative z-10 w-4 h-4 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── インパクト数字（1932 · 30名 · 80%） ── */}
      <section className="bg-[#002B5C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-[#002B5C] to-[#001A3A]" />
        {/* 装飾 */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <p
            className="font-black text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(10rem, 35vw, 38rem)",
              opacity: 0.03,
              letterSpacing: "-0.05em",
            }}
          >
            拳
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { display: "1932", unit: "年", label: "慶應義塾体育会拳法部 創部" },
              { display: "約30", unit: "名", label: "現役部員（男女）" },
              { display: "80",  unit: "%",  label: "大学から始めた部員" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.12} className="text-center py-20 lg:py-24 px-8">
                <p
                  className="font-black leading-none text-white mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(5rem, 13vw, 12rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.display}
                  <span
                    className="text-[#C41E3A]"
                    style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                  >
                    {item.unit}
                  </span>
                </p>
                <p
                  className="text-white/45 text-xs tracking-[0.4em]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT MATCH ── */}
      <AnimatedSection className="bg-[#F5F0E6] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading en="Next Match" jp="次戦情報" className="mb-10" />
          <div
            className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ boxShadow: "0 2px 12px rgba(27,42,74,0.07)" }}
          >
            <div>
              <p
                className="text-[#C41E3A] text-xs tracking-[0.3em] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {NEXT_MATCH.event}
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5C] mb-5"
                style={{ fontFamily: "var(--font-noto-serif-jp)" }}
              >
                VS {NEXT_MATCH.opponent}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#6B7A99]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C41E3A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{NEXT_MATCH.date} {NEXT_MATCH.time}〜</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C41E3A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-noto-sans-jp)" }}>{NEXT_MATCH.venue}</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <Link
                href="/results"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#002B5C]/30 text-[#002B5C] text-sm tracking-[0.2em] overflow-hidden rounded-md"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                <span className="absolute inset-0 bg-[#002B5C]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" aria-hidden="true" />
                <span className="relative z-10">過去の戦績を見る</span>
                <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── GALLERY ── */}
      <section className="bg-[#EDE7D9] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeading en="Gallery" jp="活動写真" />
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="aspect-square rounded-xl overflow-hidden group card-lift relative photo-placeholder">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 select-none pointer-events-none">
                    <svg className="w-10 h-10 text-[#B0A090] group-hover:text-[#9A8878] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#B0A090] text-[0.6rem] tracking-[0.5em] uppercase" style={{ fontFamily: "var(--font-cormorant)" }}>PHOTO</span>
                  </div>
                  <div className="absolute inset-0 bg-[#002B5C]/0 group-hover:bg-[#002B5C]/10 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── パララックス写真帯CTA ── */}
      <ParallaxBand
        height="500px"
        bgStyle={{
          backgroundImage:
            "url('/images/hero/hero.jpg'), linear-gradient(160deg, #C8D8E8 0%, #B0C4D8 50%, #C0D0E0 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
        overlayStyle={{ background: "rgba(0,43,92,0.76)" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#002B5C]/30 via-transparent to-[#001830]/55"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p
            className="text-white/55 text-xs tracking-[0.55em] uppercase mb-6 font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Experience Nippon Kempo
          </p>
          <h2
            className="font-black text-white leading-tight mb-8"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            }}
          >
            道場で、その拳を試せ。
          </h2>
          <p
            className="text-white/70 text-sm leading-relaxed mb-10 max-w-md"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            見学無料・手ぶらでOK。まずは一度、道場に足を運んでみてください。
          </p>
          <Link
            href="/join"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#C41E3A] text-white font-black text-sm tracking-[0.22em] overflow-hidden rounded-md"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-500 ease-out" aria-hidden="true" />
            <span className="relative z-10">まずは道場へ。</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </ParallaxBand>

      {/* ── 入部案内CTA（慶應紺・フッター直前） ── */}
      <section className="bg-[#002B5C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-[#002B5C] to-[#001A3A]" />
        {/* 上辺ライン */}
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#002B5C] via-[#C41E3A] to-[#002B5C]" />
        {/* 装飾watermark */}
        <div
          className="absolute right-[-6%] top-0 bottom-0 w-[55%] pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <p
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 font-black text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(12rem, 30vw, 28rem)",
              opacity: 0.04,
              letterSpacing: "-0.05em",
            }}
          >
            JOIN
          </p>
        </div>

        <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-36">
          <p
            className="text-white/40 text-xs tracking-[0.65em] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            JOIN US · KEIO KEMPO
          </p>
          <h2
            className="font-black text-white mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
            }}
          >
            まずは道場へ。
          </h2>
          <p
            className="text-white/65 text-base mb-14 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            未経験者歓迎。部員の8割が大学から日本拳法を始めました。
            <br className="hidden sm:block" />
            見学だけでも大丈夫。強さと仲間は、ここにある。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/join"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-[#C41E3A] text-white font-black text-sm tracking-[0.22em] overflow-hidden rounded-md"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-500 ease-out" aria-hidden="true" />
              <span className="relative z-10">入部案内を見る</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-2 px-10 py-6 overflow-hidden text-white font-bold text-sm tracking-[0.18em] rounded-md border border-white/25"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <span className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" aria-hidden="true" />
              <span className="relative z-10">部の紹介を見る</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

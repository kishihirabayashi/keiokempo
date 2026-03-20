import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { getAllNews } from "@/lib/getNews";

const STATS = [
  { end: 93,  suffix: "年", label: "創部からの歴史",   prefix: "" },
  { end: 30,  suffix: "名", label: "現役部員数",       prefix: "約" },
  { end: 80,  suffix: "%",  label: "大学から始めた部員", prefix: "" },
  { end: 5,   suffix: "冠", label: "直近の主要タイトル", prefix: "" },
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
      {/* ヒーロー */}
      <HeroSection />

      {/* ── STATS ── */}
      <AnimatedSection className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <p className="number-glow font-black leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  }}>
                  <span className="text-[#6B7A99] text-xl">{s.prefix}</span>
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-[#6B7A99] text-xs tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── NEWS ── */}
      <section className="bg-[#F2F0EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between gap-4 mb-12">
            <SectionHeading en="News" jp="最新情報" />
            <Link
              href="/news"
              className="text-[#6B7A99] hover:text-[#C41E3A] text-xs tracking-[0.35em] transition-colors duration-200 pb-1 shrink-0"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              ALL NEWS →
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <NewsCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 日本拳法とは（非対称レイアウト） ── */}
      <section className="bg-[#E8DFD0] py-16 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

            {/* 左: 縦書き大文字 */}
            <AnimatedSection distance={80} className="lg:col-span-4 flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
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
                <div className="absolute left-0 top-0 bottom-0 w-[5px]" style={{ background: 'linear-gradient(to bottom, #C41E3A 0%, #C41E3A 55%, rgba(196,30,58,0.3) 85%, transparent 100%)' }} />
              </div>
            </AnimatedSection>

            {/* 右: テキストコンテンツ */}
            <AnimatedSection delay={0.2} className="lg:col-span-8 lg:pl-12 xl:pl-20 flex flex-col justify-center">
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
                  <p className="text-[#1B2A4A] leading-relaxed text-base"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                    防具を纏い、拳ひとつで相手と向き合う——それが日本拳法。
                    打撃・組み技・寝技を融合した日本発祥の総合武道であり、
                    競技としての激しさと礼節の精神を兼ね備えています。
                  </p>
                  <p className="text-[#6B7A99] leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                    1932年、澤山宗海が創始。自衛隊・警察でも採用される実用性を誇りながら、
                    礼と道を重んじる武道精神を脈々と受け継いできました。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-10">
                  {["打撃技（突き・蹴り）", "組み技・投げ技", "関節技・絞め技", "全身防具スタイル"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-[#C41E3A] rounded-full shrink-0" />
                      <span className="text-[#1B2A4A] text-xs" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about-kempo"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#002B5C] text-[#002B5C] text-sm tracking-[0.2em] hover:bg-[#002B5C] hover:text-white transition-all duration-300 rounded-md"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  <span>日本拳法をもっと知る</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── NEXT MATCH ── */}
      <AnimatedSection className="bg-[#FAFAF7] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading en="Next Match" jp="次戦情報" className="mb-10" />
          <div className="bg-white rounded-xl border border-[#E8DFD0] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ boxShadow: '0 2px 12px rgba(27,42,74,0.07)' }}>
            <div>
              <p className="text-[#C41E3A] text-xs tracking-[0.3em] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}>
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#002B5C]/30 text-[#002B5C] text-sm tracking-[0.2em] hover:border-[#C41E3A] hover:text-[#C41E3A] transition-all duration-200 rounded-md"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                過去の戦績を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── GALLERY ── */}
      <section className="bg-[#F2F0EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeading en="Gallery" jp="活動写真" />
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="aspect-square bg-[#D8E4EE] rounded-xl flex items-center justify-center overflow-hidden group card-lift">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 border-2 border-[#C0CEDC] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:border-[#002B5C]/40 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#C0CEDC] group-hover:text-[#9AAAB8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#A8B8C8] text-xs" style={{ fontFamily: "var(--font-cormorant)" }}>Photo {i}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 写真帯 CTA（フルワイド） ── */}
      <AnimatedSection distance={30}>
        <section className="relative h-[420px] sm:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 scale-[1.08]"
            style={{
              backgroundImage:
                "url('/images/hero/hero.jpg'), linear-gradient(160deg, #C8D8E8 0%, #B0C4D8 50%, #C0D0E0 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,43,92,0.75)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002B5C]/30 via-transparent to-[#001830]/50" />
          <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <p
              className="text-white/60 text-xs tracking-[0.55em] uppercase mb-6 font-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Experience Nippon Kempo
            </p>
            <h2
              className="font-black text-white leading-tight mb-8"
              style={{
                fontFamily: "var(--font-noto-serif-jp)",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
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
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#C41E3A] text-white font-black text-sm tracking-[0.22em] overflow-hidden hover:bg-[#A01530] transition-colors duration-300 rounded-md"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <span className="relative z-10">まずは道場へ。</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 入部案内CTA ── */}
      <section className="bg-[#C41E3A] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A01530] via-[#C41E3A] to-[#A01530]" />
        <div className="absolute right-[-2%] top-0 bottom-0 w-1/2 opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              fontSize="260" fontFamily="serif" fill="white">拳</text>
          </svg>
        </div>
        <AnimatedSection className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs tracking-[0.45em] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            JOIN US
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            一緒に道場へ来ませんか。
          </h2>
          <p className="text-white/80 text-base mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            未経験者歓迎。部員の8割が大学から日本拳法を始めました。
            まずは見学だけでも大丈夫です。
          </p>
          <Link
            href="/join"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#C41E3A] font-black text-sm tracking-[0.2em] hover:bg-[#F5F0E8] transition-colors duration-200 rounded-md"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            入部案内を見る
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}

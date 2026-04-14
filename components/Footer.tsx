import Link from "next/link";

const siteLinks = [
  { href: "/", label: "トップ" },
  { href: "/about-kempo", label: "日本拳法とは" },
  { href: "/about", label: "部の紹介" },
  { href: "/members", label: "部員紹介" },
  { href: "/results", label: "戦績" },
  { href: "/news", label: "ニュース" },
  { href: "/join", label: "入部案内" },
];

export default function Footer() {
  return (
    <footer className="bg-[#002B5C] relative">
      {/* グラデーションボーダー上部（ページトップと同じ） */}
      <div
        className="absolute top-0 left-0 right-0 h-[10px]"
        style={{
          background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
          boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 左: ロゴ + 説明 */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-[5px] h-12 shrink-0" style={{ background: 'linear-gradient(to bottom, #C41E3A 0%, #C41E3A 60%, #7A1020 100%)' }} />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-white/50 text-xs tracking-widest"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  KEIO UNIVERSITY
                </span>
                <span
                  className="text-white font-bold text-lg tracking-wide"
                  style={{ fontFamily: "var(--font-noto-serif-jp)" }}
                >
                  慶應義塾體育會拳法部
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              突き・蹴り・投げ・関節技。すべてを許された武道、日本拳法。
              慶應義塾體育會に所属し、文武両道を体現する。
            </p>
            <p className="text-white/35 text-xs mt-4">
              蝮谷拳法道場｜神奈川県横浜市港北区日吉4-16-1
            </p>
          </div>

          {/* 中: サイトマップ */}
          <div>
            <h3
              className="text-white/50 text-xs tracking-widest mb-5 uppercase"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Site Map
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t-[2px] border-white/15">
              <a
                href="https://uaa.keio.ac.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200"
              >
                慶應義塾体育会 →
              </a>
            </div>
          </div>

          {/* 右: SNS + 連絡先 */}
          <div>
            <h3
              className="text-white/50 text-xs tracking-widest mb-5 uppercase"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/keio_kempo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/KeioNikken"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E9%AB%94%E8%82%B2%E6%9C%83%E6%8B%B3%E6%B3%95%E9%83%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-white/35 text-xs mb-1">お問い合わせ</p>
              <a
                href="mailto:keio.kempo1@gmail.com"
                className="text-white/65 hover:text-white text-sm transition-colors duration-200"
              >
                keio.kempo1@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 下部 */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/15">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} 慶應義塾體育會拳法部. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              プライバシーポリシー
            </Link>
            <a
              href="https://keionitiken.amebaownd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              旧サイト
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

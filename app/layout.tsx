import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Analytics } from "@vercel/analytics/next";

// 見出し：元のシャープなフォント
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: false,
});

// 本文：Noto Sans JP
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

// 英字ラベル・装飾：Cormorant Garamond
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// キャッチフレーズ専用：Zen Maru Gothic（力強さと丸みを両立）
const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "慶應義塾體育會拳法部 | 日本拳法",
    template: "%s | 慶應義塾體育會拳法部",
  },
  description:
    "慶應義塾體育會拳法部の公式サイト。突き・蹴り・投げ・関節技を許された総合格闘技、日本拳法。初心者大歓迎。練習場所：日吉キャンパス 蝮谷拳法道場。",
  keywords: [
    "慶應義塾",
    "拳法部",
    "日本拳法",
    "体育会",
    "慶應 日本拳法",
    "大学 格闘技",
    "武道",
    "慶應義塾大学",
    "keio",
    "kempo",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "慶應義塾體育會拳法部",
    title: "慶應義塾體育會拳法部 | 日本拳法",
    description:
      "突き・蹴り・投げ・関節技を許された総合格闘技、日本拳法。慶應義塾體育會拳法部公式サイト。",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorantGaramond.variable} ${zenMaruGothic.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#1B2A4A] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  );
}

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

const SITE_URL = "https://keiokempo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "慶應義塾體育會拳法部 | 日本拳法 | Keio Nippon Kempo",
    template: "%s | 慶應義塾體育會拳法部",
  },
  description:
    "慶應義塾體育會拳法部の公式ウェブサイト。1953年創部、日本拳法を通じて心技体を磨く。新入部員募集中。蝮谷拳法道場（日吉キャンパス）にて活動。",
  keywords: [
    "慶應",
    "拳法",
    "日本拳法",
    "慶應拳法部",
    "慶應義塾大学",
    "体育会",
    "武道",
    "格闘技",
    "新歓",
    "慶應義塾",
    "keio",
    "kempo",
    "nippon kempo",
    "日吉",
    "蝮谷",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "慶應義塾體育會拳法部",
    title: "慶應義塾體育會拳法部",
    description:
      "1953年創部。日本拳法を通じて心技体を磨く慶應義塾大学の公認体育会。",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "慶應義塾體育會拳法部",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "慶應義塾體育會拳法部 | 日本拳法",
    description: "慶應義塾體育會拳法部の公式ウェブサイト。1953年創部、新入部員募集中。",
    images: ["/images/hero/hero.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "Nc1cNsacrjSOCueJebWS0emIKv3japFt5djYu0jEIcU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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

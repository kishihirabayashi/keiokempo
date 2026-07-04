# 慶應義塾大学體育會拳法部 公式サイト — 引き継ぎドキュメント

最終更新: 2026年7月

---

## 1. プロジェクト概要

| 項目 | 内容 |
|---|---|
| サイト名 | 慶應義塾大学體育會拳法部 公式ウェブサイト |
| ドメイン | https://keiokempo.com |
| リポジトリ | https://github.com/kishihirabayashi/keiokempo |
| ホスティング | Vercel（GitHub 連携で自動デプロイ） |
| フレームワーク | Next.js 16.2.0（App Router、Turbopack） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4（`@import "tailwindcss"` 方式） |
| アニメーション | Framer Motion 12 |
| アナリティクス | Vercel Analytics（`@vercel/analytics`） |
| お問い合わせ | EmailJS（`@emailjs/browser`） |

---

## 2. ローカル開発

```bash
git clone https://github.com/kishihirabayashi/keiokempo.git
cd keiokempo
npm install
npm run dev       # http://localhost:3000
npm run build     # 本番ビルド確認（18ページ）
```

---

## 3. 確定カラーパレット

### 背景3トーン（パレットD）

| 用途 | HEX | 備考 |
|---|---|---|
| カード・パネル（最明） | `#E1DABC` | モーダル、カード背景 |
| ページ背景（標準） | `#D7CEA9` | `<body>` 背景、汎用セクション背景 |
| セクション区切り（濃） | `#C8BD8F` | 濃いセクション帯 |

rgba形式の対応（透明度 X は用途ごとに維持）:
- `rgba(225,218,188,X)` — カード・パネル用
- `rgba(215,206,169,X)` — ページ背景用
- `rgba(200,189,143,X)` — セクション区切り用
- `.glass` クラス: `rgba(225, 218, 188, 0.82)`（globals.css 95行目、スペース入り）

### アクセントカラー（変更禁止）

| 名称 | HEX | 用途 |
|---|---|---|
| 慶應ネイビー | `#002B5C` | 見出し・ロゴ・強調テキスト |
| 慶應レッド | `#B01E33` | ボタン・バッジ・ボーダーアクセント |
| 金 | `#B8860B` | スクロールバーつまみ（hover: `#D4A020`） |
| テキスト標準 | `#2D3748` / `#1B2A4A` | 本文・body |
| テキスト淡 | `#6B7A99` | サブテキスト・ラベル |
| ボーダー | `#D4C9B8` | カード枠線 |

### 背景色を変更する際の注意

1. `app/` と `components/` 配下の `.tsx`・`.ts`・`.css` を一括 sed で置換
2. **globals.css の `.glass` はスペース入り rgba** なので専用 sed が必要
   ```bash
   sed -i '' 's/rgba(旧, 旧, 旧, 0.82)/rgba(新, 新, 新, 0.82)/g' app/globals.css
   ```
3. 過去の残骸カラー（`#FAF7F0`、`#F5F0E6`、`#EFE7D3`、`#E8DEC6`、`#E9E3CC`、`#E4DCBE`、`#E0D8B9`、`#D2C99F` 等）が残っていれば同様に置換する

---

## 4. デザイン方針・禁止事項

### 見出しスタイル（SectionHeading コンポーネント）
- `<SectionHeading en="ENGLISH" jp="日本語" />` を統一使用
- 背景に英字ウォーターマーク（`.bg-watermark`）を自動生成 → **英字のみ許可**
- `noWatermark` prop を渡すと非表示にできる

### 透かし（ウォーターマーク）ルール
- **英字のみ可**（NEWS、GALLERY、KEMPO、JOIN、RESULTS 等）
- **日本語・漢字・かな・アラビア数字は禁止**（例: 部員、拳法、1953、01 等）

### その他禁止事項
- 白・ほぼ白の背景（`#FFFFFF`、`#FAF7F0` 相当以上の明度）をカードに使わない
- 無地の赤四角（装飾用の `bg-[#B01E33]` 正方形ブロック）は使わない
- アクセントカラー（紺・赤・金）をページ背景に使わない

---

## 5. フォント

| CSS変数 | フォント | 用途 |
|---|---|---|
| `var(--font-noto-serif-jp)` | Noto Serif JP | 見出し（h1〜h6、部員名、大タイトル） |
| `var(--font-noto-sans-jp)` | Noto Sans JP | 本文・UI テキスト |
| `var(--font-cormorant)` | Cormorant Garamond | 英字ラベル・セクション番号・装飾数字 |
| `var(--font-zen-maru)` | Zen Maru Gothic | キャッチフレーズ専用（ヒーローセクション） |

---

## 6. ディレクトリ構成

```
keio-kempo/
├── app/                    # Next.js App Router ページ
│   ├── page.tsx            # トップページ (/)
│   ├── about/              # 部の紹介 (/about)
│   ├── about-kempo/        # 日本拳法とは (/about-kempo)
│   ├── members/            # 部員紹介 (/members)
│   ├── results/            # 戦績 (/results)
│   ├── news/               # ニュース一覧・詳細 (/news, /news/[slug])
│   ├── join/               # 入部案内 (/join)
│   ├── privacy/            # プライバシーポリシー (/privacy)
│   ├── layout.tsx          # ルートレイアウト（メタデータ・フォント・LD+JSON）
│   ├── globals.css         # グローバルスタイル（CSS変数・ユーティリティクラス）
│   ├── robots.ts           # robots.txt 生成
│   └── sitemap.ts          # sitemap.xml 生成
│
├── components/             # 共通コンポーネント
│   ├── Header.tsx          # ヘッダー（スクロール変化・モバイルメニュー）
│   ├── Footer.tsx          # フッター
│   ├── HeroSection.tsx     # トップヒーロー（ズームアニメーション）
│   ├── SectionHeading.tsx  # セクション見出し（英字ウォーターマーク付き）
│   ├── AnimatedSection.tsx # スクロールアニメーションラッパー
│   ├── MemberCard.tsx      # 部員カード（クリックでモーダル展開）
│   ├── NewsCard.tsx        # ニュースカード
│   ├── ResultTable.tsx     # 戦績テーブル
│   ├── ContactForm.tsx     # お問い合わせフォーム（EmailJS）
│   ├── FAQAccordion.tsx    # FAQ アコーディオン
│   ├── FloatingCTA.tsx     # 固定 CTA ボタン
│   ├── GallerySection.tsx  # ギャラリーセクション
│   ├── ParallaxBand.tsx    # パララックス帯
│   ├── SectionDivider.tsx  # セクション区切り
│   ├── CountUp.tsx         # 数字カウントアップ
│   └── TiltCard.tsx        # ホバーチルトカード
│
├── lib/                    # データ取得ユーティリティ
│   ├── getMembers.ts       # content/members/members.json を読み込む
│   ├── getNews.ts          # content/news/*.md を読み込む（gray-matter）
│   └── getResults.ts       # content/results/results.json を読み込む
│
├── content/                # コンテンツデータ（編集対象）
│   ├── members/
│   │   └── members.json    # 部員データ（41名）
│   ├── results/
│   │   └── results.json    # 戦績データ（2021〜2026）
│   └── news/               # ニュース記事（Markdown）
│       ├── 2026-selection-results.md
│       ├── 2026-league-results.md
│       └── ...
│
└── public/                 # 静的ファイル
    ├── kenpo-favicon.svg   # SVGファビコン（プライマリ）
    ├── favicon.ico         # ICO（32×32）
    ├── favicon-32.png      # PNG（32×32）
    ├── favicon-180.png     # Apple Touch Icon（180×180）
    ├── favicon-192.png     # PWA アイコン（192×192）
    ├── favicon-512.png     # PWA アイコン（512×512）
    ├── site.webmanifest    # Web App Manifest
    └── images/
        ├── hero/           # ヒーロー画像
        ├── members/        # 部員写真（{name}.jpg 形式）
        ├── gallery/        # ギャラリー画像
        └── sponsors/       # スポンサーロゴ
```

---

## 7. ファビコン構成

`app/icon.svg` および `app/apple-icon.png` は**削除済み**（Next.js の自動処理と競合するため）。
ファビコンはすべて `public/` に置き、`layout.tsx` の `metadata.icons` で明示指定している。

```ts
// app/layout.tsx
icons: {
  icon: [
    { url: '/kenpo-favicon.svg', type: 'image/svg+xml' },
    { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
  ],
  apple: '/favicon-180.png',
},
manifest: '/site.webmanifest',
```

`public/site.webmanifest`:
```json
{
  "name": "慶應義塾大学體育會拳法部",
  "short_name": "慶應拳法部",
  "icons": [
    { "src": "/favicon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/favicon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#002B5C",
  "background_color": "#E2D4B4",
  "display": "standalone"
}
```

---

## 8. コンテンツ更新方法

### 部員データ（`content/members/members.json`）

```json
{
  "name": "慶應 太郎",
  "grade": "3年",
  "faculty": "法学部",
  "role": "主将",         // 省略可（主将/副将/主務/副務/マネージャー）
  "origin": "東京都",    // 省略可
  "rank": "初段",        // 省略可
  "skill": "得意技",     // 省略可（赤字で表示される）
  "photo": "keio-taro.jpg" // 省略可（public/images/members/ 配下）
}
```

- 現在の部員数: **41名**
- 写真は `public/images/members/` に配置し、`photo` フィールドにファイル名を記入

### ニュース記事（`content/news/SLUG.md`）

```markdown
---
title: 記事タイトル
date: "2026-04-01"
category: "お知らせ"
---

本文（Markdown形式）
```

- ファイル名がそのまま URL スラグになる（例: `2026-selection-results.md` → `/news/2026-selection-results`）
- 日付降順で自動ソートされる

### 戦績データ（`content/results/results.json`）

```json
{
  "year": 2026,
  "tournament": "大会名",
  "category": "団体戦",   // "団体戦" または "個人戦"
  "result": "第3位",
  "details": "補足説明"   // 省略可
}
```

### 次戦情報（`app/page.tsx` の `NEXT_MATCH` 定数）

```ts
const NEXT_MATCH = {
  event: "第2回 本部昇段級審査会",
  date: "2026年6月28日(日)",
  time: "",     // 空文字で非表示
  venue: "",    // 空文字で非表示
};
```

---

## 9. 2026年度主な戦績

| 大会 | カテゴリ | 結果 |
|---|---|---|
| 第39回 全国大学選抜選手権大会 | 団体戦 | 男子の部 **第3位**（部史上初） |
| 第39回 東日本大学リーグ戦 | 団体戦 | 男子の部 **第3位** |

---

## 10. お問い合わせフォーム（EmailJS）

`components/ContactForm.tsx` の定数:

```ts
const SERVICE_ID  = "service_esg7kxt";
const TEMPLATE_ID = "template_ngv07oh";
const PUBLIC_KEY  = "ABx9f1RNPki2m64SU";
```

- 送信先: `keio.kempo1@gmail.com`
- 月間送信上限到達時は `status === "limit"` でメールアドレスを案内する UI が表示される
- 外部サービスの設定変更は [EmailJS ダッシュボード](https://www.emailjs.com/) で行う

---

## 11. デプロイ手順

```bash
# 変更をプッシュすると Vercel が自動でビルド・デプロイする
git add -A
git commit -m "コミットメッセージ"
git push origin main
```

手動でビルド確認してからプッシュする場合:

```bash
npm run build   # 18ページ全通過を確認
git push origin main
```

Vercel ダッシュボード: https://vercel.com（要ログイン）

---

## 12. 主要な実装メモ

- **globals.css の `.glass` クラス**: `rgba()` の値がスペース区切りで記述されているため、sed による一括置換では見落とされやすい。背景色変更時は必ず個別に確認・修正する（95行目）。
- **`SectionHeading` の `noWatermark` prop**: 英字ウォーターマークが邪魔な場合は `noWatermark` を渡す。
- **`showClubAtmosphere` フラグ** (`app/page.tsx`): CLUB ATMOSPHERE セクションは現在 `false`（非表示）。`true` にすると復活する。
- **部員モーダル**: `MemberCard.tsx` が `createPortal` で `document.body` 直下にレンダリングする。6項目（学年・学部・役職・出身地・段位・得意技）を順に表示。
- **Next.js App Router のファビコン自動処理**: `app/icon.*` / `app/apple-icon.*` が存在すると `metadata.icons` より優先されてしまうため、これらのファイルを置かないこと。

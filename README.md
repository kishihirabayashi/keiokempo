# 慶應義塾大学體育會拳法部 公式サイト

Next.js 製の公式 Web サイトです。

---

## 開発サーバー起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

---

## お問い合わせフォームの設定（Formspree）

### 概要

フォームは **Formspree** を使って `keio.kempo1@gmail.com` 宛にメールを転送します。
環境変数 `NEXT_PUBLIC_FORMSPREE_ENDPOINT` が**未設定**の場合は、`mailto:` リンクで Gmail アプリが開くフォールバックが働きます。

### 設定手順

1. [https://formspree.io](https://formspree.io) にアクセスし、`keio.kempo1@gmail.com` でアカウント作成（無料）
2. **New Form** を作成し、送信先メールアドレスに `keio.kempo1@gmail.com` を設定
3. 発行された **フォームエンドポイント URL** をコピー（例: `https://formspree.io/f/xpzgabcd`）
4. プロジェクトルートに `.env.local` ファイルを作成し、以下を記述：

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xpzgabcd
```

> `.env.local.example` をコピーして使うと便利です：
> ```bash
> cp .env.local.example .env.local
> # .env.local を編集して XXXXXXXX を実際のフォームIDに置き換える
> ```

5. 開発サーバーを再起動してテスト送信を行い、`keio.kempo1@gmail.com` に届くことを確認

### Vercel デプロイ時の設定

Vercel にデプロイしている場合は、ダッシュボードでも環境変数を設定する必要があります：

1. Vercel Dashboard → プロジェクト → **Settings** → **Environment Variables**
2. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` を追加し、値に Formspree の URL を設定
3. **Save** → **Redeploy**

---

## アクセス解析（Vercel Analytics）

`@vercel/analytics` を導入済みです。ユーザーには何も表示されません。

### 閲覧方法

1. [https://vercel.com](https://vercel.com) のダッシュボードにログイン
2. プロジェクトを選択
3. **Analytics** タブでページビュー・訪問者数を確認

> Vercel にデプロイ後、Analytics タブが有効になります。ローカル開発中は計測されません。

---

## デプロイ

[Vercel](https://vercel.com) への接続を推奨します。GitHub リポジトリを連携するだけで自動デプロイが設定できます。

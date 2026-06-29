# Electronics Catalog

電子製品を **「用途」ではなく「製品の種類」** で整理する目録サイト。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` で開けます。

ビルド & 本番起動：

```bash
npm run build
npm start
```

## ディレクトリ構造

```
app/
  page.tsx                          # トップページ
  layout.tsx                        # 共通レイアウト
  globals.css                       # グローバルCSS
  c/[category]/page.tsx             # 大カテゴリページ（PC/スマホ/タブレット…）
  c/[category]/[subcategory]/page.tsx  # 小カテゴリ一覧（ノートPC/ゲーミングPC…）
  p/[productId]/page.tsx            # 商品詳細ページ

components/
  Header.tsx
  Footer.tsx

data/
  types.ts                          # 型定義
  products.ts                       # ★ カテゴリ・商品データはここに集約
```

## カテゴリ・商品の追加方法

### 商品を追加するとき

`data/products.ts` の `products` 配列に1件追加するだけです。

```ts
{
  id: 'my-new-product',          // URLに使う slug（重複NG）
  categoryId: 'pc',              // 既存カテゴリのID
  subcategoryId: 'notebook',     // 既存サブカテゴリのID
  name: '製品名',
  brand: 'ブランド名',
  image: 'https://...',          // 画像URL
  priceRange: '¥100,000 〜 ¥150,000',
  summary: '1〜2行の概要',
  features: ['特徴1', '特徴2', ...],
  specs: [
    { label: 'CPU', value: '...' },
    ...
  ],
  pros: ['メリット1', ...],
  cons: ['デメリット1', ...],
  description: '詳しい説明。段落は \\n\\n で区切る。',
  purchaseLink: 'https://...'
}
```

追加すると：
- 小カテゴリ一覧ページに自動で表示される
- `/p/my-new-product` で詳細ページが自動生成される

### 小カテゴリを追加するとき

`data/products.ts` の対象カテゴリの `subcategories` 配列に追加します。

```ts
{ id: 'new-sub', name: '新カテゴリ', typeCode: 'PC-NW', description: '...' }
```

### 大カテゴリを追加するとき

`data/products.ts` の `categories` 配列に追加します。

## デザインの考え方

- 配色: 白 (`#FAFBFC`) / 近黒 (`#0B1220`) / グレー / アクセントブルー (`#2563EB`)
- タイポ: Inter + Noto Sans JP + JetBrains Mono（ID表示用）
- 装飾: ヘアラインのトップアクセント（ホバーで伸びる）/ ドットグリッド背景
- 思想: 製品の種類体系そのものを視覚化する。タイプコード（PC-NB等）を全体に散りばめることで「種類で分けている」ことを継続的に意識させる

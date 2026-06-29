// データの型定義
// 商品を追加する場合は data/products.ts の products 配列に追加するだけでOK

export type Subcategory = {
  id: string;          // URLに使う slug。例: 'notebook'
  name: string;        // 表示名。例: 'ノートPC'
  typeCode: string;    // 種別コード。例: 'PC-NB'
  description: string; // 一行説明
};

export type Category = {
  id: string;             // URLに使う slug。例: 'pc'
  name: string;           // 表示名。例: 'PC'
  code: string;           // 大カテゴリコード。例: '01'
  tagline: string;        // 短いキャッチ
  description: string;    // 長めの説明
  subcategories: Subcategory[];
};

export type SpecRow = {
  label: string;
  value: string;
};

export type Product = {
  id: string;             // URLに使う slug。例: 'sample-notebook-01'
  categoryId: string;     // 'pc' など
  subcategoryId: string;  // 'notebook' など
  name: string;
  brand: string;
  image: string;          // 画像URL（プレースホルダ可）
  priceRange: string;     // 価格帯。例: '¥150,000 〜 ¥200,000'
  summary: string;        // 1〜2行の概要
  features: string[];     // 主な特徴
  specs: SpecRow[];       // スペック表
  pros: string[];         // メリット
  cons: string[];         // デメリット
  description: string;    // 詳しい説明（複数段落OK。\n\n で段落区切り）
  purchaseLink: string;   // 購入リンク（外部URL）
};

import type { Product } from '@/lib/types';
import { categories, getCategoryById } from '@/data/categories';

// Re-export for backward compat
export { categories };

const ph = (code: string, n: number) =>
  `/api/product-image/${code.toLowerCase()}-${String(n).padStart(2, '0')}`;

export const products: Product[] = [
  // ==================== PC — ノートPC ====================
  {
    id: 'pc-nb-01',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'MacBook Pro 14インチ M4 Pro',
    brand: 'Apple',
    price: 328800,
    priceText: '¥328,800 〜',
    releaseDate: '2024-11',
    imageUrl: ph('PC-NB', 1),
    description: 'M4 Proチップ搭載のクリエイター向けノート。Liquid Retina XDRディスプレイで色精度も最高峰。プロフェッショナルな映像・音楽・開発作業を1台で完結させる、現行最強クラスのノートPC。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple M4 Pro (12-core CPU)' },
      { label: 'メモリ',       value: '24GB ユニファイドメモリ' },
      { label: 'ストレージ',   value: '512GB SSD' },
      { label: 'ディスプレイ', value: '14.2インチ Liquid Retina XDR' },
      { label: '重量',         value: '1.55kg' }
    ],
    tags: ['クリエイター', 'Apple Silicon', '高解像度'],
    featured: true,
    summary: 'M4 Proチップ搭載のクリエイター向けノート。Liquid Retina XDRディスプレイで色精度も最高峰。',
    features: ['14.2インチ Liquid Retina XDR', 'M4 Pro 12コアCPU', '24GBユニファイドメモリ', 'Thunderbolt 5 × 3'],
    pros: ['業界最高水準のCPU/GPU性能', '美しいXDRディスプレイ', '長時間バッテリー'],
    cons: ['価格が高い', '重量は同クラスより重め'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-mac/macbook-pro/14'
  },
  {
    id: 'pc-nb-02',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'ThinkPad X1 Carbon Gen 12',
    brand: 'Lenovo',
    price: 278000,
    priceText: '¥278,000 〜',
    releaseDate: '2024-05',
    imageUrl: ph('PC-NB', 2),
    description: 'Intel Core Ultra搭載のビジネス定番。1.09kgの軽量カーボン筐体に堅牢性と拡張性を両立。MIL規格準拠で過酷な環境でも安心して使える定番ビジネスノート。',
    specs: [
      { label: 'プロセッサ',   value: 'Intel Core Ultra 7 165U' },
      { label: 'メモリ',       value: '32GB LPDDR5x' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '14インチ WUXGA IPS' },
      { label: '重量',         value: '1.09kg' }
    ],
    tags: ['ビジネス', '軽量', '堅牢'],
    summary: 'Intel Core Ultra搭載のビジネス定番。1.09kgの軽量カーボン筐体に堅牢性と拡張性を両立。'
  },
  {
    id: 'pc-nb-03',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'Dell XPS 15',
    brand: 'Dell',
    price: 244800,
    releaseDate: '2024-03',
    imageUrl: ph('PC-NB', 3),
    description: 'InfinityEdgeディスプレイを纏う15インチ。CPU / GPU両搭載でクリエイティブ用途にも対応。3.5K OLEDパネルと薄型筐体のバランスが秀逸なプレミアムノート。',
    specs: [
      { label: 'プロセッサ',   value: 'Intel Core i7-13700H' },
      { label: 'GPU',          value: 'NVIDIA RTX 4060' },
      { label: 'メモリ',       value: '32GB DDR5' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '15.6インチ 3.5K OLED' }
    ],
    tags: ['OLED', 'GPU搭載', 'Windows'],
    summary: 'InfinityEdgeディスプレイを纏う15インチ。CPU/GPU両搭載でクリエイティブ用途にも対応。'
  },
  {
    id: 'pc-nb-04',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'ROG Zephyrus G14 2024',
    brand: 'ASUS',
    price: 289800,
    releaseDate: '2024-04',
    imageUrl: ph('PC-NB', 4),
    description: '14インチに収まったRyzen 9 + RTX 4070のゲーミング機。アニメマトリックスLEDパネルも健在。コンパクトなボディに高性能を凝縮した、携帯できるゲーミングノートの頂点。',
    specs: [
      { label: 'プロセッサ',   value: 'AMD Ryzen 9 8945HS' },
      { label: 'GPU',          value: 'NVIDIA RTX 4070' },
      { label: 'メモリ',       value: '32GB LPDDR5x' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '14インチ OLED 120Hz' }
    ],
    tags: ['ゲーミング', 'OLED', '高リフレッシュレート'],
    summary: '14インチに収まったRyzen + RTX 4070のゲーミング機。携帯できるゲーミングノートの頂点。'
  },
  {
    id: 'pc-nb-05',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'MacBook Air 15インチ M4',
    brand: 'Apple',
    price: 164800,
    priceText: '¥164,800 〜',
    releaseDate: '2025-03',
    imageUrl: ph('PC-NB', 5),
    description: 'M4チップでファンレス設計のまま性能を底上げした15インチAir。薄型軽量ボディに大画面を収め、日常使いからライトな制作作業までこなす。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple M4 (10-core CPU)' },
      { label: 'メモリ',       value: '16GB ユニファイドメモリ' },
      { label: 'ストレージ',   value: '256GB SSD' },
      { label: 'ディスプレイ', value: '15.3インチ Liquid Retina' },
      { label: '重量',         value: '1.51kg' }
    ],
    tags: ['軽量', 'ファンレス', 'Apple Silicon'],
    summary: 'M4搭載でファンレスのまま性能を底上げした15インチAir。薄型軽量で日常使いに最適。'
  },
  {
    id: 'pc-nb-06',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'Surface Laptop 7 (Snapdragon X Elite)',
    brand: 'Microsoft',
    price: 208780,
    releaseDate: '2024-06',
    imageUrl: ph('PC-NB', 6),
    description: 'Snapdragon X Elite搭載のCopilot+ PC。ARMアーキテクチャでバッテリー持続時間が大幅に向上した次世代Windowsノート。',
    specs: [
      { label: 'プロセッサ',   value: 'Snapdragon X Elite' },
      { label: 'メモリ',       value: '16GB' },
      { label: 'ストレージ',   value: '512GB SSD' },
      { label: 'ディスプレイ', value: '13.8インチ PixelSense' },
      { label: 'バッテリー',   value: '最大20時間' }
    ],
    tags: ['Copilot+ PC', 'ARM', '長時間バッテリー'],
    summary: 'Snapdragon X Elite搭載のCopilot+ PC。ARM移行で大幅にバッテリー持続時間が向上。'
  },
  {
    id: 'pc-nb-07',
    typeCode: 'PC-NB',
    category: 'pc',
    subCategoryCode: 'PC-NB',
    name: 'MacBook Pro 16インチ M4 Max — Engraved Edition',
    brand: 'Apple',
    price: 468800,
    priceText: '¥468,800 〜',
    releaseDate: '2025-01',
    imageUrl: ph('PC-NB', 7),
    description: '受注生産限定の刻印エディション。スペックはM4 Max標準構成と同一だが、天板レーザー刻印が施された数量限定モデル。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple M4 Max (16-core CPU)' },
      { label: 'メモリ',       value: '48GB ユニファイドメモリ' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '16.2インチ Liquid Retina XDR' },
      { label: '限定要素',     value: '天板レーザー刻印 / 数量限定' }
    ],
    tags: ['限定モデル', 'ハイエンド', 'カスタム刻印'],
    status: 'limited',
    summary: '受注生産限定の刻印エディション。M4 Max標準構成に数量限定の天板刻印を施したモデル。'
  },

  // ==================== PC — デスクトップ ====================
  {
    id: 'pc-dt-01',
    typeCode: 'PC-DT',
    category: 'pc',
    subCategoryCode: 'PC-DT',
    name: 'Mac mini M4',
    brand: 'Apple',
    price: 94800,
    priceText: '¥94,800 〜',
    releaseDate: '2024-11',
    imageUrl: ph('PC-DT', 1),
    description: '12.7cm四方の極小ボディに刷新されたM4世代のMac mini。コスパ最強デスクトップとして君臨。静音・省スペース・高性能の三拍子が揃った、デスクトップの新定番。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M4 (10-core CPU)' },
      { label: 'メモリ',     value: '16GB ユニファイドメモリ' },
      { label: 'ストレージ', value: '256GB SSD' },
      { label: 'サイズ',     value: '127 × 127 × 50 mm' },
      { label: '重量',       value: '0.67kg' }
    ],
    tags: ['コンパクト', 'Apple Silicon', 'コスパ'],
    featured: true,
    summary: '12.7cm四方の極小ボディに刷新されたM4世代のMac mini。コスパ最強デスクトップ。',
    features: ['Apple M4チップ', '3台のディスプレイ同時出力', 'Thunderbolt 4 × 3', '超コンパクト筐体'],
    pros: ['M4の高性能をリーズナブルな価格で', '静音・省スペース', 'Thunderbolt 4×3で拡張性◎'],
    cons: ['モニター別途必要', 'RAM/SSDは後から変更不可'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-mac/mac-mini'
  },
  {
    id: 'pc-dt-02',
    typeCode: 'PC-DT',
    category: 'pc',
    subCategoryCode: 'PC-DT',
    name: 'Mac Studio M2 Ultra',
    brand: 'Apple',
    price: 598000,
    priceText: '¥598,000 〜',
    releaseDate: '2023-06',
    imageUrl: ph('PC-DT', 2),
    description: 'コンパクト筐体に詰め込まれたUltra級の演算性能。8K動画編集も8Kディスプレイも余裕で対応。最大192GBのメモリと800GB/sのメモリ帯域が、プロの制作ワークフローを加速する。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M2 Ultra (24-core CPU)' },
      { label: 'GPU',        value: '60コア統合GPU' },
      { label: 'メモリ',     value: '64GB ユニファイドメモリ' },
      { label: 'ストレージ', value: '1TB SSD' },
      { label: 'サイズ',     value: '197 × 197 × 95 mm' }
    ],
    tags: ['ハイエンド', 'Apple Silicon', '映像制作'],
    summary: 'コンパクト筐体にUltra級の演算性能。8K動画編集も余裕でこなすプロ向けデスクトップ。'
  },
  {
    id: 'pc-dt-03',
    typeCode: 'PC-DT',
    category: 'pc',
    subCategoryCode: 'PC-DT',
    name: 'HP Z2 Mini G1a',
    brand: 'HP',
    price: 328000,
    releaseDate: '2024-09',
    imageUrl: ph('PC-DT', 3),
    description: 'AMD Ryzen AI Max搭載の超小型ワークステーション級デスクトップ。1リットル筐体にプロ向けの演算性能を凝縮。',
    specs: [
      { label: 'プロセッサ', value: 'AMD Ryzen AI Max PRO 390' },
      { label: 'メモリ',     value: '32GB' },
      { label: 'ストレージ', value: '1TB SSD' },
      { label: 'サイズ',     value: '1リットル筐体' },
      { label: '認証',       value: 'ISVアプリ認証済み' }
    ],
    tags: ['超小型', 'ワークステーション級', 'AI処理'],
    summary: 'Ryzen AI Max搭載の超小型ワークステーション級デスクトップ。1リットル筐体にプロ性能を凝縮。'
  },
  {
    id: 'pc-dt-04',
    typeCode: 'PC-DT',
    category: 'pc',
    subCategoryCode: 'PC-DT',
    name: 'iMac 24インチ M1',
    brand: 'Apple',
    price: 134800,
    releaseDate: '2021-05',
    imageUrl: ph('PC-DT', 4),
    description: 'カラフルな筐体で人気を博した初代Apple Silicon iMac。後継機の登場により販売終了。中古市場では今も人気の高いモデル。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M1 (8-core CPU)' },
      { label: 'メモリ',     value: '8GB ユニファイドメモリ' },
      { label: 'ストレージ', value: '256GB SSD' },
      { label: 'ディスプレイ', value: '24インチ 4.5K Retina' },
      { label: '販売状況', value: '生産終了' }
    ],
    tags: ['生産終了', 'カラフル', 'Apple Silicon'],
    status: 'discontinued',
    summary: 'カラフル筐体で人気を博した初代Apple Silicon iMac。後継機登場により販売終了。'
  },

  // ==================== PC — ワークステーション ====================
  {
    id: 'pc-ws-01',
    typeCode: 'PC-WS',
    category: 'pc',
    subCategoryCode: 'PC-WS',
    name: 'Mac Pro M2 Ultra',
    brand: 'Apple',
    price: 1098000,
    priceText: '¥1,098,000 〜',
    releaseDate: '2023-06',
    imageUrl: ph('PC-WS', 1),
    description: 'PCIeスロットを備えた業務機の頂点。スタジオ常設のキャプチャカードや高速ストレージとも組合せ可能。M2 Ultraの圧倒的な演算性能と拡張性を兼ね備えた、真の業務用マシン。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M2 Ultra (24-core CPU)' },
      { label: 'メモリ',     value: '64GB ユニファイドメモリ' },
      { label: 'ストレージ', value: '1TB SSD' },
      { label: '拡張',       value: 'PCIe Gen 4 × 6スロット' },
      { label: '重量',       value: '16.86kg' }
    ],
    tags: ['業務用', 'PCIe', 'ハイエンド'],
    summary: 'PCIeスロットを備えた業務機の頂点。M2 Ultraの性能と拡張性を持つ真のワークステーション。'
  },
  {
    id: 'pc-ws-02',
    typeCode: 'PC-WS',
    category: 'pc',
    subCategoryCode: 'PC-WS',
    name: 'HP Z8 Fury G5',
    brand: 'HP',
    price: 2480000,
    priceText: '¥2,480,000 〜',
    releaseDate: '2026-08',
    imageUrl: ph('PC-WS', 2),
    description: 'デュアルXeon + 最大4基のGPUを搭載可能な次世代フラッグシップワークステーション。8K映像のリアルタイム編集やAIモデル学習を見据えた業務用最高峰機。予約受付中。',
    specs: [
      { label: 'プロセッサ', value: 'Intel Xeon W9 デュアル構成' },
      { label: 'メモリ',     value: '最大1TB DDR5 ECC' },
      { label: 'GPU',        value: 'NVIDIA RTX 6000 Ada × 最大4基' },
      { label: 'ストレージ', value: '2TB NVMe SSD' },
      { label: '販売状況',   value: '予約受付中' }
    ],
    tags: ['予約受付中', '業務用', 'マルチGPU'],
    status: 'pre-order',
    summary: 'デュアルXeon + 最大4GPU搭載の次世代フラッグシップワークステーション。予約受付中。'
  },

  // ==================== PC — 2-in-1 ====================
  {
    id: 'pc-2n1-01',
    typeCode: 'PC-2N1',
    category: 'pc',
    subCategoryCode: 'PC-2N1',
    name: 'Surface Laptop Studio 2',
    brand: 'Microsoft',
    price: 324800,
    releaseDate: '2023-10',
    imageUrl: ph('PC-2N1', 1),
    description: 'ディスプレイを引き寄せて液タブ化できる独自変形機構の2-in-1。Surface Penでの描画体験は他社の追随を許さない完成度。クリエイターに向けた本気のWindowsラップトップ。',
    specs: [
      { label: 'プロセッサ',   value: 'Intel Core i7-13700H' },
      { label: 'GPU',          value: 'NVIDIA RTX 4050' },
      { label: 'メモリ',       value: '16GB LPDDR5x' },
      { label: 'ストレージ',   value: '512GB SSD' },
      { label: 'ディスプレイ', value: '14.4インチ PixelSense Flow 120Hz' }
    ],
    tags: ['2-in-1', 'ペン入力', 'クリエイター'],
    summary: '独自変形機構でタブレットにもなる2-in-1。Surface Penの描画体験が秀逸なクリエイター向け機。'
  },
  {
    id: 'pc-2n1-02',
    typeCode: 'PC-2N1',
    category: 'pc',
    subCategoryCode: 'PC-2N1',
    name: 'Yoga 9i Gen 9',
    brand: 'Lenovo',
    price: 239800,
    releaseDate: '2024-04',
    imageUrl: ph('PC-2N1', 2),
    description: '360度回転ヒンジでテント / タブレット形態にも変形する薄型2-in-1。Bower & Wilkins製スピーカーを内蔵し、音質にも妥協しない完成度。',
    specs: [
      { label: 'プロセッサ',   value: 'Intel Core Ultra 7 155H' },
      { label: 'メモリ',       value: '16GB LPDDR5x' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '14インチ 2.8K OLED' },
      { label: '重量',         value: '1.39kg' }
    ],
    tags: ['360度ヒンジ', 'OLED', 'オーディオ重視'],
    summary: '360度ヒンジ採用の薄型2-in-1。B&W製スピーカー内蔵でOLEDディスプレイも美しい。'
  },
  {
    id: 'pc-2n1-03',
    typeCode: 'PC-2N1',
    category: 'pc',
    subCategoryCode: 'PC-2N1',
    name: 'Surface Pro 11',
    brand: 'Microsoft',
    price: 208780,
    releaseDate: '2024-06',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Microsoft_Surface_Pro.jpg/3840px-Microsoft_Surface_Pro.jpg',
    description: 'Snapdragon X Elite搭載で大幅に省電力化したSurface Pro。キックスタンドとタイプカバーで2-in-1の定番フォームファクタを継承。',
    specs: [
      { label: 'プロセッサ',   value: 'Snapdragon X Elite' },
      { label: 'メモリ',       value: '16GB' },
      { label: 'ストレージ',   value: '512GB SSD' },
      { label: 'ディスプレイ', value: '13インチ PixelSense Flow 120Hz' },
      { label: 'バッテリー',   value: '最大14時間' }
    ],
    tags: ['2-in-1', 'ARM', 'キックスタンド'],
    summary: 'Snapdragon X Elite搭載で省電力化したSurface Pro。キックスタンド型2-in-1の定番。'
  },
  {
    id: 'pc-2n1-04',
    typeCode: 'PC-2N1',
    category: 'pc',
    subCategoryCode: 'PC-2N1',
    name: 'Galaxy Book5 Pro 360',
    brand: 'Samsung',
    price: 259800,
    releaseDate: '2025-02',
    imageUrl: ph('PC-2N1', 4),
    description: '360度ヒンジ + Sペン付属のSamsung製2-in-1。AMOLEDディスプレイの発色とGalaxyエコシステム連携が強み。',
    specs: [
      { label: 'プロセッサ',   value: 'Intel Core Ultra 7 258V' },
      { label: 'メモリ',       value: '16GB' },
      { label: 'ストレージ',   value: '1TB SSD' },
      { label: 'ディスプレイ', value: '16インチ 3K AMOLED 120Hz' },
      { label: 'ペン',         value: 'Sペン付属' }
    ],
    tags: ['2-in-1', 'AMOLED', 'Sペン付属'],
    summary: '360度ヒンジ + Sペン付属のSamsung製2-in-1。AMOLEDの発色とGalaxy連携が強み。'
  },

  // ==================== PC — ミニPC ====================
  {
    id: 'pc-mn-01',
    typeCode: 'PC-MN',
    category: 'pc',
    subCategoryCode: 'PC-MN',
    name: 'NUC 13 Pro',
    brand: 'ASUS',
    price: 118000,
    releaseDate: '2024-02',
    imageUrl: ph('PC-MN', 1),
    description: 'Intelから事業移管された新生NUC。手のひらサイズで業務用途にも耐えるI/O拡張性を持つ。Thunderbolt 4×2を含む豊富なポート構成で、コンパクトながら本格的な使い方ができる。',
    specs: [
      { label: 'プロセッサ', value: 'Intel Core i7-1360P' },
      { label: 'メモリ',     value: '16GB DDR4' },
      { label: 'ストレージ', value: '512GB SSD' },
      { label: 'サイズ',     value: '117 × 112 × 54 mm' },
      { label: 'ポート',     value: 'Thunderbolt 4 × 2 / USB-A × 4' }
    ],
    tags: ['ミニPC', '省スペース', '拡張性'],
    summary: '手のひらサイズの新生NUC。Thunderbolt 4×2を含む豊富なポートで業務用途もこなせる。'
  },
  {
    id: 'pc-mn-02',
    typeCode: 'PC-MN',
    category: 'pc',
    subCategoryCode: 'PC-MN',
    name: 'Mac mini M4 Pro',
    brand: 'Apple',
    price: 194800,
    priceText: '¥194,800 〜',
    releaseDate: '2024-11',
    imageUrl: ph('PC-MN', 2),
    description: 'M4 Pro搭載の上位Mac mini構成。Thunderbolt 5対応で最大3台の6K/8Kディスプレイ出力にも対応するプロ向けミニPC。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M4 Pro (14-core CPU)' },
      { label: 'メモリ',     value: '24GB ユニファイドメモリ' },
      { label: 'ストレージ', value: '512GB SSD' },
      { label: '接続',       value: 'Thunderbolt 5 × 3' },
      { label: 'サイズ',     value: '127 × 127 × 50 mm' }
    ],
    tags: ['ミニPC', 'Apple Silicon', 'Thunderbolt 5'],
    summary: 'M4 Pro搭載の上位Mac mini。Thunderbolt 5で最大3台の6K/8K出力に対応。'
  },
  {
    id: 'pc-mn-03',
    typeCode: 'PC-MN',
    category: 'pc',
    subCategoryCode: 'PC-MN',
    name: 'GMKtec NucBox K11',
    brand: 'GMKtec',
    price: 89800,
    releaseDate: '2024-12',
    imageUrl: ph('PC-MN', 3),
    description: 'Ryzen 9搭載で手のひらサイズながらデスクトップ級の性能を発揮するコスパ系ミニPC。デュアル2.5GbE LANを備えホームサーバー用途にも対応。',
    specs: [
      { label: 'プロセッサ', value: 'AMD Ryzen 9 8945HS' },
      { label: 'メモリ',     value: '32GB DDR5' },
      { label: 'ストレージ', value: '1TB NVMe SSD' },
      { label: 'LAN',        value: '2.5GbE × 2' },
      { label: 'サイズ',     value: '120 × 120 × 44 mm' }
    ],
    tags: ['コスパ', 'デュアルLAN', 'ミニPC'],
    summary: 'Ryzen 9搭載のコスパ系ミニPC。デュアル2.5GbEでホームサーバー用途にも対応。'
  },

  // ==================== SP — iPhone ====================
  {
    id: 'sp-ip-01',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    price: 219800,
    priceText: '¥219,800 〜',
    releaseDate: '2025-09',
    imageUrl: ph('SP-IP', 1),
    description: 'A19 Pro搭載の最上位iPhone。チタニウムフレームと刷新されたカメラシステムが特徴。6.9インチの大画面とProMotionで、ビデオ撮影からゲームまで最高の体験を提供する。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A19 Pro' },
      { label: 'ディスプレイ', value: '6.9インチ Super Retina XDR' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '48MP Fusion + 48MP UW + 48MP テレフォト 5x' },
      { label: '通信', value: '5G / Wi-Fi 7 / USB-C (Thunderbolt)' }
    ],
    tags: ['フラッグシップ', 'チタン', 'Pro'],
    featured: true,
    summary: 'A19 Pro搭載の最上位iPhone。チタニウムフレームと刷新された3眼カメラが特徴。',
    features: ['A19 Proチップ', '48MP × 3 カメラシステム', 'Thunderbolt対応USB-C', 'Wi-Fi 7'],
    pros: ['業界最高水準のカメラ', '長期OSサポート保証', 'エコシステム連携が強力'],
    cons: ['価格が高い', 'カスタマイズ性は限定的'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-iphone/iphone-17-pro'
  },
  {
    id: 'sp-ip-02',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    price: 179800,
    priceText: '¥179,800 〜',
    releaseDate: '2025-09',
    imageUrl: ph('SP-IP', 2),
    description: '6.3インチサイズのPro。Pro Maxとほぼ同等のスペックを取り回しの良いボディに凝縮。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A19 Pro' },
      { label: 'ディスプレイ', value: '6.3インチ Super Retina XDR' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '48MP Fusion + 48MP UW + 48MP テレフォト' },
      { label: '重量', value: '199g' }
    ],
    tags: ['フラッグシップ', 'チタン', 'Pro'],
    summary: '6.3インチのPro。Pro Maxとほぼ同等のスペックを取り回しの良いボディに凝縮。'
  },
  {
    id: 'sp-ip-03',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone 17',
    brand: 'Apple',
    price: 124800,
    priceText: '¥124,800 〜',
    releaseDate: '2025-09',
    imageUrl: ph('SP-IP', 3),
    description: '標準モデルもProMotion対応に進化。日常使いに必要十分なバランス機。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A19' },
      { label: 'ディスプレイ', value: '6.1インチ Super Retina XDR (ProMotion)' },
      { label: 'ストレージ', value: '128GB 〜 512GB' },
      { label: 'カメラ', value: '48MP Fusion + 12MP UW' },
      { label: '通信', value: '5G / Wi-Fi 7' }
    ],
    tags: ['スタンダード', 'バランス'],
    summary: '標準モデルもProMotion対応に進化。日常使いに必要十分なバランス機。'
  },
  {
    id: 'sp-ip-04',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone 16e',
    brand: 'Apple',
    price: 99800,
    priceText: '¥99,800 〜',
    releaseDate: '2025-02',
    imageUrl: ph('SP-IP', 4),
    description: 'SEシリーズの後継として登場した廉価モデル。A18チップとApple Intelligence対応を10万円以下で実現したエントリーiPhone。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A18' },
      { label: 'ディスプレイ', value: '6.1インチ Super Retina XDR' },
      { label: 'ストレージ', value: '128GB 〜 256GB' },
      { label: 'カメラ', value: '48MP Fusion シングルカメラ' },
      { label: '通信', value: '5G / Apple独自モデム' }
    ],
    tags: ['エントリー', 'コスパ', 'Apple Intelligence'],
    summary: 'SEシリーズ後継の廉価モデル。A18チップとApple Intelligence対応を10万円以下で。'
  },
  {
    id: 'sp-ip-05',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone Air 2',
    brand: 'Apple',
    price: 159800,
    priceText: '¥159,800 〜',
    releaseDate: '2026-09',
    imageUrl: ph('SP-IP', 5),
    description: '5.5mmの極薄ボディに刷新されたA20チップを搭載する次世代iPhone。eSIM専用化とチタンフレームでさらなる薄型・軽量化を実現。予約受付中。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A20' },
      { label: 'ディスプレイ', value: '6.6インチ Super Retina XDR' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: '厚さ', value: '5.5mm' },
      { label: '販売状況', value: '予約受付中' }
    ],
    tags: ['予約受付中', '極薄', 'eSIM専用'],
    status: 'pre-order',
    featured: true,
    summary: '5.5mmの極薄ボディに刷新されたA20搭載の次世代iPhone。eSIM専用化でさらに薄く。予約受付中。'
  },
  {
    id: 'sp-ip-06',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    price: 159800,
    priceText: '¥159,800 〜（旧モデル特別価格）',
    releaseDate: '2024-09',
    imageUrl: ph('SP-IP', 6),
    description: '前世代のPro Maxフラッグシップ。17シリーズ登場後も値下げの上で現行ラインナップに残る、コスパ重視の旧世代Pro。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A18 Pro' },
      { label: 'ディスプレイ', value: '6.9インチ Super Retina XDR' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '48MP Fusion + 48MP UW + 12MP テレフォト' },
      { label: '販売状況', value: '値下げの上で継続販売中' }
    ],
    tags: ['旧フラッグシップ', 'コスパ', 'チタン'],
    summary: '前世代Pro Max。17シリーズ登場後も値下げの上で現行ラインナップに残るコスパモデル。'
  },
  {
    id: 'sp-ip-07',
    typeCode: 'SP-IP',
    category: 'sp',
    subCategoryCode: 'SP-IP',
    name: 'iPhone SE (第4世代)',
    brand: 'Apple',
    price: 74800,
    releaseDate: '2025-02',
    imageUrl: ph('SP-IP', 7),
    description: 'ホームボタンを廃しFace ID化された新世代SE。A18チップ搭載で価格を抑えつつ性能を底上げしたコンパクトモデル。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A18' },
      { label: 'ディスプレイ', value: '6.1インチ Liquid Retina (Face ID)' },
      { label: 'ストレージ', value: '128GB 〜 512GB' },
      { label: 'カメラ', value: '48MP Fusion シングルカメラ' },
      { label: '通信', value: '5G' }
    ],
    tags: ['コンパクト', 'コスパ', 'Face ID'],
    summary: 'Face ID化された新世代SE。A18チップで性能を底上げしたコンパクトモデル。'
  },

  // ==================== SP — Android ====================
  {
    id: 'sp-ad-01',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'Pixel 10 Pro',
    brand: 'Google',
    price: 179800,
    releaseDate: '2025-08',
    imageUrl: ph('SP-AD', 1),
    description: 'Tensor G5搭載のGoogle純正フラッグシップ。AI機能とカメラがAndroid勢でも頭ひとつ抜けた完成度。7年間のOSアップデート保証も魅力。',
    specs: [
      { label: 'プロセッサ', value: 'Google Tensor G5' },
      { label: 'ディスプレイ', value: '6.3インチ LTPO OLED 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '50MP メイン + 48MP UW + 48MP テレフォト 5x' },
      { label: 'OS', value: 'Android 16 (7年アップデート保証)' }
    ],
    tags: ['AI機能', '純正Android', '長期サポート'],
    summary: 'Tensor G5搭載のGoogle純正機。AI機能とカメラが抜けており7年サポートも強み。'
  },
  {
    id: 'sp-ad-02',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 224700,
    releaseDate: '2025-02',
    imageUrl: ph('SP-AD', 2),
    description: 'Snapdragon 8 Elite for Galaxy + Sペン内蔵。200MPメインセンサーでAndroid最高峰のスペック。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite for Galaxy' },
      { label: 'ディスプレイ', value: '6.9インチ Dynamic AMOLED 2X 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '200MP メイン + 50MP UW + 50MP + 10MP テレフォト' },
      { label: 'ペン', value: 'Sペン内蔵' }
    ],
    tags: ['Sペン', 'ハイエンド', '高解像度カメラ'],
    summary: 'Snapdragon 8 Elite + Sペン内蔵。200MPカメラでAndroid最高峰のスペック。'
  },
  {
    id: 'sp-ad-03',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'Xperia 1 VII',
    brand: 'Sony',
    price: 209000,
    releaseDate: '2025-06',
    imageUrl: ph('SP-AD', 3),
    description: '4K HDR有機ELと光学望遠を継承するSonyフラッグシップ。映像制作者向けの本気機。3.5mmイヤホンジャックを搭載し、オーディオにも妥協しない姿勢が際立つ。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite' },
      { label: 'ディスプレイ', value: '6.5インチ 4K HDR OLED' },
      { label: 'ストレージ', value: '512GB' },
      { label: 'カメラ', value: '48MP + 12MP UW + 12MP 可変望遠' },
      { label: 'オーディオ', value: '3.5mmジャック搭載' }
    ],
    tags: ['映像制作', '4Kディスプレイ', 'イヤホンジャック'],
    summary: '4K HDR OLEDと光学望遠を持つSonyフラッグシップ。映像・音声に本気のモデル。'
  },
  {
    id: 'sp-ad-04',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'Xiaomi 15 Pro',
    brand: 'Xiaomi',
    price: 158000,
    releaseDate: '2024-10',
    imageUrl: ph('SP-AD', 4),
    description: 'Leicaと共同開発したカメラとSnapdragon 8 Eliteを高コスパで両立した中華フラッグシップ。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite' },
      { label: 'ディスプレイ', value: '6.73インチ LTPO AMOLED 120Hz' },
      { label: 'ストレージ', value: '512GB' },
      { label: 'カメラ', value: 'Leica 50MP × 3 (UW + メイン + テレフォト)' },
      { label: '充電', value: '90W有線 / 50Wワイヤレス' }
    ],
    tags: ['コスパ', 'Leica', '急速充電'],
    summary: 'Leica共同開発カメラ + Snapdragon 8 Eliteを15万台で実現。コスパ最強クラスのフラッグシップ。'
  },
  {
    id: 'sp-ad-05',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'AQUOS R10',
    brand: 'Sharp',
    price: 165000,
    releaseDate: '2025-07',
    imageUrl: ph('SP-AD', 5),
    description: '国産SharpのフラッグシップスマホAQUOS R10。Pro IGZO OLEDによる1〜240Hz可変リフレッシュレートディスプレイが省電力性能を高める。Leica共同開発カメラも搭載。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Gen 3' },
      { label: 'ディスプレイ', value: '6.5インチ Pro IGZO OLED 1〜240Hz' },
      { label: 'ストレージ', value: '256GB' },
      { label: 'カメラ', value: 'Leica 50.3MP + 50.3MP UW' },
      { label: '防水', value: 'IP68' }
    ],
    tags: ['国産', '省電力ディスプレイ', '防水'],
    summary: '国産Sharpのフラッグシップ。Pro IGZO OLEDによる省電力ディスプレイとLeicaカメラが特徴。'
  },
  {
    id: 'sp-ad-06',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'OnePlus 13',
    brand: 'OnePlus',
    price: 139800,
    releaseDate: '2025-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/OnePlus_13_front.jpg',
    description: 'Snapdragon 8 Elite + 6000mAhの大容量バッテリーを両立したパフォーマンス重視フラッグシップ。100W急速充電で実用性も高い。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite' },
      { label: 'ディスプレイ', value: '6.82インチ LTPO AMOLED 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 512GB' },
      { label: 'バッテリー', value: '6000mAh' },
      { label: '充電', value: '100W有線 / 50Wワイヤレス' }
    ],
    tags: ['大容量バッテリー', '急速充電', 'パフォーマンス'],
    summary: 'Snapdragon 8 Elite + 6000mAhを両立したパフォーマンス重視フラッグシップ。'
  },
  {
    id: 'sp-ad-07',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'nubia Z70 Ultra',
    brand: 'ZTE',
    price: 148000,
    releaseDate: '2024-12',
    imageUrl: ph('SP-AD', 7),
    description: 'アンダーディスプレイカメラを採用しノッチもパンチホールも排除した"完全な画面"を実現したゲーミング寄りフラッグシップ。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite' },
      { label: 'ディスプレイ', value: '6.85インチ アンダーディスプレイカメラ' },
      { label: 'ストレージ', value: '512GB' },
      { label: '冷却', value: 'VC立体冷却システム' },
      { label: '充電', value: '100W有線' }
    ],
    tags: ['アンダーディスプレイカメラ', 'ゲーミング', '冷却強化'],
    summary: 'アンダーディスプレイカメラで完全な画面を実現したゲーミング寄りフラッグシップ。'
  },
  {
    id: 'sp-ad-08',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'AQUOS sense9',
    brand: 'Sharp',
    price: 54800,
    releaseDate: '2024-11',
    imageUrl: ph('SP-AD', 8),
    description: '電池持ちと耐久性を重視したミドルレンジの国産定番機。IP68防水 + おサイフケータイ対応で日本市場に最適化されたバランス機。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 6 Gen 3' },
      { label: 'ディスプレイ', value: '6.1インチ IGZO OLED' },
      { label: 'ストレージ', value: '128GB' },
      { label: 'バッテリー', value: '5000mAh' },
      { label: '防水・FeliCa', value: 'IP68 / おサイフケータイ対応' }
    ],
    tags: ['国産', 'おサイフケータイ', 'ミドルレンジ'],
    summary: '電池持ちと耐久性重視の国産ミドルレンジ定番。おサイフケータイ対応で日本市場に最適化。'
  },
  {
    id: 'sp-ad-09',
    typeCode: 'SP-AD',
    category: 'sp',
    subCategoryCode: 'SP-AD',
    name: 'Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 159500,
    releaseDate: '2023-02',
    imageUrl: ph('SP-AD', 9),
    description: '200MPカメラとSペンを統合した2023年のフラッグシップ。S25 Ultraの登場により販売終了となったが、いまだ高い人気を誇るモデル。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Gen 2 for Galaxy' },
      { label: 'ディスプレイ', value: '6.8インチ Dynamic AMOLED 2X 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'カメラ', value: '200MP メイン + 50MP テレフォト' },
      { label: '販売状況', value: '生産終了' }
    ],
    tags: ['生産終了', 'Sペン', '旧フラッグシップ'],
    status: 'discontinued',
    summary: '200MPカメラ + Sペンの2023年フラッグシップ。S25 Ultra登場で販売終了となった旧モデル。'
  },

  // ==================== SP — 折りたたみ ====================
  {
    id: 'sp-fd-01',
    typeCode: 'SP-FD',
    category: 'sp',
    subCategoryCode: 'SP-FD',
    name: 'Galaxy Z Fold 6',
    brand: 'Samsung',
    price: 274780,
    releaseDate: '2024-07',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Samsung_Galaxy_Z_Fold6.png',
    description: '開けば7.6インチのタブレット、閉じれば普通のスマホ。書類仕事とマルチタスクに強い縦折り型の完成形。薄型化と軽量化が進み、折りたたみスマホの実用性がついに本物になった。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'メインディスプレイ', value: '7.6インチ Dynamic AMOLED 120Hz' },
      { label: '外部ディスプレイ', value: '6.3インチ Dynamic AMOLED 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: '重量', value: '239g' }
    ],
    tags: ['折りたたみ', 'タブレット形態', 'マルチタスク'],
    featured: true,
    summary: '開けば7.6インチのタブレット、閉じれば普通のスマホ。折りたたみの完成形。',
    features: ['7.6インチ内部ディスプレイ', '6.3インチ外部ディスプレイ', 'Sペン対応', 'マルチウィンドウ対応'],
    pros: ['1台でスマホとタブレットを兼ねる', '大画面での分割表示', '薄型・軽量化が進んだ'],
    cons: ['価格が高い', '厚みと重さは通常スマホより大きい'],
    purchaseLink: 'https://www.samsung.com/jp/smartphones/galaxy-z-fold6/'
  },
  {
    id: 'sp-fd-02',
    typeCode: 'SP-FD',
    category: 'sp',
    subCategoryCode: 'SP-FD',
    name: 'Pixel 10 Pro Fold',
    brand: 'Google',
    price: 269800,
    releaseDate: '2025-08',
    imageUrl: ph('SP-FD', 2),
    description: 'AIファースト思想で組み上げられた折りたたみ機。Geminiとの統合体験が最大の武器。8インチの大型内部ディスプレイと洗練されたUI体験が特徴。',
    specs: [
      { label: 'プロセッサ', value: 'Google Tensor G5' },
      { label: 'メインディスプレイ', value: '8インチ LTPO OLED 120Hz' },
      { label: '外部ディスプレイ', value: '6.4インチ Actua 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'AI', value: 'Gemini Nano on-device' }
    ],
    tags: ['折りたたみ', 'AI機能', 'Gemini'],
    summary: 'AIファースト設計のGoogle製折りたたみ。Gemini統合体験と8インチ大画面が武器。'
  },
  {
    id: 'sp-fd-03',
    typeCode: 'SP-FD',
    category: 'sp',
    subCategoryCode: 'SP-FD',
    name: 'Galaxy Z Flip 6',
    brand: 'Samsung',
    price: 159800,
    releaseDate: '2024-07',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/%E4%B8%89%E6%98%9FGalaxy_Z_Flip6.png',
    description: '縦折りコンパクト型の定番。閉じれば手のひらサイズ、開けば通常スマホとして使える携帯性重視の折りたたみ機。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'メインディスプレイ', value: '6.7インチ Dynamic AMOLED 120Hz' },
      { label: '外部ディスプレイ', value: '3.4インチ Super AMOLED' },
      { label: 'ストレージ', value: '256GB 〜 512GB' },
      { label: '重量', value: '187g' }
    ],
    tags: ['縦折り', 'コンパクト', '携帯性'],
    summary: '縦折りコンパクト型の定番。閉じれば手のひらサイズの携帯性重視な折りたたみ機。'
  },
  {
    id: 'sp-fd-04',
    typeCode: 'SP-FD',
    category: 'sp',
    subCategoryCode: 'SP-FD',
    name: 'Galaxy Z Fold 7',
    brand: 'Samsung',
    price: 289800,
    priceText: '¥289,800 〜',
    releaseDate: '2026-07',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Samsung_Galaxy_Fold7_Main_Screen_%28cropped%29.jpg',
    description: '薄型化が大幅に進んだ新世代Fold。折りたたみ部の段差を解消したヒンジ機構で、閉じた状態の質感が通常スマホに近づいた。予約受付中。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Elite Gen 5 for Galaxy' },
      { label: 'メインディスプレイ', value: '8インチ Dynamic AMOLED 120Hz' },
      { label: '外部ディスプレイ', value: '6.5インチ Dynamic AMOLED 120Hz' },
      { label: '厚さ', value: '8.9mm（折りたたみ時）' },
      { label: '販売状況', value: '予約受付中' }
    ],
    tags: ['予約受付中', '薄型化', 'タブレット形態'],
    status: 'pre-order',
    summary: '薄型化が大幅に進んだ新世代Fold。段差解消ヒンジで折りたたみ時の質感も向上。予約受付中。'
  },

  // ==================== TB — iPad ====================
  {
    id: 'tb-ip-01',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad Pro 13インチ M4',
    brand: 'Apple',
    price: 218800,
    priceText: '¥218,800 〜',
    releaseDate: '2024-05',
    imageUrl: ph('TB-IP', 1),
    description: 'Tandem OLED「Ultra Retina XDR」とM4を搭載した史上最薄のiPad Pro。ノートPCを凌ぐ性能を5.1mmの薄さに収めた、タブレットの到達点。Apple Pencil ProとMagic Keyboardで真のノート代替になる。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple M4' },
      { label: 'ディスプレイ', value: '13インチ Tandem OLED 120Hz' },
      { label: 'ストレージ',   value: '256GB 〜 2TB' },
      { label: 'ペン',         value: 'Apple Pencil Pro 対応' },
      { label: '厚さ',         value: '5.1mm' }
    ],
    tags: ['OLED', 'Apple Silicon', 'プロ向け'],
    featured: true,
    summary: 'Tandem OLEDとM4搭載の史上最薄iPad Pro。タブレットの到達点。',
    features: ['Tandem OLED Ultra Retina XDR', 'M4チップ', 'Apple Pencil Pro対応', '史上最薄5.1mm'],
    pros: ['ノートPC並みの性能', '圧倒的な薄さと軽さ', 'Tandem OLEDの美しい画面'],
    cons: ['高価', 'iPadOSの制限で一部作業はPCに劣る'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-ipad/ipad-pro'
  },
  {
    id: 'tb-ip-02',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad Air 13インチ M3',
    brand: 'Apple',
    price: 128800,
    priceText: '¥128,800 〜',
    releaseDate: '2025-03',
    imageUrl: ph('TB-IP', 2),
    description: 'M3搭載で性能を底上げした13インチAir。Proほどではないが軽量で日常使いに最適なバランス機。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple M3' },
      { label: 'ディスプレイ', value: '13インチ Liquid Retina' },
      { label: 'ストレージ',   value: '128GB 〜 1TB' },
      { label: 'ペン',         value: 'Apple Pencil Pro 対応' },
      { label: '重量',         value: '617g' }
    ],
    tags: ['バランス', 'Apple Silicon'],
    summary: 'M3搭載の13インチAir。ProとStandardの間のバランス機として最適。'
  },
  {
    id: 'tb-ip-03',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad mini 第7世代',
    brand: 'Apple',
    price: 84800,
    priceText: '¥84,800 〜',
    releaseDate: '2024-10',
    imageUrl: ph('TB-IP', 3),
    description: '片手で持てる8.3インチ。A17 Pro搭載でApple Intelligenceにも対応。持ち運びを最優先にしたコンパクトなiPad。',
    specs: [
      { label: 'プロセッサ',   value: 'Apple A17 Pro' },
      { label: 'ディスプレイ', value: '8.3インチ Liquid Retina' },
      { label: 'ストレージ',   value: '128GB 〜 512GB' },
      { label: 'ペン',         value: 'Apple Pencil Pro 対応' },
      { label: '重量',         value: '293g' }
    ],
    tags: ['コンパクト', '片手持ち'],
    summary: '片手で持てる8.3インチのiPad mini。A17 Pro搭載でApple Intelligenceにも対応。'
  },
  {
    id: 'tb-ip-04',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad 第11世代',
    brand: 'Apple',
    price: 58800,
    releaseDate: '2025-03',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/IPad_11_%28A16%29.png',
    description: 'A16チップ搭載でApple Intelligenceにも対応した無印iPad。価格を抑えつつ日常用途を十分カバーするスタンダードモデル。',
    specs: [
      { label: 'プロセッサ', value: 'Apple A16' },
      { label: 'ディスプレイ', value: '10.9インチ Liquid Retina' },
      { label: 'ストレージ', value: '128GB 〜 512GB' },
      { label: 'ペン', value: 'Apple Pencil (USB-C) 対応' },
      { label: '重量', value: '477g' }
    ],
    tags: ['スタンダード', 'コスパ', 'Apple Intelligence'],
    summary: 'A16搭載でApple Intelligence対応の無印iPad。価格を抑えつつ日常用途を十分カバー。'
  },
  {
    id: 'tb-ip-05',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad Pro 11インチ M4',
    brand: 'Apple',
    price: 159800,
    priceText: '¥159,800 〜',
    releaseDate: '2024-05',
    imageUrl: ph('TB-IP', 5),
    description: '13インチProの性能をそのままに、より持ち運びやすい11インチサイズに収めたモデル。Tandem OLEDと薄型ボディは共通。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M4' },
      { label: 'ディスプレイ', value: '11インチ Tandem OLED 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 2TB' },
      { label: 'ペン', value: 'Apple Pencil Pro 対応' },
      { label: '重量', value: '444g' }
    ],
    tags: ['OLED', 'Apple Silicon', '携帯性'],
    summary: '13インチProの性能を11インチサイズに凝縮。持ち運びやすさと性能を両立したモデル。'
  },
  {
    id: 'tb-ip-06',
    typeCode: 'TB-IP',
    category: 'tb',
    subCategoryCode: 'TB-IP',
    name: 'iPad Pro 13インチ M5',
    brand: 'Apple',
    price: 228800,
    priceText: '¥228,800 〜',
    releaseDate: '2026-10',
    imageUrl: ph('TB-IP', 6),
    description: 'M5チップ搭載で次世代Neural Engineを強化した新型iPad Pro。オンデバイスAI処理の高速化が最大のトピック。予約受付中。',
    specs: [
      { label: 'プロセッサ', value: 'Apple M5' },
      { label: 'ディスプレイ', value: '13インチ Tandem OLED 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 2TB' },
      { label: 'ペン', value: 'Apple Pencil Pro 対応' },
      { label: '販売状況', value: '予約受付中' }
    ],
    tags: ['予約受付中', 'AI処理強化', 'Apple Silicon'],
    status: 'pre-order',
    summary: 'M5搭載でNeural Engineを強化した新型iPad Pro。オンデバイスAI処理が高速化。予約受付中。'
  },

  // ==================== TB — Android ====================
  {
    id: 'tb-ad-01',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Galaxy Tab S10 Ultra',
    brand: 'Samsung',
    price: 184800,
    releaseDate: '2024-10',
    imageUrl: ph('TB-AD', 1),
    description: '14.6インチの巨大有機ELを纏うAndroidタブ最高峰。Sペン同梱でiPad Proの強力な対抗馬。大画面でのマルチタスクやドキュメント作業に最適。',
    specs: [
      { label: 'プロセッサ',   value: 'MediaTek Dimensity 9300+' },
      { label: 'ディスプレイ', value: '14.6インチ Dynamic AMOLED 2X 120Hz' },
      { label: 'ストレージ',   value: '256GB 〜 1TB' },
      { label: 'ペン',         value: 'Sペン同梱' },
      { label: '重量',         value: '718g' }
    ],
    tags: ['大画面', 'AMOLED', 'Sペン'],
    summary: '14.6インチAMOLED + Sペン同梱のAndroidタブ最高峰。iPad Proの強力な対抗馬。'
  },
  {
    id: 'tb-ad-02',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Pixel Tablet',
    brand: 'Google',
    price: 79800,
    releaseDate: '2023-06',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pixel_Tablet_front.svg/1920px-Pixel_Tablet_front.svg.png',
    description: '充電スピーカードック付属でスマートホームハブにも変身する独自路線のタブレット。置いておくだけで家のハブになる新しいタブレットの使い方を提案。',
    specs: [
      { label: 'プロセッサ',   value: 'Google Tensor G2' },
      { label: 'ディスプレイ', value: '10.95インチ LCD 60Hz' },
      { label: 'ストレージ',   value: '128GB / 256GB' },
      { label: '付属品',       value: '充電スピーカードック' },
      { label: '重量',         value: '493g' }
    ],
    tags: ['スマートホーム', 'ドック付属'],
    summary: '充電スピーカードック付属でスマートホームハブになるGoogle製タブレット。'
  },
  {
    id: 'tb-ad-03',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Xiaomi Pad 7 Pro',
    brand: 'Xiaomi',
    price: 79800,
    releaseDate: '2024-11',
    imageUrl: ph('TB-AD', 3),
    description: 'Snapdragon 8s Gen 3搭載で3.2K 144Hzディスプレイを8万円台で実現。中華タブのコスパ王。',
    specs: [
      { label: 'プロセッサ',   value: 'Snapdragon 8s Gen 3' },
      { label: 'ディスプレイ', value: '11.2インチ 3.2K 144Hz' },
      { label: 'ストレージ',   value: '256GB' },
      { label: '充電',         value: '67W急速充電' },
      { label: '重量',         value: '500g' }
    ],
    tags: ['コスパ', '高解像度', '高リフレッシュレート'],
    summary: 'Snapdragon 8s Gen 3 + 3.2K 144Hzを8万円台で。中華タブのコスパ王。'
  },
  {
    id: 'tb-ad-04',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Galaxy Tab S11',
    brand: 'Samsung',
    price: 139800,
    releaseDate: '2025-09',
    imageUrl: ph('TB-AD', 4),
    description: 'Sペン標準同梱のスタンダードSシリーズ最新作。AMOLEDディスプレイとDeXモードでPC的な使い方もできる万能タブレット。',
    specs: [
      { label: 'プロセッサ', value: 'MediaTek Dimensity 9400+' },
      { label: 'ディスプレイ', value: '11インチ Dynamic AMOLED 2X 120Hz' },
      { label: 'ストレージ', value: '256GB' },
      { label: 'ペン', value: 'Sペン同梱' },
      { label: 'DeX', value: 'Samsung DeXモード対応' }
    ],
    tags: ['Sペン', 'DeXモード', 'AMOLED'],
    summary: 'Sペン標準同梱のSシリーズ最新作。DeXモードでPC的な使い方もできる万能タブレット。'
  },
  {
    id: 'tb-ad-05',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Lenovo Tab P12',
    brand: 'Lenovo',
    price: 69800,
    releaseDate: '2024-06',
    imageUrl: ph('TB-AD', 5),
    description: '12.7インチの大画面に専用キーボード・ペンを別売対応した生産性重視のAndroidタブレット。4基のJBLスピーカー搭載でエンタメ用途も強い。',
    specs: [
      { label: 'プロセッサ', value: 'MediaTek Dimensity 7050' },
      { label: 'ディスプレイ', value: '12.7インチ 3K LCD 144Hz' },
      { label: 'ストレージ', value: '256GB' },
      { label: 'スピーカー', value: 'JBLスピーカー × 4' },
      { label: '重量', value: '610g' }
    ],
    tags: ['大画面', '高リフレッシュレート', 'JBLスピーカー'],
    summary: '12.7インチ144Hzの大画面Androidタブ。JBLスピーカー4基でエンタメ用途にも強い。'
  },
  {
    id: 'tb-ad-06',
    typeCode: 'TB-AD',
    category: 'tb',
    subCategoryCode: 'TB-AD',
    name: 'Galaxy Tab S9 Ultra',
    brand: 'Samsung',
    price: 174800,
    releaseDate: '2023-08',
    imageUrl: ph('TB-AD', 6),
    description: '14.6インチ有機ELを纏う前世代Ultra。S10 Ultraの登場とともに販売終了となったが、その大画面と性能は今も色褪せない。',
    specs: [
      { label: 'プロセッサ', value: 'Snapdragon 8 Gen 2 for Galaxy' },
      { label: 'ディスプレイ', value: '14.6インチ Dynamic AMOLED 2X 120Hz' },
      { label: 'ストレージ', value: '256GB 〜 1TB' },
      { label: 'ペン', value: 'Sペン同梱' },
      { label: '販売状況', value: '生産終了' }
    ],
    tags: ['生産終了', '大画面', '旧モデル'],
    status: 'discontinued',
    summary: '14.6インチ有機ELの前世代Ultra。S10 Ultra登場で販売終了となった大画面モデル。'
  },

  // ==================== TB — E-Ink ====================
  {
    id: 'tb-ei-01',
    typeCode: 'TB-EI',
    category: 'tb',
    subCategoryCode: 'TB-EI',
    name: 'Kindle Scribe',
    brand: 'Amazon',
    price: 47980,
    releaseDate: '2022-11',
    imageUrl: ph('TB-EI', 1),
    description: '10.2インチ大画面E-Inkに手書きペンを統合した読書・メモ専用機。読書とメモを一つの端末で完結できる、日常の知的作業のコンパニオン。',
    specs: [
      { label: 'ディスプレイ', value: '10.2インチ E-Ink Carta 1200' },
      { label: '解像度',       value: '300ppi' },
      { label: 'ストレージ',   value: '16GB 〜 64GB' },
      { label: 'ペン',         value: 'プレミアムペン付属' },
      { label: '重量',         value: '433g' }
    ],
    tags: ['E-Ink', '読書', '手書き'],
    summary: '10.2インチE-Ink + 手書きペンを統合したKindle。読書とメモを一台で。'
  },
  {
    id: 'tb-ei-02',
    typeCode: 'TB-EI',
    category: 'tb',
    subCategoryCode: 'TB-EI',
    name: 'reMarkable 2',
    brand: 'reMarkable',
    price: 69000,
    releaseDate: '2020-10',
    imageUrl: ph('TB-EI', 2),
    description: '紙のような書き心地に特化したE-Inkノート。SNSも通知もない"集中するためのタブレット"。4.7mmの薄さと403gの軽さで、ノートブックの代替として常に持ち歩ける。',
    specs: [
      { label: 'ディスプレイ', value: '10.3インチ CANVAS E-Ink' },
      { label: '解像度',       value: '226dpi' },
      { label: 'ストレージ',   value: '8GB' },
      { label: '厚さ',         value: '4.7mm' },
      { label: '重量',         value: '403g' }
    ],
    tags: ['E-Ink', 'ペーパーライク', '集中'],
    summary: '紙のような書き心地に特化したE-Inkノート。通知なし、集中のためのタブレット。'
  },
  {
    id: 'tb-ei-03',
    typeCode: 'TB-EI',
    category: 'tb',
    subCategoryCode: 'TB-EI',
    name: 'Kindle Paperwhite 第12世代',
    brand: 'Amazon',
    price: 19980,
    releaseDate: '2024-10',
    imageUrl: ph('TB-EI', 3),
    description: '7インチに大型化したPaperwhite。ページめくり25%高速化で読書体験が大幅に進化。IPX8防水でお風呂読書も安心。',
    specs: [
      { label: 'ディスプレイ', value: '7インチ E-Ink Carta 1300' },
      { label: '解像度',       value: '300ppi' },
      { label: 'ストレージ',   value: '16GB' },
      { label: '防水',         value: 'IPX8' },
      { label: 'バッテリー',   value: '最大12週間' }
    ],
    tags: ['E-Ink', '読書', '防水'],
    summary: '7インチに大型化した第12世代Paperwhite。IPX8防水で読書体験が大幅進化。'
  },
  {
    id: 'tb-ei-04',
    typeCode: 'TB-EI',
    category: 'tb',
    subCategoryCode: 'TB-EI',
    name: 'BOOX Note Air4 C',
    brand: 'Onyx',
    price: 79800,
    releaseDate: '2024-08',
    imageUrl: ph('TB-EI', 4),
    description: 'カラーE-Ink「Kaleido 3」搭載でPDF注釈やイラストもカラーで楽しめる多機能E-Inkタブレット。Android OS搭載でアプリも自由にインストール可能。',
    specs: [
      { label: 'ディスプレイ', value: '10.3インチ Kaleido 3 カラーE-Ink' },
      { label: 'OS', value: 'Android 13' },
      { label: 'ストレージ', value: '64GB' },
      { label: 'ペン', value: '電磁誘導ペン付属' },
      { label: '重量', value: '420g' }
    ],
    tags: ['カラーE-Ink', 'Android搭載', '多機能'],
    summary: 'カラーE-Ink「Kaleido 3」搭載の多機能タブレット。Android OSでアプリも自由に追加可能。'
  },
  {
    id: 'tb-ei-05',
    typeCode: 'TB-EI',
    category: 'tb',
    subCategoryCode: 'TB-EI',
    name: 'Kobo Elipsa 2E',
    brand: 'Rakuten Kobo',
    price: 54980,
    releaseDate: '2023-09',
    imageUrl: ph('TB-EI', 5),
    description: '10.3インチの大画面E-Inkに手書きノート機能を統合した楽天Koboのフラッグシップ。スタイラスペン付属でPDF注釈にも対応。',
    specs: [
      { label: 'ディスプレイ', value: '10.3インチ E-Ink Carta 1200' },
      { label: '解像度', value: '227ppi' },
      { label: 'ストレージ', value: '32GB' },
      { label: 'ペン', value: 'Koboスタイラス2付属' },
      { label: '重量', value: '390g' }
    ],
    tags: ['E-Ink', '手書きノート', '楽天'],
    summary: '10.3インチE-Ink + 手書きノート機能を統合した楽天Koboのフラッグシップ。'
  },

  // ==================== TB — 液タブ ====================
  {
    id: 'tb-dw-01',
    typeCode: 'TB-DW',
    category: 'tb',
    subCategoryCode: 'TB-DW',
    name: 'Wacom Cintiq Pro 16',
    brand: 'Wacom',
    price: 209000,
    releaseDate: '2023-09',
    imageUrl: ph('TB-DW', 1),
    description: 'プロのイラストレーター御用達。4K HDR液タブの定番モデル。Pro Pen 3で筆圧8192段階の表現力を実現。Adobe RGB 98%の広色域と液晶の精度がプロの要求に応える。',
    specs: [
      { label: 'ディスプレイ', value: '15.6インチ 4K UHD HDR' },
      { label: '色域',         value: 'Adobe RGB 98%' },
      { label: '筆圧',         value: 'Pro Pen 3 / 8192段階' },
      { label: '接続',         value: 'USB-C / HDMI' },
      { label: '重量',         value: '1.85kg' }
    ],
    tags: ['液タブ', 'プロ向け', '4K HDR'],
    featured: true,
    summary: 'プロ御用達の4K HDR液タブ。Pro Pen 3で筆圧8192段階の表現力。',
    features: ['15.6インチ 4K UHD HDR', 'Adobe RGB 98%色域', 'Pro Pen 3 / 筆圧8192段階', 'USB-C / HDMI接続'],
    pros: ['業界標準の描画精度', '優秀な色再現性', 'プロに信頼されるWacomブランド'],
    cons: ['価格が高い', 'PC本体が別途必要'],
    purchaseLink: 'https://www.wacom.com/ja-jp/products/pen-displays/wacom-cintiq-pro-16'
  },
  {
    id: 'tb-dw-02',
    typeCode: 'TB-DW',
    category: 'tb',
    subCategoryCode: 'TB-DW',
    name: 'Huion Kamvas Pro 19',
    brand: 'Huion',
    price: 89800,
    releaseDate: '2024-03',
    imageUrl: ph('TB-DW', 2),
    description: 'Wacomより手頃な価格でフル機能を備えるコスパ系液タブ。PenTech 3.0採用で8192段階の筆圧と傾き検知に対応。',
    specs: [
      { label: 'ディスプレイ', value: '18.4インチ 2.5K アンチグレア' },
      { label: '色域', value: 'Adobe RGB 92%' },
      { label: '筆圧', value: 'PenTech 3.0 / 8192段階' },
      { label: '接続', value: 'USB-C 1本接続' },
      { label: '重量', value: '2.4kg' }
    ],
    tags: ['液タブ', 'コスパ', '高筆圧感知'],
    summary: 'Wacomより手頃なコスパ系液タブ。PenTech 3.0で8192段階の筆圧検知に対応。'
  },
  {
    id: 'tb-dw-03',
    typeCode: 'TB-DW',
    category: 'tb',
    subCategoryCode: 'TB-DW',
    name: 'XP-Pen Artist Pro 16',
    brand: 'XP-Pen',
    price: 64800,
    releaseDate: '2023-11',
    imageUrl: ph('TB-DW', 3),
    description: 'エントリー〜中級者向けのバランス型液タブ。X3スマートチップ採用ペンはバッテリー不要で取り回しが良い。',
    specs: [
      { label: 'ディスプレイ', value: '15.6インチ フルHD' },
      { label: '色域', value: 'sRGB 92%' },
      { label: '筆圧', value: 'X3スマートチップ / 8192段階' },
      { label: '接続', value: 'USB-C / HDMI' },
      { label: '重量', value: '1.1kg' }
    ],
    tags: ['液タブ', 'エントリー向け', 'バッテリー不要ペン'],
    summary: 'エントリー〜中級者向けバランス型液タブ。バッテリー不要ペンで取り回しが良い。'
  },

  // ==================== AU — イヤホン ====================
  {
    id: 'au-eb-01',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'AirPods Pro 3',
    brand: 'Apple',
    price: 39800,
    releaseDate: '2025-09',
    imageUrl: ph('AU-EB', 1),
    description: 'H3チップで進化したノイキャンとオーディオ品質。心拍計内蔵で健康トラッキングにも対応。iPhoneとの深い統合でシームレスな体験を提供するApple最高峰のTWSイヤホン。',
    specs: [
      { label: 'チップ',     value: 'Apple H3' },
      { label: 'ノイキャン', value: 'アクティブノイズキャンセリング' },
      { label: '防水',       value: 'IP57' },
      { label: 'バッテリー', value: '最大8時間 (ANC ON時)' },
      { label: '追加機能',   value: '心拍計内蔵' }
    ],
    tags: ['ノイキャン', '心拍計', 'Apple'],
    featured: true,
    summary: 'H3チップで進化したノイキャン + 心拍計内蔵。Apple最高峰のTWSイヤホン。',
    features: ['H3チップ搭載', 'アクティブノイズキャンセリング', '心拍計内蔵', 'IP57防水'],
    pros: ['AppleデバイスとのシームレスなH2連携', '優れたノイキャン性能', '空間オーディオ対応'],
    cons: ['Androidでは一部機能が使えない', '充電ケース込みで少し大きめ'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-airpods/airpods-pro'
  },
  {
    id: 'au-eb-02',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'WF-1000XM5',
    brand: 'Sony',
    price: 41800,
    releaseDate: '2023-09',
    imageUrl: ph('AU-EB', 2),
    description: 'Sonyのノイキャンイヤホン最高峰。装着感を改善した第5世代モデル。LDACハイレゾワイヤレス対応で音質面でも妥協しない。',
    specs: [
      { label: 'ドライバー', value: '8.4mm ダイナミック X' },
      { label: 'ノイキャン', value: 'デュアルプロセッサー / 6マイク' },
      { label: 'コーデック', value: 'LDAC / LC3 対応' },
      { label: 'バッテリー', value: '最大8時間 (ANC ON時)' },
      { label: '防水',       value: 'IPX4' }
    ],
    tags: ['ノイキャン', 'ハイレゾ', 'LDAC'],
    summary: 'ノイキャンTWSの定番。LDAC対応でハイレゾワイヤレスも楽しめるSony最高峰。'
  },
  {
    id: 'au-eb-03',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'QuietComfort Ultra Earbuds',
    brand: 'Bose',
    price: 39600,
    releaseDate: '2023-10',
    imageUrl: ph('AU-EB', 3),
    description: 'BoseのImmersive Audioでヘッドフォン定位を再現。ノイキャン性能はクラス最高峰。CustomTuneが装着のたびに音質を最適化する。',
    specs: [
      { label: 'ノイキャン', value: 'CustomTune + Immersive Audio' },
      { label: 'コーデック', value: 'Snapdragon Sound / aptX Adaptive' },
      { label: 'バッテリー', value: '最大6時間 (ANC ON時)' },
      { label: '防水',       value: 'IPX4' },
      { label: '重量',       value: '6.24g (片耳)' }
    ],
    tags: ['ノイキャン', '空間オーディオ', 'Bose'],
    summary: 'Immersive Audio搭載のBose最高峰TWSイヤホン。ノイキャン性能もクラストップ。'
  },
  {
    id: 'au-eb-04',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'Pixel Buds Pro 2',
    brand: 'Google',
    price: 36800,
    releaseDate: '2024-09',
    imageUrl: ph('AU-EB', 4),
    description: 'Tensor A1チップ搭載のGoogle純正TWSイヤホン。Geminiとの統合に最適化されたAI体験が特徴。',
    specs: [
      { label: 'チップ',     value: 'Tensor A1' },
      { label: 'ノイキャン', value: 'Silent Seal 2.0' },
      { label: '重量',       value: '4.7g (片耳)' },
      { label: 'バッテリー', value: '最大8時間 (ANC ON時)' },
      { label: '防水',       value: 'IP54' }
    ],
    tags: ['ノイキャン', 'AI機能', '軽量'],
    summary: 'Tensor A1チップ搭載のGoogle純正TWSイヤホン。Gemini統合でAI体験も抜群。'
  },
  {
    id: 'au-eb-05',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'Technics EAH-AZ100',
    brand: 'Technics',
    price: 39800,
    releaseDate: '2024-06',
    imageUrl: ph('AU-EB', 5),
    description: 'オーディオブランドTechnicsが手がけるハイエンドTWS。JustEar技術による高精度ノイキャンと音楽再生時の自然な定位が特徴。',
    specs: [
      { label: 'ドライバー', value: '10mm フリーエッジダイアフラム' },
      { label: 'ノイキャン', value: 'JustEar技術 / デュアルマイク' },
      { label: 'コーデック', value: 'LDAC対応' },
      { label: 'バッテリー', value: '最大7時間 (ANC ON時)' },
      { label: '防水', value: 'IPX4' }
    ],
    tags: ['ノイキャン', 'ハイレゾ', 'Technics'],
    summary: 'Technics製ハイエンドTWS。JustEar技術で高精度ノイキャンと自然な音場定位を実現。'
  },
  {
    id: 'au-eb-06',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'Nothing Ear (2025)',
    brand: 'Nothing',
    price: 24800,
    releaseDate: '2025-03',
    imageUrl: ph('AU-EB', 6),
    description: '透明筐体のデザイン性で人気のNothing製TWS。Personal Sound機能による個人最適化されたイコライジングが特徴。',
    specs: [
      { label: 'ドライバー', value: '11mmカスタムドライバー' },
      { label: 'ノイキャン', value: 'ハイブリッドANC 最大45dB' },
      { label: 'デザイン', value: '透明筐体' },
      { label: 'バッテリー', value: '最大5.5時間 (ANC ON時)' },
      { label: '防水', value: 'IP54' }
    ],
    tags: ['デザイン性', '透明筐体', 'パーソナライズ音質'],
    summary: '透明筐体デザインで人気のNothing製TWS。Personal Sound機能で個人最適化された音質。'
  },
  {
    id: 'au-eb-07',
    typeCode: 'AU-EB',
    category: 'au',
    subCategoryCode: 'AU-EB',
    name: 'WF-1000XM5 — 15th Anniversary Edition',
    brand: 'Sony',
    price: 47800,
    releaseDate: '2024-12',
    imageUrl: ph('AU-EB', 7),
    description: 'Sonyワイヤレスオーディオ15周年を記念した数量限定カラーモデル。スペックはXM5標準仕様と同一で、専用パッケージと刻印が付与される。',
    specs: [
      { label: 'ドライバー', value: '8.4mm ダイナミック X' },
      { label: 'ノイキャン', value: 'デュアルプロセッサー / 6マイク' },
      { label: 'コーデック', value: 'LDAC / LC3 対応' },
      { label: '限定要素', value: '記念刻印 / 専用パッケージ' },
      { label: '販売状況', value: '数量限定' }
    ],
    tags: ['限定モデル', 'ノイキャン', '記念モデル'],
    status: 'limited',
    summary: 'Sony15周年記念の数量限定カラーモデル。スペックはXM5標準と同一で記念刻印付き。'
  },

  // ==================== AU — ヘッドホン ====================
  {
    id: 'au-hp-01',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'WH-1000XM5',
    brand: 'Sony',
    price: 59400,
    releaseDate: '2022-05',
    imageUrl: ph('AU-HP', 1),
    description: 'ノイキャンヘッドホンの王者として君臨するSonyのフラッグシップ。30mmドライバーと8マイク構成で静寂と音質を両立。LDAC対応でハイレゾワイヤレスも楽しめる。',
    specs: [
      { label: 'ドライバー', value: '30mm カーボンファイバーコンポジット' },
      { label: 'ノイキャン', value: 'デュアルプロセッサー / 8マイク' },
      { label: 'コーデック', value: 'LDAC 対応' },
      { label: 'バッテリー', value: '最大30時間 (ANC ON時)' },
      { label: '重量',       value: '250g' }
    ],
    tags: ['ノイキャン', 'ハイレゾ', '定番'],
    featured: true,
    summary: 'ノイキャンヘッドホンの王者。30mmドライバー+8マイクで静寂と音質を両立。',
    features: ['30mmカーボンファイバーコンポジットドライバー', 'デュアルプロセッサー + 8マイクNC', 'LDAC対応', '最大30時間バッテリー'],
    pros: ['業界最高水準のノイキャン', 'LDAC対応のハイレゾ音質', '30時間の長時間バッテリー'],
    cons: ['折りたためず携帯性がやや劣る', '有線使用時は音質がやや落ちる'],
    purchaseLink: 'https://www.sony.jp/headphone/products/WH-1000XM5/'
  },
  {
    id: 'au-hp-02',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'AirPods Max (USB-C)',
    brand: 'Apple',
    price: 84800,
    releaseDate: '2024-09',
    imageUrl: ph('AU-HP', 2),
    description: 'USB-C化と新色採用でリフレッシュされたApple純正オーバーイヤーヘッドホン。H1チップで空間オーディオも完備。アルミニウムとメッシュ素材の高品質な質感が際立つ。',
    specs: [
      { label: 'チップ',     value: 'Apple H1' },
      { label: 'ドライバー', value: '40mm ダイナミック' },
      { label: 'ノイキャン', value: 'アクティブノイズキャンセリング' },
      { label: '接続',       value: 'USB-C / ワイヤレス' },
      { label: '重量',       value: '384.8g' }
    ],
    tags: ['Apple', '空間オーディオ', 'アルミ筐体'],
    summary: 'USB-C化されたApple純正ヘッドホン。H1チップで空間オーディオも完備。'
  },
  {
    id: 'au-hp-03',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'QuietComfort Ultra Headphones',
    brand: 'Bose',
    price: 59400,
    releaseDate: '2023-10',
    imageUrl: ph('AU-HP', 3),
    description: 'Bose伝統のノイキャン技術にImmersive Audioを統合した最新フラッグシップ。aptX Adaptive対応で高音質ワイヤレスにも対応。',
    specs: [
      { label: 'ノイキャン',     value: 'CustomTune テクノロジー' },
      { label: '空間オーディオ', value: 'Immersive Audio' },
      { label: 'コーデック',     value: 'aptX Adaptive / Snapdragon Sound' },
      { label: 'バッテリー',     value: '最大24時間 (ANC ON時)' },
      { label: '重量',           value: '253g' }
    ],
    tags: ['ノイキャン', '空間オーディオ', 'Bose'],
    summary: 'Immersive Audio統合のBose最高峰ヘッドホン。CustomTuneで自動音質最適化。'
  },
  {
    id: 'au-hp-04',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'ATH-M50xBT2',
    brand: 'audio-technica',
    price: 27500,
    releaseDate: '2023-09',
    imageUrl: ph('AU-HP', 4),
    description: 'モニターヘッドホンの定番M50xをワイヤレス化。プロの現場で培われたフラットな音作りと有線/ワイヤレス両対応の柔軟性が魅力。',
    specs: [
      { label: 'ドライバー', value: '45mm ダイナミック' },
      { label: '接続', value: 'Bluetooth 5.2 / 有線3.5mm' },
      { label: 'コーデック', value: 'LDAC / aptX HD' },
      { label: 'バッテリー', value: '最大50時間' },
      { label: '重量', value: '294g' }
    ],
    tags: ['モニターヘッドホン', 'フラット音質', 'プロ用途'],
    summary: '定番モニターヘッドホンM50xのワイヤレス版。フラットな音作りと長時間バッテリーが魅力。'
  },
  {
    id: 'au-hp-05',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'HD 660S2',
    brand: 'Sennheiser',
    price: 79200,
    releaseDate: '2023-04',
    imageUrl: ph('AU-HP', 5),
    description: 'オープン型ハイファイヘッドホンの定番HD 660シリーズ最新作。低域の量感が増しつつ、Sennheiserらしい解像感の高い音場表現を継承。',
    specs: [
      { label: 'ドライバー', value: '38mm ダイナミック (オープン型)' },
      { label: 'インピーダンス', value: '300Ω' },
      { label: '接続', value: '有線 6.3mm / 4.4mmバランス' },
      { label: '周波数特性', value: '8Hz 〜 41.5kHz' },
      { label: '重量', value: '260g' }
    ],
    tags: ['オープン型', 'ハイファイ', '有線'],
    summary: 'オープン型ハイファイの定番HD 660最新作。解像感の高い音場表現はそのままに低域が強化。'
  },
  {
    id: 'au-hp-06',
    typeCode: 'AU-HP',
    category: 'au',
    subCategoryCode: 'AU-HP',
    name: 'AirPods Max 2',
    brand: 'Apple',
    price: 89800,
    priceText: '¥89,800 〜',
    releaseDate: '2026-11',
    imageUrl: ph('AU-HP', 6),
    description: 'H3チップと新設計ドライバーを搭載した次世代AirPods Max。軽量化されたヘッドバンドと強化されたノイキャン性能が予告されている。予約受付中。',
    specs: [
      { label: 'チップ', value: 'Apple H3' },
      { label: 'ドライバー', value: '40mm 新設計ダイナミック' },
      { label: 'ノイキャン', value: '強化版アクティブノイズキャンセリング' },
      { label: '軽量化', value: 'ヘッドバンド素材刷新' },
      { label: '販売状況', value: '予約受付中' }
    ],
    tags: ['予約受付中', '空間オーディオ', 'Apple'],
    status: 'pre-order',
    summary: 'H3チップ + 新設計ドライバーの次世代AirPods Max。軽量化とノイキャン強化を予告。予約受付中。'
  },

  // ==================== AU — スピーカー ====================
  {
    id: 'au-sp-01',
    typeCode: 'AU-SP',
    category: 'au',
    subCategoryCode: 'AU-SP',
    name: 'HomePod 第2世代',
    brand: 'Apple',
    price: 44800,
    releaseDate: '2023-02',
    imageUrl: ph('AU-SP', 1),
    description: 'S7チップ搭載で空間オーディオに対応。Apple Music / Siri / HomeKit のハブとして機能する、Apple純正スマートスピーカーの完成形。Dolby Atmosにも対応する。',
    specs: [
      { label: 'ドライバー', value: '4インチ ウーファー + 5基ツイーター' },
      { label: 'チップ',     value: 'Apple S7' },
      { label: '対応',       value: '空間オーディオ / Dolby Atmos' },
      { label: 'ハブ機能',   value: 'HomeKit / Matter / Thread' },
      { label: '重量',       value: '2.3kg' }
    ],
    tags: ['スマートスピーカー', '空間オーディオ', 'HomeKit'],
    summary: 'S7チップ搭載のApple純正スマートスピーカー。HomeKitハブ機能と空間オーディオ対応。'
  },
  {
    id: 'au-sp-02',
    typeCode: 'AU-SP',
    category: 'au',
    subCategoryCode: 'AU-SP',
    name: 'Sonos Era 300',
    brand: 'Sonos',
    price: 69800,
    releaseDate: '2023-03',
    imageUrl: ph('AU-SP', 2),
    description: '6基のドライバーで上方発音もカバーする空間オーディオ対応スピーカー。マルチルーム展開に強いSonosエコシステムの中核機。Apple Music空間オーディオにも対応。',
    specs: [
      { label: 'ドライバー', value: 'ツイーター×4 + ウーファー×2' },
      { label: '対応',       value: 'Dolby Atmos / Apple Music 空間オーディオ' },
      { label: '接続',       value: 'Wi-Fi 6 / Bluetooth / AirPlay 2' },
      { label: 'マイク',     value: 'Trueplayチューニング対応' },
      { label: '重量',       value: '4.47kg' }
    ],
    tags: ['空間オーディオ', 'Sonos', 'マルチルーム'],
    summary: '上方発音対応の6ドライバー空間オーディオスピーカー。Sonosマルチルームの中核機。'
  },
  {
    id: 'au-sp-03',
    typeCode: 'AU-SP',
    category: 'au',
    subCategoryCode: 'AU-SP',
    name: 'Bose SoundLink Max',
    brand: 'Bose',
    price: 49500,
    releaseDate: '2024-05',
    imageUrl: ph('AU-SP', 3),
    description: '屋外利用を見据えたタフネス設計のポータブルスピーカー。IP67防水防塵と20時間バッテリーでアウトドアシーンに強い。',
    specs: [
      { label: '出力', value: 'デュアルドライバー + パッシブラジエーター' },
      { label: '防水防塵', value: 'IP67' },
      { label: 'バッテリー', value: '最大20時間' },
      { label: '接続', value: 'Bluetooth 5.3 / 複数台ステレオペア対応' },
      { label: '重量', value: '1.4kg' }
    ],
    tags: ['ポータブル', '防水防塵', 'アウトドア'],
    summary: 'タフネス設計のポータブルスピーカー。IP67防水防塵 + 20時間バッテリーでアウトドアに強い。'
  },
  {
    id: 'au-sp-04',
    typeCode: 'AU-SP',
    category: 'au',
    subCategoryCode: 'AU-SP',
    name: 'Marshall Stanmore III',
    brand: 'Marshall',
    price: 54780,
    releaseDate: '2023-07',
    imageUrl: ph('AU-SP', 4),
    description: 'アンプを思わせるレトロデザインが特徴のホームスピーカー。真鍮製コントロールノブで音量・低音・高音を直感的に調整できる。',
    specs: [
      { label: '出力', value: '80W クラスD' },
      { label: '接続', value: 'Bluetooth 5.2 / RCA / 3.5mm' },
      { label: 'デザイン', value: 'レトロアンプ調筐体' },
      { label: '操作', value: '真鍮製アナログノブ' },
      { label: '重量', value: '5.05kg' }
    ],
    tags: ['レトロデザイン', 'ホームスピーカー', 'アナログ操作'],
    summary: 'レトロアンプ調デザインのホームスピーカー。真鍮ノブで音量・音質を直感的に調整可能。'
  },

  // ==================== AU — DAC/アンプ ====================
  {
    id: 'au-dac-01',
    typeCode: 'AU-DAC',
    category: 'au',
    subCategoryCode: 'AU-DAC',
    name: 'FiiO K11',
    brand: 'FiiO',
    price: 19800,
    releaseDate: '2023-12',
    imageUrl: ph('AU-DAC', 1),
    description: 'デスクトップDAC兼ヘッドホンアンプのコスパ王。1377mWのハイパワー出力で平面駆動型ヘッドホンも鳴らせる。Cirrus Logic CS43198のデュアルDAC構成。',
    specs: [
      { label: 'DAC',    value: 'Cirrus Logic CS43198' },
      { label: '出力',   value: '1377mW @ 32Ω (バランス)' },
      { label: '対応',   value: 'PCM 768kHz / DSD256' },
      { label: '端子',   value: '4.4mm + 6.35mm ヘッドホン出力' },
      { label: '接続',   value: 'USB-C / 光 / 同軸' }
    ],
    tags: ['DAC', 'ヘッドホンアンプ', 'デスクトップ'],
    summary: 'コスパ最強のデスクトップDAC/アンプ。1377mW出力で平面駆動型ヘッドホンも駆動可能。'
  },
  {
    id: 'au-dac-02',
    typeCode: 'AU-DAC',
    category: 'au',
    subCategoryCode: 'AU-DAC',
    name: 'iFi ZEN DAC 3',
    brand: 'iFi audio',
    price: 28800,
    releaseDate: '2024-02',
    imageUrl: ph('AU-DAC', 2),
    description: 'バランス出力対応のミドルクラスDAC兼ヘッドホンアンプ。MQAフルデコードとXBassアナログ回路でリスニング体験を底上げする。',
    specs: [
      { label: 'DAC', value: 'バーブラウン製DACチップ' },
      { label: 'MQA', value: 'フルデコード対応' },
      { label: '出力', value: '4.4mmバランス / 6.35mmアンバランス' },
      { label: '対応', value: 'PCM 768kHz / DSD512' },
      { label: '接続', value: 'USB-B / 光 / 同軸' }
    ],
    tags: ['DAC', 'MQA対応', 'バランス出力'],
    summary: 'バランス出力対応のミドルクラスDAC。MQAフルデコードでリスニング体験を底上げ。'
  },
  {
    id: 'au-dac-03',
    typeCode: 'AU-DAC',
    category: 'au',
    subCategoryCode: 'AU-DAC',
    name: 'Chord Mojo 2',
    brand: 'Chord Electronics',
    price: 79200,
    releaseDate: '2022-06',
    imageUrl: ph('AU-DAC', 3),
    description: 'ポータブルDACアンプの最高峰。独自FPGA設計とカラフルなボール型ボリュームが特徴のイギリス製ハイエンド機。',
    specs: [
      { label: 'DAC', value: '独自FPGA設計' },
      { label: '出力', value: '600mW (32Ω負荷時)' },
      { label: '対応', value: 'PCM 768kHz / DSD256' },
      { label: 'バッテリー', value: '最大8時間' },
      { label: '重量', value: '186g' }
    ],
    tags: ['ポータブルDAC', 'ハイエンド', '独自FPGA'],
    summary: 'ポータブルDACアンプの最高峰。独自FPGA設計のイギリス製ハイエンド機。'
  },

  // ==================== PR — キーボード ====================
  {
    id: 'pr-kb-01',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'Magic Keyboard Touch ID + テンキー',
    brand: 'Apple',
    price: 19800,
    releaseDate: '2024-03',
    imageUrl: ph('PR-KB', 1),
    description: 'USB-C化されたApple純正キーボード。Touch ID対応でMacのロック解除がワンタッチに。Bluetooth接続とUSB-C有線接続の両方に対応する完成度の高い純正キーボード。',
    specs: [
      { label: '接続',     value: 'Bluetooth / USB-C有線' },
      { label: '認証',     value: 'Touch ID内蔵' },
      { label: 'テンキー', value: 'あり' },
      { label: 'バッテリー', value: '約1ヶ月' },
      { label: '対応',     value: 'Mac / iPad' }
    ],
    tags: ['Apple', 'Touch ID', 'USB-C'],
    summary: 'USB-C + Touch ID搭載のApple純正キーボード。MacとiPadの両方で使える。'
  },
  {
    id: 'pr-kb-02',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'HHKB Professional HYBRID Type-S',
    brand: 'PFU',
    price: 36850,
    releaseDate: '2019-12',
    imageUrl: ph('PR-KB', 2),
    description: 'プログラマー御用達の60%静電容量無接点キーボード。Bluetooth × 4台 + USB-C対応のハイブリッド版。Type-Sは静音仕様で打鍵音が非常に静か。',
    specs: [
      { label: 'キー方式', value: '静電容量無接点 / Type-S（静音）' },
      { label: 'キー数',   value: '60キー' },
      { label: '接続',     value: 'Bluetooth × 4台 / USB-C' },
      { label: '電源',     value: '単3電池 × 2 / USB' },
      { label: '重量',     value: '540g' }
    ],
    tags: ['プログラマー御用達', '静電容量無接点', '60%'],
    summary: 'プログラマー御用達の60%静電容量無接点。Bluetooth×4台 + USB-Cのハイブリッド版。'
  },
  {
    id: 'pr-kb-03',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'Keychron Q1 Pro',
    brand: 'Keychron',
    price: 35900,
    releaseDate: '2023-06',
    imageUrl: ph('PR-KB', 3),
    description: '75%レイアウトのCNC削り出しアルミメカニカルキーボード。VIA / QMK対応でフルカスタム可能。Bluetooth・USB-C・2.4GHzの3接続モードに対応。',
    specs: [
      { label: 'レイアウト',   value: '75%' },
      { label: 'スイッチ',     value: 'Gateron G Pro（ホットスワップ対応）' },
      { label: '筐体',         value: 'CNC削り出しアルミ' },
      { label: '接続',         value: 'Bluetooth / USB-C / 2.4GHz' },
      { label: 'ファームウェア', value: 'VIA / QMK 対応' }
    ],
    tags: ['メカニカル', 'カスタム可能', 'アルミ筐体'],
    summary: '75%アルミメカニカルキーボード。VIA/QMK対応のフルカスタム機で3接続モード対応。'
  },
  {
    id: 'pr-kb-04',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'Realforce R3',
    brand: 'Topre',
    price: 33000,
    releaseDate: '2023-10',
    imageUrl: ph('PR-KB', 4),
    description: '静電容量無接点方式の最高峰として名高いRealforceシリーズ最新作。APC機能でキー荷重を1キーごとに自由設定可能。',
    specs: [
      { label: 'キー方式', value: '静電容量無接点' },
      { label: 'APC機能', value: 'キー荷重を1キーずつ設定可能' },
      { label: '接続', value: 'Bluetooth / USB-C有線' },
      { label: 'レイアウト', value: '日本語配列 / 英語配列' },
      { label: '重量', value: '1.1kg' }
    ],
    tags: ['静電容量無接点', 'APC機能', '高級キーボード'],
    summary: '静電容量無接点の最高峰Realforce最新作。APC機能でキー荷重を自由に調整可能。'
  },
  {
    id: 'pr-kb-05',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'Logicool MX Mechanical Mini',
    brand: 'Logicool',
    price: 22000,
    releaseDate: '2022-09',
    imageUrl: ph('PR-KB', 5),
    description: 'テンキーレスのコンパクトメカニカル。静音タクタイルスイッチとバックライトキーでオフィスでも使いやすい一台。',
    specs: [
      { label: 'レイアウト', value: '75% テンキーレス' },
      { label: 'スイッチ', value: '静音タクタイル' },
      { label: '接続', value: 'Bluetooth / Logi Bolt USB' },
      { label: 'バックライト', value: '自動調光キーバックライト' },
      { label: '対応', value: 'Windows / macOS / iPadOS' }
    ],
    tags: ['メカニカル', '静音', 'コンパクト'],
    summary: 'テンキーレスのコンパクトメカニカル。静音タクタイルスイッチでオフィスにも最適。'
  },
  {
    id: 'pr-kb-06',
    typeCode: 'PR-KB',
    category: 'pr',
    subCategoryCode: 'PR-KB',
    name: 'HHKB Studio — Walnut Limited Edition',
    brand: 'PFU',
    price: 52800,
    releaseDate: '2024-08',
    imageUrl: ph('PR-KB', 6),
    description: 'HHKB Studioの天然ウォルナット製パームレスト同梱限定版。トラックポイント / ジェスチャーパッド機能はそのままに、高級木材の質感をプラス。',
    specs: [
      { label: 'キー方式', value: '静電容量無接点' },
      { label: '追加機能', value: 'トラックポイント / ジェスチャーパッド' },
      { label: '同梱品', value: '天然ウォルナット製パームレスト' },
      { label: '接続', value: 'Bluetooth / USB-C' },
      { label: '販売状況', value: '数量限定' }
    ],
    tags: ['限定モデル', '静電容量無接点', '高級木材'],
    status: 'limited',
    summary: 'HHKB Studioのウォルナット限定版。トラックポイント機能はそのままに高級木材の質感を追加。'
  },

  // ==================== PR — マウス ====================
  {
    id: 'pr-ms-01',
    typeCode: 'PR-MS',
    category: 'pr',
    subCategoryCode: 'PR-MS',
    name: 'MX Master 3S',
    brand: 'Logicool',
    price: 16500,
    releaseDate: '2022-05',
    imageUrl: ph('PR-MS', 1),
    description: 'クリエイター・ビジネス向けの定番ハイエンドマウス。静音クリックとMagSpeedスクロールで生産性が上がる。最大3台のデバイスをEasy-Switchで切り替えて使える万能マウス。',
    specs: [
      { label: 'センサー', value: '8000 DPI' },
      { label: 'ボタン',   value: '7ボタン + MagSpeed電磁スクロール' },
      { label: '接続',     value: 'Bluetooth / Logi Bolt USB' },
      { label: 'バッテリー', value: '最大70日' },
      { label: '対応',     value: 'Windows / macOS / Linux / iPadOS' }
    ],
    tags: ['定番', '静音', 'MagSpeed'],
    summary: 'ビジネス・クリエイター向けの定番ハイエンドマウス。静音+MagSpeedで生産性最大化。'
  },
  {
    id: 'pr-ms-02',
    typeCode: 'PR-MS',
    category: 'pr',
    subCategoryCode: 'PR-MS',
    name: 'Magic Mouse (USB-C)',
    brand: 'Apple',
    price: 13800,
    releaseDate: '2024-10',
    imageUrl: ph('PR-MS', 2),
    description: 'ようやくUSB-Cになった純正マウス。マルチタッチサーフェスはApple独自の操作感。スワイプでページ移動・ピンチでズームなどMac専用のジェスチャーが使える。',
    specs: [
      { label: '接続',   value: 'Bluetooth / USB-C有線' },
      { label: 'タッチ', value: 'マルチタッチサーフェス' },
      { label: 'バッテリー', value: '約1ヶ月' },
      { label: '対応',   value: 'Mac' },
      { label: '重量',   value: '99g' }
    ],
    tags: ['Apple', 'マルチタッチ', 'USB-C'],
    summary: 'ようやくUSB-Cになった純正マウス。Macのマルチタッチジェスチャーが使える。'
  },
  {
    id: 'pr-ms-03',
    typeCode: 'PR-MS',
    category: 'pr',
    subCategoryCode: 'PR-MS',
    name: 'Razer DeathAdder V3 Pro',
    brand: 'Razer',
    price: 18480,
    releaseDate: '2023-03',
    imageUrl: ph('PR-MS', 3),
    description: '63gの超軽量ワイヤレスゲーミングマウス。Focus Pro 30Kセンサーと8000Hzポーリングレートでeスポーツシーンの要求に応える。',
    specs: [
      { label: 'センサー', value: 'Focus Pro 30K' },
      { label: 'ポーリングレート', value: '最大8000Hz (HyperPolling使用時)' },
      { label: '重量', value: '63g' },
      { label: '接続', value: 'Razer HyperSpeed Wireless / 有線' },
      { label: 'バッテリー', value: '最大90時間' }
    ],
    tags: ['ゲーミング', '超軽量', '高ポーリングレート'],
    summary: '63gの超軽量ゲーミングマウス。Focus Pro 30Kと8000Hzポーリングでeスポーツ用途に最適。'
  },
  {
    id: 'pr-ms-04',
    typeCode: 'PR-MS',
    category: 'pr',
    subCategoryCode: 'PR-MS',
    name: 'MX Master 2S',
    brand: 'Logicool',
    price: 11000,
    releaseDate: '2016-10',
    imageUrl: ph('PR-MS', 4),
    description: 'MXシリーズの礎を築いた歴代モデル。後継機MX Master 3 / 3Sの登場により販売終了したが、Flow機能の元祖として今も語り継がれる名機。',
    specs: [
      { label: 'センサー', value: '4000 DPI' },
      { label: 'ボタン', value: '7ボタン' },
      { label: '接続', value: 'Bluetooth / Unifying USB' },
      { label: '機能', value: 'Logicool Flow (マルチPC操作)' },
      { label: '販売状況', value: '生産終了' }
    ],
    tags: ['生産終了', '旧モデル', 'Flow機能'],
    status: 'discontinued',
    summary: 'MXシリーズの礎を築いた歴代モデル。後継機登場で販売終了したFlow機能の元祖。'
  },

  // ==================== PR — モニター ====================
  {
    id: 'pr-mn-01',
    typeCode: 'PR-MN',
    category: 'pr',
    subCategoryCode: 'PR-MN',
    name: 'Studio Display',
    brand: 'Apple',
    price: 199800,
    priceText: '¥199,800 〜',
    releaseDate: '2022-03',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Apple_Studio_Display_2024.jpg/3840px-Apple_Studio_Display_2024.jpg',
    description: 'Apple純正の27インチ5K Retinaディスプレイ。A13チップ内蔵で12MPセンターフレームカメラ・6スピーカーも一体化。Thunderbolt 3 + USB-Cハブ機能で接続性も高い。',
    specs: [
      { label: 'ディスプレイ', value: '27インチ 5K Retina (5120 × 2880)' },
      { label: '色域',         value: 'P3 / True Tone' },
      { label: 'カメラ',       value: '12MP 超広角（センターフレーム対応）' },
      { label: 'スピーカー',   value: '6スピーカー（空間オーディオ対応）' },
      { label: '接続',         value: 'Thunderbolt 3 + USB-C × 3' }
    ],
    tags: ['Apple', '5K', 'カメラ一体型'],
    featured: true,
    summary: 'Apple純正27インチ5K Retinaモニター。A13チップ内蔵で12MPカメラ・6スピーカー統合。',
    features: ['27インチ 5K Retina', '12MP センターフレームカメラ', '6スピーカー空間オーディオ', 'Thunderbolt 3ポート'],
    pros: ['圧倒的な5K解像度', 'カメラ・スピーカー一体型で配線すっきり', 'Thunderbolt 3で96W給電'],
    cons: ['価格が高い', 'Mac専用設計（Windows非推奨）', 'リフレッシュレートは60Hz固定'],
    purchaseLink: 'https://www.apple.com/jp/shop/buy-mac/apple-displays/studio-display'
  },
  {
    id: 'pr-mn-02',
    typeCode: 'PR-MN',
    category: 'pr',
    subCategoryCode: 'PR-MN',
    name: 'ProArt PA32UCXR',
    brand: 'ASUS',
    price: 378000,
    releaseDate: '2023-08',
    imageUrl: ph('PR-MN', 2),
    description: 'ミニLED 4K HDRのカラーグレーディング用モニター。Adobe RGB 99.5% / DCI-P3 99%の工場校正済み品質で映像プロのデマンドに応える。',
    specs: [
      { label: 'ディスプレイ', value: '32インチ 4K ミニLED' },
      { label: '色域',         value: 'Adobe RGB 99.5% / DCI-P3 99%' },
      { label: '輝度',         value: '1600 nits ピーク' },
      { label: 'HDR',          value: 'VESA DisplayHDR 1400' },
      { label: '校正',         value: '工場校正済み / 内蔵キャリブレーター対応' }
    ],
    tags: ['カラーマネジメント', 'HDR', 'プロ向け'],
    summary: '工場校正済みのミニLED 4K HDR。Adobe RGB 99.5%でカラーグレーディングに最適。'
  },
  {
    id: 'pr-mn-03',
    typeCode: 'PR-MN',
    category: 'pr',
    subCategoryCode: 'PR-MN',
    name: 'LG UltraFine 32U990A',
    brand: 'LG',
    price: 248000,
    releaseDate: '2024-09',
    imageUrl: ph('PR-MN', 3),
    description: '31.5インチ6Kの新フォーマット。Thunderbolt 5対応でStudio Display対抗として内蔵カメラ・スピーカー・ハブ機能も搭載。Mac/Windows両対応の高汎用性モニター。',
    specs: [
      { label: 'ディスプレイ', value: '31.5インチ 6K (6144 × 3456)' },
      { label: '色域',         value: 'DCI-P3 98%' },
      { label: '接続',         value: 'Thunderbolt 5 + USB-C ハブ' },
      { label: 'カメラ',       value: '内蔵Webカメラ' },
      { label: '対応',         value: 'Mac / Windows' }
    ],
    tags: ['6K', 'Thunderbolt 5', 'ハブ機能'],
    summary: 'Thunderbolt 5対応の31.5インチ6Kモニター。カメラ・ハブ一体型でMac/Windows両対応。'
  },
  {
    id: 'pr-mn-04',
    typeCode: 'PR-MN',
    category: 'pr',
    subCategoryCode: 'PR-MN',
    name: 'Dell UltraSharp U3225QE',
    brand: 'Dell',
    price: 158000,
    releaseDate: '2024-07',
    imageUrl: ph('PR-MN', 4),
    description: '5K2K曲面ウルトラワイドでマルチタスクに特化したビジネス向けモニター。内蔵KVMスイッチで複数PCをケーブル1本で切替可能。',
    specs: [
      { label: 'ディスプレイ', value: '31.5インチ 5K2K曲面 IPS Black' },
      { label: '色域', value: 'sRGB 100% / DCI-P3 98%' },
      { label: '接続', value: 'Thunderbolt 4 × 2 + USB-C ハブ' },
      { label: 'KVM', value: '内蔵KVMスイッチ' },
      { label: '高さ調整', value: 'スタンド昇降対応' }
    ],
    tags: ['ウルトラワイド', 'KVM内蔵', 'ビジネス向け'],
    summary: '5K2K曲面ウルトラワイドのビジネス向けモニター。内蔵KVMで複数PC切替もケーブル1本で。'
  },
  {
    id: 'pr-mn-05',
    typeCode: 'PR-MN',
    category: 'pr',
    subCategoryCode: 'PR-MN',
    name: 'BenQ PD2728S',
    brand: 'BenQ',
    price: 88000,
    releaseDate: '2024-04',
    imageUrl: ph('PR-MN', 5),
    description: 'クリエイター向けに設計された27インチ4Kモニター。AQCOLORテクノロジーでPantone認証取得済みの正確な色再現を実現。',
    specs: [
      { label: 'ディスプレイ', value: '27インチ 4K UHD IPS' },
      { label: '色域', value: 'sRGB 100% / Pantone認証' },
      { label: '接続', value: 'Thunderbolt 4 × 1 + USB-C × 2' },
      { label: '機能', value: 'ハードウェアキャリブレーション対応' },
      { label: '高さ調整', value: 'スタンド昇降 / ピボット対応' }
    ],
    tags: ['クリエイター向け', 'Pantone認証', '4K'],
    summary: 'Pantone認証取得済みの27インチ4Kクリエイター向けモニター。正確な色再現が強み。'
  },

  // ==================== PR — ドック ====================
  {
    id: 'pr-dk-01',
    typeCode: 'PR-DK',
    category: 'pr',
    subCategoryCode: 'PR-DK',
    name: 'CalDigit TS4',
    brand: 'CalDigit',
    price: 58000,
    releaseDate: '2022-04',
    imageUrl: ph('PR-DK', 1),
    description: '18ポート搭載のThunderbolt 4ドック。98W給電 + デュアル4Kディスプレイ出力でノートPCを完全な母艦システムに変える定番ドック。',
    specs: [
      { label: 'ポート数',    value: '18ポート' },
      { label: 'Thunderbolt', value: 'Thunderbolt 4 × 3' },
      { label: '給電',        value: '98W（ホスト）/ 20W（ダウンストリーム）' },
      { label: 'ディスプレイ', value: 'デュアル4K / シングル8K対応' },
      { label: 'サイズ',      value: '143 × 96 × 26 mm' }
    ],
    tags: ['Thunderbolt 4', '多ポート', '業務用'],
    summary: '18ポートのThunderbolt 4ドック。98W給電 + デュアル4K出力でノートPCを母艦に。'
  },
  {
    id: 'pr-dk-02',
    typeCode: 'PR-DK',
    category: 'pr',
    subCategoryCode: 'PR-DK',
    name: 'Anker 777 Thunderbolt Dock',
    brand: 'Anker',
    price: 39990,
    releaseDate: '2023-11',
    imageUrl: ph('PR-DK', 2),
    description: '13ポート搭載のThunderbolt 4ドック。85W給電とデュアル4K出力に対応し、コスパ重視のクリエイターから支持されるモデル。',
    specs: [
      { label: 'ポート数', value: '13ポート' },
      { label: 'Thunderbolt', value: 'Thunderbolt 4 × 2' },
      { label: '給電', value: '85W' },
      { label: 'ディスプレイ', value: 'デュアル4K対応' },
      { label: 'サイズ', value: '160 × 76 × 26 mm' }
    ],
    tags: ['Thunderbolt 4', 'コスパ', '多ポート'],
    summary: '13ポートのThunderbolt 4ドック。85W給電 + デュアル4K出力をコスパ良く実現。'
  },

  // ==================== PR — Webカメラ ====================
  {
    id: 'pr-wc-01',
    typeCode: 'PR-WC',
    category: 'pr',
    subCategoryCode: 'PR-WC',
    name: 'Logicool MX Brio',
    brand: 'Logicool',
    price: 34650,
    releaseDate: '2024-04',
    imageUrl: ph('PR-WC', 1),
    description: '4K対応のフラッグシップWebカメラ。AI画像処理とプライバシーシャッターでビジネス会議に最適。視野角90°の広角レンズで複数人の会議でも全員が映る。',
    specs: [
      { label: '解像度',    value: '4K Ultra HD (30fps) / 1080p (60fps)' },
      { label: '視野角',    value: '90°（調整可）' },
      { label: 'フォーカス', value: 'AI対応オートフォーカス' },
      { label: 'プライバシー', value: '物理シャッター内蔵' },
      { label: '接続',      value: 'USB-C' }
    ],
    tags: ['4K', 'AI処理', 'プライバシーシャッター'],
    summary: '4K対応フラッグシップWebカメラ。AI処理 + 物理プライバシーシャッターでビジネス会議に最適。'
  },
  {
    id: 'pr-wc-02',
    typeCode: 'PR-WC',
    category: 'pr',
    subCategoryCode: 'PR-WC',
    name: 'Insta360 Link 2',
    brand: 'Insta360',
    price: 29800,
    releaseDate: '2024-03',
    imageUrl: ph('PR-WC', 2),
    description: 'ジンバル一体型で自動追尾するAIカメラ。1/1.5型センサーで暗所性能も高く、配信・会議どちらでも安定した映像を提供する。',
    specs: [
      { label: '解像度', value: '4K Ultra HD (30fps)' },
      { label: 'センサー', value: '1/1.5型' },
      { label: 'ジンバル', value: '3軸ジンバル自動追尾' },
      { label: 'AI機能', value: 'ジェスチャー操作対応' },
      { label: '接続', value: 'USB-C' }
    ],
    tags: ['ジンバル一体型', 'AI追尾', '4K'],
    summary: 'ジンバル一体型で自動追尾するAIウェブカメラ。暗所性能も高く配信・会議どちらにも対応。'
  },
  {
    id: 'pr-wc-03',
    typeCode: 'PR-WC',
    category: 'pr',
    subCategoryCode: 'PR-WC',
    name: 'Razer Kiyo Pro Ultra',
    brand: 'Razer',
    price: 36800,
    releaseDate: '2023-05',
    imageUrl: ph('PR-WC', 3),
    description: '一眼レフ用の大型CMOSセンサーを採用したストリーマー向けウェブカメラ。低照度耐性が高く、暗い配信環境でもクリアな映像を実現。',
    specs: [
      { label: '解像度', value: '4K (30fps) / 1080p (60fps)' },
      { label: 'センサー', value: '1/1.2型 大型CMOS' },
      { label: 'レンズ', value: '交換可能レンズマウント' },
      { label: '低照度性能', value: 'HDR対応 / 高感度' },
      { label: '接続', value: 'USB-C' }
    ],
    tags: ['ストリーマー向け', '大型センサー', '低照度耐性'],
    summary: '一眼レフ用大型センサー採用のストリーマー向けカメラ。低照度耐性が高くクリアな映像。'
  }
];

// ==================== ヘルパー関数 ====================

export function getCategory(id: string) {
  return getCategoryById(id);
}

export function getSubcategory(categoryId: string, subSlug: string) {
  const cat = getCategoryById(categoryId);
  return cat?.subCategories.find(s => s.code.toLowerCase() === subSlug);
}

export function getSubcategoryByCode(categoryId: string, code: string) {
  const cat = getCategoryById(categoryId);
  return cat?.subCategories.find(s => s.code === code);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId);
}

export function getProductsBySubcategory(categoryId: string, subSlug: string): Product[] {
  const subCode = subSlug.toUpperCase();
  return products.filter(p => p.category === categoryId && p.subCategoryCode === subCode);
}

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export const getProductById = getProduct;

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getRelatedProducts(id: string, limit = 3): Product[] {
  const target = getProduct(id);
  if (!target) return [];
  return products
    .filter(p => p.id !== id && p.subCategoryCode === target.subCategoryCode)
    .slice(0, limit);
}

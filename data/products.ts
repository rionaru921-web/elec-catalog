import type { Product } from '@/lib/types';
import { categories, getCategoryById } from '@/data/categories';

// Re-export for backward compat
export { categories };

const ph = (code: string, n: number) =>
  `https://placehold.co/800x800/0a0a0a/00FF95.png?text=${code}+${String(n).padStart(2, '0')}`;

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
    imageUrl: ph('SP-FD', 1),
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
    imageUrl: ph('TB-AD', 2),
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
    imageUrl: ph('PR-MN', 1),
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

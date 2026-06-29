import type { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    id: 'pc',
    code: 'PC',
    name: 'コンピューター',
    nameEn: 'Computers',
    tagline: 'デスクからモバイルまで、計算するための道具',
    description: '計算を司る装置。ノートから据え置きまで、用途より"形状"で並べる。',
    subCategories: [
      { code: 'PC-NB',  name: 'ノートPC',          description: '持ち運び前提の一体型' },
      { code: 'PC-DT',  name: 'デスクトップ',        description: '据え置きのタワー / 小型筐体' },
      { code: 'PC-WS',  name: 'ワークステーション',   description: '業務用ハイエンド' },
      { code: 'PC-2N1', name: '2-in-1',             description: 'タブレット変形型' },
      { code: 'PC-MN',  name: 'ミニPC',              description: '手のひらサイズの本体' }
    ]
  },
  {
    id: 'sp',
    code: 'SP',
    name: 'スマートフォン',
    nameEn: 'Smartphones',
    tagline: '常に持ち歩く、もっとも個人的な端末',
    description: 'ポケットに入る計算機。OSと折りたたみ可否で分類。',
    subCategories: [
      { code: 'SP-IP', name: 'iPhone',       description: 'Apple iOS搭載機' },
      { code: 'SP-AD', name: 'Android',      description: 'Google Android搭載機' },
      { code: 'SP-FD', name: '折りたたみ',    description: 'ヒンジを持つ可変筐体' }
    ]
  },
  {
    id: 'tb',
    code: 'TB',
    name: 'タブレット',
    nameEn: 'Tablets',
    tagline: '見る、描く、読む。画面そのものが道具になる',
    description: '板状のディスプレイ機。表示方式と用途で分類。',
    subCategories: [
      { code: 'TB-IP', name: 'iPad',                description: 'Apple iPadOS搭載機' },
      { code: 'TB-AD', name: 'Androidタブレット',    description: 'Android搭載機' },
      { code: 'TB-EI', name: 'E-Ink',               description: '電子ペーパー読書端末' },
      { code: 'TB-DW', name: '液タブ',               description: '描画用ペンタブレット' }
    ]
  },
  {
    id: 'au',
    code: 'AU',
    name: 'オーディオ',
    nameEn: 'Audio',
    tagline: '聴く、録る、鳴らす。音にまつわるすべての装置',
    description: '音を扱う装置。装着形態 / 設置形態で分類。',
    subCategories: [
      { code: 'AU-EB',  name: 'イヤホン',         description: '耳に入れる小型ドライバー' },
      { code: 'AU-HP',  name: 'ヘッドホン',        description: '耳を覆う大型ドライバー' },
      { code: 'AU-SP',  name: 'スピーカー',        description: '据え置き音響' },
      { code: 'AU-DAC', name: 'DAC / アンプ',     description: '信号変換 / 増幅装置' }
    ]
  },
  {
    id: 'pr',
    code: 'PR',
    name: '周辺機器',
    nameEn: 'Peripherals',
    tagline: 'PC・スマホの能力を、外側から拡張するもの',
    description: '本体を拡張する装置。入力 / 出力 / 接続で分類。',
    subCategories: [
      { code: 'PR-KB', name: 'キーボード',       description: '文字入力デバイス' },
      { code: 'PR-MS', name: 'マウス',           description: 'ポインティングデバイス' },
      { code: 'PR-MN', name: 'モニター',         description: '外部ディスプレイ' },
      { code: 'PR-DK', name: 'ドック',           description: 'ポート拡張 / 給電' },
      { code: 'PR-WC', name: 'Webカメラ',        description: '映像入力' }
    ]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getSubCategoryByCode(categoryId: string, code: string) {
  const cat = getCategoryById(categoryId);
  return cat?.subCategories.find(s => s.code === code);
}

export function getSubCategory(code: string) {
  for (const cat of categories) {
    const sub = cat.subCategories.find(s => s.code === code);
    if (sub) return { ...sub, parent: cat };
  }
  return undefined;
}

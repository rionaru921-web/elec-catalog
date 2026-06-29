import type { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'About | CATALOG',
  description: '用途ではなく、物理的な形状で電子機器を索引する。タイプ別分類カタログの設計思想。'
};

export default function AboutPage() {
  const totalTypes = categories.reduce((sum, c) => sum + c.subCategories.length, 0);
  const totalBrands = Array.from(new Set(products.map(p => p.brand))).length;

  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      </div>

      {/* ==================== § 00 MANIFESTO ==================== */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20">
        {/* Ghost "WHY" 背景 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-4 select-none font-mono font-black leading-none text-neon/[0.04]"
          style={{ fontSize: 'clamp(80px, 20vw, 320px)' }}
        >
          WHY
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 00</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Manifesto</span>
          </div>

          <h1 className="mb-12 text-6xl font-black leading-none tracking-tightest text-white lg:text-8xl">
            ABOUT <span className="text-neon">◉</span>
          </h1>

          {/* BIG QUOTE */}
          <div className="my-12 border-l-2 border-neon pl-6">
            <p className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              用途は変わる。<br />
              <span className="text-neon">形状は変わらない。</span>
            </p>
          </div>

          <p className="text-base leading-relaxed text-pale-700 lg:text-lg">
            電子機器を「仕事用」「ゲーミング用」「クリエイター向け」で分類するのは、もうやめよう。
            <br />
            ここは、物の形そのもので索引するカタログだ。
          </p>
        </div>
      </section>

      {/* ==================== § 01 PROBLEM ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 01</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Problem</span>
          </div>

          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tightest text-white lg:text-5xl">
            なぜ既存のカタログは<br />
            機能しないのか <span className="text-neon">◉</span>
          </h2>

          <p className="mb-6 text-base leading-relaxed text-pale-700 lg:text-lg">
            既存の電子機器カタログは、ほとんどが{' '}
            <span className="text-neon">用途</span>{' '}
            で分類されている。「ビジネス向けノートPC」「ゲーミングスマホ」「クリエイター向けタブレット」。
          </p>
          <p className="mb-6 text-base leading-relaxed text-pale-700 lg:text-lg">
            しかし、用途は{' '}
            <span className="text-neon">人によって変わる</span>
            。同じMacBook Proを使って、ある人は動画編集をし、別の人は文章を書く。
            同じiPad Proで、ある人は絵を描き、別の人は会計をする。
          </p>
          <p className="mb-12 text-base leading-relaxed text-pale-700 lg:text-lg">
            用途で分類するということは、製品を「誰のためのものか」決めつけることだ。
            これは検索の助けにはならない。むしろ、本来探していたものから人を遠ざける。
          </p>

          {/* COMPARISON CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="border border-red-500/30 bg-red-500/[0.04] p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-red-400">
                × 用途別分類
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-pale-700">
                <li>「ビジネスノート」と「クリエイターノート」が重複する</li>
                <li>新しい用途が出ると分類体系が破綻する</li>
                <li>主観的で、人によってブレが大きい</li>
                <li>探す人に前提知識が必要</li>
              </ul>
            </div>
            <div className="border border-neon/40 bg-neon/[0.04] p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-neon">
                ◉ タイプ別分類
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-pale-700">
                <li>「ノートPC」というカテゴリは1つだけ、明確</li>
                <li>新製品も既存の枠に収まる</li>
                <li>客観的、機械的に判定できる</li>
                <li>形さえ知っていれば探せる</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== § 02 SOLUTION ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 02</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Solution</span>
          </div>

          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tightest text-white lg:text-5xl">
            形状を<br />
            分類軸にする <span className="text-neon">◉</span>
          </h2>

          <p className="mb-6 text-base leading-relaxed text-pale-700 lg:text-lg">
            このカタログは、全ての電子機器を{' '}
            <span className="text-neon">物理的な形状</span>{' '}
            で索引する。机に置くのか、手に持つのか、耳に入れるのか。
            形が違えば、別のタイプ。形が同じなら、同じタイプ。
          </p>
          <p className="text-base leading-relaxed text-pale-700 lg:text-lg">
            この分類は{' '}
            <span className="text-neon">変化しない</span>
            。iPhoneの用途は5年で大きく変わったが、「板状のディスプレイにタッチ操作する小さな機械」という形そのものは変わっていない。
            <br />
            形状は、本質である。
          </p>
        </div>
      </section>

      {/* ==================== § 03 TAXONOMY ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 03</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Taxonomy</span>
          </div>

          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tightest text-white lg:text-5xl">
            タイプコード体系 <span className="text-neon">◉</span>
          </h2>

          <p className="mb-8 text-base leading-relaxed text-pale-700 lg:text-lg">
            全ての製品に、独自の{' '}
            <span className="font-mono text-neon">タイプコード</span>{' '}
            が付与される。形式は{' '}
            <span className="font-mono text-neon">[CATEGORY]-[SUBTYPE]</span>
            。
          </p>

          {/* EXAMPLE DIAGRAM */}
          <div className="my-8 border border-neon/30 bg-void-900 p-6 lg:p-10">
            <div className="mb-6 font-mono text-xs uppercase tracking-widest text-pale-500">
              // EXAMPLE
            </div>
            <div className="mb-8 font-mono text-4xl font-bold tracking-tight text-neon glow-neon lg:text-6xl">
              PC-NB
            </div>
            <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
              <div className="border-l-2 border-neon/40 pl-4">
                <div className="mb-2 font-mono text-xs uppercase tracking-widest text-neon">▸ PC</div>
                <div className="mb-1 font-mono text-white">Personal Computer</div>
                <div className="text-xs text-pale-500">→ コンピューター（演算装置）</div>
              </div>
              <div className="border-l-2 border-neon/40 pl-4">
                <div className="mb-2 font-mono text-xs uppercase tracking-widest text-neon">▸ NB</div>
                <div className="mb-1 font-mono text-white">Notebook</div>
                <div className="text-xs text-pale-500">→ 折りたたみ式、持ち運ぶ形</div>
              </div>
            </div>
          </div>

          <p className="text-base leading-relaxed text-pale-700 lg:text-lg">
            {totalTypes}種類のタイプコードが、{categories.length}つのカテゴリに整理されている。
            全てのコードは{' '}
            <Link
              href="/catalog"
              className="text-neon underline underline-offset-4 transition-colors hover:text-white"
            >
              索引ページ
            </Link>{' '}
            で確認できる。
          </p>
        </div>
      </section>

      {/* ==================== § 04 STATS ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 04</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Stats</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tightest text-white lg:text-5xl">
            実績 <span className="text-neon">◉</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            <StatCard label="Categories" value={categories.length} />
            <StatCard label="Type Codes" value={totalTypes} />
            <StatCard label="Products" value={products.length} />
            <StatCard label="Brands" value={totalBrands} />
          </div>
        </div>
      </section>

      {/* ==================== § 05 BUILT WITH ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 05</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Built With</span>
          </div>

          <h2 className="mb-8 text-3xl font-bold tracking-tightest text-white lg:text-5xl">
            技術スタック <span className="text-neon">◉</span>
          </h2>

          <div className="grid grid-cols-2 gap-3 font-mono text-sm md:grid-cols-3 lg:gap-4">
            {[
              { name: 'Next.js 14',   desc: 'App Router / SSG' },
              { name: 'TypeScript',   desc: 'Type-safe by default' },
              { name: 'Tailwind CSS', desc: 'Utility-first' },
              { name: 'Three.js',     desc: '3D particle galaxy' },
              { name: 'cmdk',         desc: 'Command palette' },
              { name: 'Vercel',       desc: 'Edge deployment' }
            ].map(tool => (
              <div
                key={tool.name}
                className="border border-neon/20 bg-void-900 p-4 transition-colors hover:border-neon/40"
              >
                <div className="mb-1 text-sm font-bold text-neon">{tool.name}</div>
                <div className="text-xs text-pale-500">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== END ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-20">
        <div className="text-center">
          <div className="mb-8 font-mono text-xs uppercase tracking-widest text-pale-500">
            ━━━ END OF MANIFESTO ━━━
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 border border-neon/40 px-6 py-3 font-mono text-sm uppercase tracking-widest text-neon transition-colors hover:bg-neon/10"
            >
              View Type Index →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-pale-500 transition-colors hover:text-neon"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-neon/30 bg-void-900 p-5 lg:p-6">
      <div className="mb-2 font-mono text-4xl font-bold leading-none tracking-tightest text-neon glow-soft lg:text-6xl">
        {value}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-pale-500">{label}</div>
    </div>
  );
}
